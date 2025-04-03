// db/schema/ai_matches.ts
import { pgTable, serial, integer, real, timestamp } from "drizzle-orm/pg-core";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

export const aiMatches = pgTable("ai_matches", {
  id: serial("id").primaryKey(),
  jobId: integer("job_id").notNull(),
  resumeId: integer("resume_id").notNull(),
  score: real("score").notNull(), // AI-generated match score
  createdAt: timestamp("created_at").defaultNow(),
});

export type AIMatch = InferSelectModel<typeof aiMatches>;
export type NewAIMatch = InferInsertModel<typeof aiMatches>;
