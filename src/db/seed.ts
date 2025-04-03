import { db } from "@/db/index"
import { faker } from "@faker-js/faker"

import { users, jobs, resumes, applications, aiMatches } from "@/db/index"



async function seed() {
    console.log("🌱 Seeding database with fake data...");
    const createdUsers = [];
    const createdJobs = [];
    const createdResumes = [];
    // Create 5 recruiters and 5 job seekers
    for (let i = 0; i < 5; i++) {
        const recruiter = await db.insert(users).values({
            name: faker.person.fullName(),
            age: faker.number.int({ min: 25, max: 50 }),
            email: faker.internet.email(),
            role: "recruiter",
        }).returning();

        const jobSeeker = await db.insert(users).values({
            name: faker.person.fullName(),
            age: faker.number.int({ min: 18, max: 40 }),
            email: faker.internet.email(),
            role: "job_seeker",
        }).returning();

        createdUsers.push({ recruiter: recruiter[0], jobSeeker: jobSeeker[0] });
    }
    // Create 10 jobs from random recruiters
    for (let i = 0; i < 10; i++) {
        const recruiter = faker.helpers.arrayElement(createdUsers).recruiter;
        const job = await db.insert(jobs).values({
            title: faker.person.jobTitle(),
            company: faker.company.name(),
            location: faker.location.city(),
            description: faker.lorem.paragraph(),
            requirements: faker.lorem.sentences(2),
            recruiterId: recruiter.id,
        }).returning();

        createdJobs.push(job[0]);
    }
    // Create 10 resumes from random job seekers
    for (let i = 0; i < 10; i++) {
        const jobSeeker = faker.helpers.arrayElement(createdUsers).jobSeeker;
        const job = faker.helpers.arrayElement(createdJobs);
        const resume = await db.insert(resumes).values({
            userId: jobSeeker.id,
            fileUrl: "https://example.com/resume.pdf",
            parsedText: faker.lorem.paragraphs(2),
          }).returning();
      
        createdResumes.push(resume[0]);

        await db.insert(applications).values({
            userId: jobSeeker.id,
            jobId: job.id,
            resumeId: resume[0].id,
            status: "pending",
        });

        await db.insert(aiMatches).values({
            jobId: job.id,
            resumeId: resume[0].id,
            score: Number(faker.number.float({ min: 0.5, max: 0.95 }).toFixed(2)),
        });
    }
    

    console.log("✅ Database seeded with 10 jobs, users, resumes, and matches.");
}

seed().catch((err) => {
    console.error("❌ Seed error:", err);
    process.exit(1);
});