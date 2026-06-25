import { Resend } from "resend";

let _resend: Resend | null = null;

function getResend() {
  if (!_resend) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not set");
    }
    _resend = new Resend(apiKey);
  }
  return _resend;
}

export async function sendDailyReport(
  excelBuffer: Buffer,
  submissionCount: number,
): Promise<void> {
  const recipient = process.env.INTEREST_RECIPIENT_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!recipient) {
    throw new Error("INTEREST_RECIPIENT_EMAIL is not set");
  }
  if (!from) {
    throw new Error("RESEND_FROM_EMAIL is not set");
  }
  const dateLabel = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "America/New_York",
  });

  await getResend().emails.send({
    from,
    to: recipient,
    subject: `Tread Spark — Daily Interest Report (${dateLabel})`,
    html: `
      <p>Attached is today's Tread Spark interest report with <strong>${submissionCount}</strong> new submission${submissionCount === 1 ? "" : "s"}.</p>
      <p>— Tread Spark</p>
    `,
    attachments: [
      {
        filename: `treadspark-interest-${dateLabel.replace(/,/g, "").replace(/\s+/g, "-").toLowerCase()}.xlsx`,
        content: excelBuffer,
      },
    ],
  });
}
