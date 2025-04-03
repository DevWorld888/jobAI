// db/schema/applications.ts
import { pgTable, serial, integer, timestamp, text } from "drizzle-orm/pg-core";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

export const applications = pgTable("applications", {
  id: serial("id").primaryKey(),
  jobId: integer("job_id").notNull(),
  userId: integer("user_id").notNull(),
  resumeId: integer("resume_id").notNull(),
  status: text("status").default("pending"), // pending | shortlisted | rejected
  appliedAt: timestamp("applied_at").defaultNow(),
});

export type Application = InferSelectModel<typeof applications>;
export type NewApplication = InferInsertModel<typeof applications>;
