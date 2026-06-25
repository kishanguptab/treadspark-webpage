import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { interestSubmissions } from "@/lib/schema";
import { interestFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        { error: "Database is not configured." },
        { status: 503 },
      );
    }

    const body = await request.json();
    const parsed = interestFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid form data." },
        { status: 400 },
      );
    }

    const { name, email, company, phone, message } = parsed.data;

    await getDb().insert(interestSubmissions).values({
      name,
      email,
      company,
      phone: phone || null,
      message: message || null,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Interest form submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit. Please try again later." },
      { status: 500 },
    );
  }
}
