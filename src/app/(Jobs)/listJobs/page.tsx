'use client'
import useSWR from "swr";
import JobCard from '@/components/custom/cardJobs';
import  { JobCardSkeletonShimmer } from '@/components/custom/skeletonCardJobs';
import {  useState } from 'react';
import JobsListSkeleton from "@/components/custom/LoadingListJobs";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  logo: string;
};
const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Page() {
  
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'All' | 'Remote' | 'Full Time' | 'Part Time' | 'Contract'>('All');
  const { data: jobs, error, isLoading } = useSWR<Job[]>("/api/jobs", fetcher);

  if (isLoading) return <JobsListSkeleton />;
  if (error) return <p>There was an error loading jobs</p>;

  const filteredJobs = (jobs ?? []).filter((job: Job) => {
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
         <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">List Jobs</h1>
          <p className="text-gray-600">Here you can find all the jobs available.</p>
        </div>
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
        {isLoading ? (
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
