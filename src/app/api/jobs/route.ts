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
    console.log("Fetched jobs:", jobList);
    return NextResponse.json(jobList);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json(
      { message: "Error fetching jobs" },
      { status: 500 }
    );
  }
}