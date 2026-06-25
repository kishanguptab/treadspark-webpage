import * as XLSX from "xlsx";
import type { InterestSubmission } from "./schema";

export function buildInterestWorkbook(submissions: InterestSubmission[]): Buffer {
  const rows = submissions.map((s) => ({
    Date: s.createdAt.toISOString(),
    Name: s.name,
    Email: s.email,
    Company: s.company,
    Phone: s.phone ?? "",
    Message: s.message ?? "",
  }));

  const worksheet = XLSX.utils.json_to_sheet(rows);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Interest Submissions");

  const buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });
  return Buffer.from(buffer);
}
