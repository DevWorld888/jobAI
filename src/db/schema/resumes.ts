// db/schema/resumes.ts
import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

export const resumes = pgTable("resumes", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(), // FK to users
  fileUrl: text("file_url").notNull(),
  parsedText: text("parsed_text"),
  uploadedAt: timestamp("uploaded_at").defaultNow(),
});

export type Resume = InferSelectModel<typeof resumes>;
export type NewResume = InferInsertModel<typeof resumes>;
