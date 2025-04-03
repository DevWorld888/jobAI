import { relations } from "drizzle-orm";
import { jobs } from "./jobs";
import { users } from "./users";
import { applications } from "./aplications";
import { aiMatches } from "./ai_matches";

export const jobRelations = relations(jobs, ({ one, many }) => ({
  recruiter: one(users, {
    fields: [jobs.recruiterId],
    references: [users.id],
  }),
  applications: many(applications),
  aiMatches: many(aiMatches),
}));