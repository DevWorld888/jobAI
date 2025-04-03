import { pgTable, serial, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

// Jobs table schema
export const jobs = pgTable("jobs", {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 255 }).notNull(), // varchar with a max length of 255
    company: varchar("company", { length: 255 }).notNull(), // varchar with a max length of 255
    location: varchar("location", { length: 255 }).notNull(), // varchar with a max length of 255
    description: varchar("description", { length: 1000 }).notNull(), // varchar with a max length of 1000
    requirements: varchar("requirements", { length: 1000 }).notNull(), // varchar with a max length of 1000
    recruiterId: integer("recruiter_id").notNull(), // linked to the user who posts it
    createdAt: timestamp("created_at").defaultNow(),
  });

// Type helpers (for TypeScript support)
export type Job = InferSelectModel<typeof jobs>;
export type NewJob = InferInsertModel<typeof jobs>;