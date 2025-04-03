import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import { jobs } from "./schema/jobs";
import { users } from "./schema/users";
import { jobRelations } from "./schema/jobs.relations";

// Load environment variables from .env.local
config({ path: ".env" });

// Ensure DATABASE_URL is set
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in .env.local");
}

// Initialize the Neon database connection
const sql = neon(process.env.DATABASE_URL);

// Initialize Drizzle ORM with optional logger
const db = drizzle(sql, { 
  logger: true,
  schema:{
      jobs,
      users, // Add other schemas here
      jobRelations,
  }
}); // Uncomment to enable logging

// Centraliza todas las tablas y relaciones aquí

export * from "./schema/users";
export * from "./schema/users.relations";

export * from "./schema/jobs";
export * from "./schema/jobs.relations";

export * from "./schema/resumes";
export * from "./schema/resume.relations";

export * from "./schema/aplications";
export * from "./schema/applications.relations";

export * from "./schema/ai_matches";
export * from "./schema/ai_matches.relations";


export { db };