import React from 'react';

const ButtonSkeleton = () => {
  return (
    <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200 shadow-sm w-48">
      {/* Avatar skeleton */}
      <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
      
      {/* Content skeleton */}
      <div className="flex-1 flex items-center justify-between">
        <div className="h-4 bg-gray-300 rounded w-20 animate-pulse"></div>
        <div className="w-4 h-4 bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default ButtonSkeleton;