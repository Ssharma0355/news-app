import { RefreshCw } from "lucide-react";

const Navbar = () => {
  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-4 md:px-6 sticky top-0 z-30">
      
      {/* Logo */}
      <h1 className="text-xl font-bold text-gray-800">
        Fast News 📰
      </h1>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        
        {/* Refresh Button */}
        <button
         onClick={() => window.location.reload()}
          className="flex items-center gap-2 px-3 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          <RefreshCw size={16} />
          <span className="hidden md:inline">Refresh</span>
        </button>

      </div>
    </div>
  );
};

export default Navbar;