import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="relative">
        
        {/* Outer Ring */}
        <div className="w-16 h-16 border-4 border-gray-200 rounded-full"></div>

        {/* Animated Ring */}
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      </div>
    </div>
  );
};

export default Spinner;