import { NextResponse } from "next/server";
import { inArray, isNull } from "drizzle-orm";
import { getDb } from "@/lib/db";
import { interestSubmissions } from "@/lib/schema";
import { buildInterestWorkbook } from "@/lib/excel";
import { sendDailyReport } from "@/lib/email";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { error: "Database is not configured." },
      { status: 503 },
    );
  }

  try {
    const db = getDb();
    const submissions = await db
      .select()
      .from(interestSubmissions)
      .where(isNull(interestSubmissions.exportedAt));

    if (submissions.length === 0) {
      return NextResponse.json({
        success: true,
        message: "No new submissions to export.",
        count: 0,
      });
    }

    const excelBuffer = buildInterestWorkbook(submissions);
    await sendDailyReport(excelBuffer, submissions.length);

    const now = new Date();
    const ids = submissions.map((s) => s.id);

    await db
      .update(interestSubmissions)
      .set({ exportedAt: now })
      .where(inArray(interestSubmissions.id, ids));

    return NextResponse.json({
      success: true,
      message: `Exported and emailed ${submissions.length} submission(s).`,
      count: submissions.length,
    });
  } catch (error) {
    console.error("Daily export cron error:", error);
    return NextResponse.json(
      { error: "Failed to run daily export." },
      { status: 503 },
    );
  }
}
