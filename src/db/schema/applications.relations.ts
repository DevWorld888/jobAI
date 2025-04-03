import { relations } from "drizzle-orm";
import { applications } from "./aplications";
import { users } from "./users";
import { jobs } from "./jobs";
import { resumes } from "./resumes";

export const applicationRelations = relations(applications, ({ one }) => ({
  user: one(users, {
    fields: [applications.userId],
    references: [users.id],
  }),
  job: one(jobs, {
    fields: [applications.jobId],
    references: [jobs.id],
  }),
  resume: one(resumes, {
    fields: [applications.resumeId],
    references: [resumes.id],
  }),
}));
