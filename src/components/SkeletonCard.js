import React from "react";

const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 animate-pulse">
      
      {/* Image Placeholder */}
      <div className="w-full h-56 bg-gray-300 rounded-lg mb-4"></div>

      {/* Title */}
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-3"></div>

      {/* Description */}
      <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-5/6 mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-2/3 mb-4"></div>

      {/* Footer */}
      <div className="flex justify-between">
        <div className="h-3 bg-gray-300 rounded w-1/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/6"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;