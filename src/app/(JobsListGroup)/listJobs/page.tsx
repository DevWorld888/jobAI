'use client'

import JobCard from '@/components/custom/cardJobs';
import JobCardSkeleton, { JobCardSkeletonShimmer } from '@/components/custom/skeletonCardJobs';
import { useEffect, useState } from 'react';
// Ejemplo de datos de trabajos
// const jobs = [
//   {
//     id: 1,
//     title: "Frontend Developer",
//     company: "Tech Solutions",
//     location: "Remote",
//     type: "Full Time",
//     salary: "$80k - $100k",
//     logo: "/images/logo/logo-icon.svg",
//   },
//   {
//     id: 2,
//     title: "Backend Engineer",
//     company: "Cloudify",
//     location: "Sydney, NSW",
//     type: "Part Time",
//     salary: "$60k - $80k",
//     logo: "/images/logo/logo-icon.svg",
//   },
//   {
//     id: 3,
//     title: "UI/UX Designer",
//     company: "DesignPro",
//     location: "Melbourne, VIC",
//     type: "Contract",
//     salary: "$70k - $90k",
//     logo: "/images/logo/logo-icon.svg",
//   },
//   {
//     id: 4,
//     title: "AI Researcher",
//     company: "OpenAI",
//     location: "Remote",
//     type: "Full Time",
//     salary: "$120k - $150k",
//     logo: "/images/logo/logo-icon.svg",
//   },
// ];

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  logo: string;
};

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'All' | 'Remote' | 'Full Time' | 'Part Time' | 'Contract'>('All');

  useEffect(() => {
    // Replace '/api/jobs' with your actual API endpoint
    fetch('/api/jobs/')
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  

  const filteredJobs = jobs.filter(job => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filter === 'All' ||
      (filter === 'Remote' && job.location.toLowerCase() === 'remote') ||
      (filter === 'Full Time' && job.type === 'Full Time') ||
      (filter === 'Part Time' && job.type === 'Part Time') ||
      (filter === 'Contract' && job.type === 'Contract');
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screenpx-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">List Jobs</h1>
        <p className="text-center text-gray-500 mb-8">Here you can find all the jobs available.</p>
        {/* Search and Filters */}
        <form
          className="w-full max-w-3xl mx-auto flex flex-col sm:flex-row items-center bg-white rounded-xl shadow-md border border-gray-200 px-4 py-2 mb-8 gap-2"
          onSubmit={e => e.preventDefault()}
        >
          <span className="text-gray-400 pl-1 pr-2">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search jobs, company or location"
            className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400 text-base"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="flex gap-2 flex-wrap mt-2 sm:mt-0">
            <button
              type="button"
              className={`px-3 py-1 rounded-lg text-sm font-medium border ${filter === 'All' ? 'bg-blue-600 text-white' : 'bg-[#7F8CAA] text-white'} hover:bg-blue-500 hover:text-white transition`}
              onClick={() => setFilter('All')}
            >
              All
            </button>
            <button
              type="button"
              className={`px-3 py-1 rounded-lg text-sm font-medium border ${filter === 'Remote' ? 'bg-blue-600 text-white' : 'bg-[#7F8CAA] text-white'} hover:bg-blue-500 hover:text-white transition`}
              onClick={() => setFilter('Remote')}
            >
              Remote
            </button>
            <button
              type="button"
              className={`px-3 py-1 rounded-lg text-sm font-medium border ${filter === 'Full Time' ? 'bg-blue-600 text-white' : 'bg-[#7F8CAA] text-white'} hover:bg-blue-500 hover:text-white transition`}
              onClick={() => setFilter('Full Time')}
            >
              Full Time
            </button>
            <button
              type="button"
              className={`px-3 py-1 rounded-lg text-sm font-medium border ${filter === 'Part Time' ? 'bg-blue-600 text-white' : 'bg-[#7F8CAA] text-white'} hover:bg-blue-500 hover:text-white transition`}
              onClick={() => setFilter('Part Time')}
            >
              Part Time
            </button>
            <button
              type="button"
              className={`px-3 py-1 rounded-lg text-sm font-medium border ${filter === 'Contract' ? 'bg-blue-600 text-white' : 'bg-[#7F8CAA] text-white'} hover:bg-blue-500 hover:text-white transition`}
              onClick={() => setFilter('Contract')}
            >
              Contract
            </button>
          </div>
        </form>
        {/* Cards */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <JobCardSkeletonShimmer key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {filteredJobs.length === 0 && (
              <div className="col-span-full text-center text-gray-400 py-12">
                No jobs found.
              </div>
            )}
            {filteredJobs.map(job => (
              // <div
              //   key={job.id}
              //   className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-200"
              // >
              //   <div className="flex items-center gap-3 mb-4">
              //     <img src={job.logo} alt={job.company} className="w-10 h-10 rounded-full bg-gray-100" />
              //     <div>
              //       <h2 className="text-lg font-semibold">{job.title}</h2>
              //       <span className="text-sm text-gray-500">{job.company}</span>
              //     </div>
              //   </div>
              //   <div className="flex flex-col gap-1 mb-4">
              //     <span className="text-gray-700 text-sm">{job.location}</span>
              //     <span className="inline-block text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded mr-2">{job.type}</span>
              //     <span className="text-green-600 font-semibold">{job.salary}</span>
              //   </div>
              //   <button className="mt-auto px-4 py-2 bg-[#0f1d3c] text-white rounded-lg hover:bg-[#2c2f4e] transition-colors text-sm font-medium cursor-pointer">
              //     View Details
              //   </button>
              // </div>

              <JobCard 
              key={job.id}
              company={job.company}
              title={job.title}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
