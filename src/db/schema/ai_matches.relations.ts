import { relations } from "drizzle-orm";
import { aiMatches } from "./ai_matches";
import { jobs } from "./jobs";
import { resumes } from "./resumes";

export const aiMatchRelations = relations(aiMatches, ({ one }) => ({
  job: one(jobs, {
    fields: [aiMatches.jobId],
    references: [jobs.id],
  }),
  resume: one(resumes, {
    fields: [aiMatches.resumeId],
    references: [resumes.id],
  }),
}));
