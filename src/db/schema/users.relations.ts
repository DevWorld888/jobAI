import { relations } from "drizzle-orm";
import { users } from "./users";
import { jobs } from "./jobs";
import { resumes } from "./resumes";
import { applications } from "./aplications";

export const userRelations = relations(users, ({ many }) => ({
  jobs: many(jobs),
  resumes: many(resumes),
  applications: many(applications),
}));