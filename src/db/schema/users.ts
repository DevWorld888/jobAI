import { integer, pgTable, varchar,text,timestamp } from "drizzle-orm/pg-core";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";


export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  role: text("role").default("job_seeker"), // job_seeker | recruiter | admin
  createdAt: timestamp("created_at").defaultNow(),
});


export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;