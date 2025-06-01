import { db } from "@/db/index";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const jobList = await db.query.jobs.findMany({
      with: {
        recruiter: true,
      },
      orderBy: (jobs, { desc }) => [desc(jobs.createdAt)],
    });

    // Map DB jobs to the structure your frontend expects
    const jobs = jobList.map(job => ({
      id: job.id,
      title: job.title,
      company: job.recruiter?.name || job.company || "Unknown",
      location: job.location,
      type: job.type,
      salary: job.salary,
      logo: job.logo || "/images/logo/logo-icon.svg", // fallback if missing
    }));

    return NextResponse.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json(
      { message: "Error fetching jobs" },
      { status: 500 }
    );
  }
}