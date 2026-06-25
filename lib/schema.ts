import {
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const interestSubmissions = pgTable("interest_submissions", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  phone: text("phone"),
  message: text("message"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  exportedAt: timestamp("exported_at", { withTimezone: true }),
});

export type InterestSubmission = typeof interestSubmissions.$inferSelect;
export type NewInterestSubmission = typeof interestSubmissions.$inferInsert;
