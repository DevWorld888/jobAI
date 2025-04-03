CREATE TABLE "ai_matches" (
	"id" serial PRIMARY KEY NOT NULL,
	"job_id" integer NOT NULL,
	"resume_id" integer NOT NULL,
	"score" real NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "applications" (
	"id" serial PRIMARY KEY NOT NULL,
	"job_id" integer NOT NULL,
	"user_id" integer NOT NULL,
	"resume_id" integer NOT NULL,
	"status" text DEFAULT 'pending',
	"applied_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "jobs" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"company" varchar(255) NOT NULL,
	"location" varchar(255) NOT NULL,
	"description" varchar(1000) NOT NULL,
	"requirements" varchar(1000) NOT NULL,
	"recruiter_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "resumes" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"file_url" text NOT NULL,
	"parsed_text" text,
	"uploaded_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"age" integer NOT NULL,
	"email" varchar(255) NOT NULL,
	"role" text DEFAULT 'job_seeker',
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
