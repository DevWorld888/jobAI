import React from 'react';

const JobCardSkeleton: React.FC = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
      {/* Header skeleton */}
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 px-6 py-8 text-center">
        {/* Logo skeleton */}
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-full"></div>
        {/* Company name skeleton */}
        <div className="w-24 h-5 bg-gray-300 rounded mx-auto"></div>
      </div>

      {/* Content skeleton */}
      <div className="p-6">
        {/* Badge and category skeleton */}
        <div className="flex items-center mb-2">
          <div className="w-12 h-4 bg-gray-200 rounded mr-2"></div>
          <div className="w-8 h-5 bg-red-200 rounded-full"></div>
        </div>

        {/* Title skeleton */}
        <div className="mb-4">
          <div className="w-full h-6 bg-gray-300 rounded mb-2"></div>
          <div className="w-3/4 h-6 bg-gray-300 rounded"></div>
        </div>

        {/* Salary skeleton */}
        <div className="mb-6">
          <div className="w-16 h-8 bg-gray-300 rounded"></div>
        </div>

        {/* Job details skeleton */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-200 rounded mr-2"></div>
            <div className="w-32 h-4 bg-gray-200 rounded"></div>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-200 rounded mr-2"></div>
            <div className="w-20 h-4 bg-gray-200 rounded"></div>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-200 rounded mr-2"></div>
            <div className="w-24 h-4 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Skills skeleton */}
        <div className="flex flex-wrap gap-2 mb-6">
          <div className="w-28 h-7 bg-green-100 rounded-full"></div>
          <div className="w-16 h-7 bg-green-100 rounded-full"></div>
          <div className="w-12 h-7 bg-gray-200 rounded-full"></div>
        </div>

        {/* Actions skeleton */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-5 h-5 bg-gray-200 rounded"></div>
            <div className="w-5 h-5 bg-gray-200 rounded"></div>
            <div className="w-5 h-5 bg-gray-200 rounded"></div>
          </div>
          <div className="w-5 h-5 bg-gray-200 rounded"></div>
        </div>

        {/* Button skeleton */}
        <div className="w-full h-12 bg-gray-300 rounded-xl"></div>
      </div>
    </div>
  );
};

// Componente que muestra múltiples skeletons
const JobCardSkeletonGrid: React.FC<{ count?: number }> = ({ count = 3 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {Array.from({ length: count }, (_, index) => (
        <JobCardSkeleton key={index} />
      ))}
    </div>
  );
};

// Componente con animación de shimmer más avanzada
const JobCardSkeletonShimmer: React.FC = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden relative">
      {/* Shimmer overlay */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
      
      {/* Header skeleton */}
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 px-6 py-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="w-24 h-5 bg-gray-300 rounded mx-auto animate-pulse"></div>
      </div>

      {/* Content skeleton */}
      <div className="p-6">
        <div className="flex items-center mb-2">
          <div className="w-12 h-4 bg-gray-200 rounded mr-2 animate-pulse"></div>
          <div className="w-8 h-5 bg-red-200 rounded-full animate-pulse"></div>
        </div>

        <div className="mb-4">
          <div className="w-full h-6 bg-gray-300 rounded mb-2 animate-pulse"></div>
          <div className="w-3/4 h-6 bg-gray-300 rounded animate-pulse"></div>
        </div>

        <div className="mb-6">
          <div className="w-16 h-8 bg-gray-300 rounded animate-pulse"></div>
        </div>

        <div className="space-y-3 mb-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center">
              <div className="w-4 h-4 bg-gray-200 rounded mr-2 animate-pulse"></div>
              <div className={`h-4 bg-gray-200 rounded animate-pulse ${
                i === 1 ? 'w-32' : i === 2 ? 'w-20' : 'w-24'
              }`}></div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <div className="w-28 h-7 bg-green-100 rounded-full animate-pulse"></div>
          <div className="w-16 h-7 bg-green-100 rounded-full animate-pulse"></div>
          <div className="w-12 h-7 bg-gray-200 rounded-full animate-pulse"></div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
          <div className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
        </div>

        <div className="w-full h-12 bg-gray-300 rounded-xl animate-pulse"></div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default JobCardSkeleton;
export { JobCardSkeletonGrid, JobCardSkeletonShimmer };