// Purpose: Configuration file for drizzle-kit
import 'dotenv/config';
import { defineConfig } from "drizzle-kit";
console.log(process.env.DATABASE_URL);
export default defineConfig({
    schema: "./src/db/schema/",
    out:"./src/db/migrations/",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL || "default_database_url",
    }
});