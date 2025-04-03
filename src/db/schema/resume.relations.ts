import { relations } from "drizzle-orm";
import { resumes } from "./resumes";
import { users } from "./users";
import { applications } from "./aplications";
import { aiMatches } from "./ai_matches";

export const resumeRelations = relations(resumes, ({ one, many }) => ({
  user: one(users, {
    fields: [resumes.userId],
    references: [users.id],
  }),
  applications: many(applications),
  aiMatches: many(aiMatches),
}));
