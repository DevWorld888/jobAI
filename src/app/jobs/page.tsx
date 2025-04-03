"use client";
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

type Job = {
    id: number;
    title: string;
    company: string;
    location: string;
    description: string;
    createdAt: string;
    recruiter: {
        name: string;
    };
};
const Page = () => {

    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        //   fetch("/api/jobs")
        //     .then((res) => res.json())
        //     .then((data) => setJobs(data));
        const fetchJobs = async () => {
            const res = await fetch("/api/jobs");
            if (!res.ok) {
                throw new Error("Failed to fetch jobs");
            }
            const data = await res.json();
            setJobs(data);
        }
        fetchJobs()
            .then(() => console.log("Jobs fetched successfully"))
            .catch((error) => console.error("Error fetching jobs:", error));

    }, []);
    return (
        <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Available Jobs</h1>
        <div className="grid gap-4">
          {jobs.map((job) => (
            <div key={job.id} className="border p-4 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-sm text-muted-foreground mb-2">
                {job.company} • {job.location}
              </p>
              <p className="text-sm">{job.description}</p>
              <p className="text-xs mt-2 text-right">Posted by {job.recruiter?.name}</p>
            </div>
          ))}
        </div>
      </div>
    )
}

export default Page
