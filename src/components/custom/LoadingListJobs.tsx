import React from 'react';
import { Search } from 'lucide-react';

const JobCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 animate-pulse">
      {/* Category and New badge */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-4 w-16 bg-gray-200 rounded"></div>
          <div className="h-5 w-8 bg-red-200 rounded-full"></div>
        </div>
      </div>
      
      {/* Job title */}
      <div className="h-6 w-3/4 bg-gray-200 rounded mb-6"></div>
      
      {/* Salary */}
      <div className="h-8 w-20 bg-gray-200 rounded mb-6"></div>
      
      {/* Job details */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-gray-200 rounded"></div>
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-gray-200 rounded"></div>
          <div className="h-4 w-16 bg-gray-200 rounded"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-gray-200 rounded"></div>
          <div className="h-4 w-20 bg-gray-200 rounded"></div>
        </div>
      </div>
      
      {/* Tags */}
      <div className="flex gap-2 mb-6">
        <div className="h-6 w-32 bg-green-200 rounded-full"></div>
        <div className="h-6 w-16 bg-green-200 rounded-full"></div>
        <div className="h-6 w-12 bg-green-200 rounded-full"></div>
      </div>
      
      {/* Action buttons */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="h-5 w-5 bg-gray-200 rounded"></div>
          <div className="h-5 w-5 bg-gray-200 rounded"></div>
          <div className="h-5 w-5 bg-gray-200 rounded"></div>
        </div>
        <div className="h-5 w-5 bg-gray-200 rounded"></div>
      </div>
      
      {/* View Job button */}
      <div className="h-12 w-full bg-gray-900 rounded-lg"></div>
    </div>
  );
};

const FilterButtonSkeleton = () => {
  return <div className="h-10 w-20 bg-gray-200 rounded-lg animate-pulse"></div>;
};

const JobsListSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">List Jobs</h1>
          <p className="text-gray-600">Here you can find all the jobs available.</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search bar */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <div className="w-full h-12 pl-10 pr-4 bg-gray-100 border border-gray-200 rounded-lg animate-pulse"></div>
            </div>
            
            {/* Filter buttons */}
            <div className="flex gap-2 flex-wrap">
              <div className="h-10 w-12 bg-blue-600 rounded-lg"></div>
              <FilterButtonSkeleton />
              <FilterButtonSkeleton />
              <FilterButtonSkeleton />
              <FilterButtonSkeleton />
            </div>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <JobCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsListSkeleton;