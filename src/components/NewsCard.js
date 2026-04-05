import React from "react";

const NewsCard = ({ data }) => {
  const formattedDate = new Date(data.pubDate).toLocaleString();

  return (
    <div className="bg-white mb-4 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
      
      {/* Image */}
      {data.image_url && (
      <div className="overflow-hidden w-full h-56 rounded-lg mb-4 flex items-center justify-center bg-gray-100">
      {data.image_url ? (
        <img
          src={data.image_url}
          alt={data.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-gray-400 text-sm">
          <span className="text-2xl mb-1">🖼️</span>
          No Image Available
        </div>
      )}
    </div>
      )}

      <div className="p-5">
        
        {/* Category + Source */}
        <div className="flex items-center justify-between mb-3 text-xs">
          <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-medium">
            {data.category?.[0] || "General"}
          </span>
          <span className="text-gray-400">
            {data.source_name}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {data.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {data.description || "No description available"}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
          <span>
            {data.creator?.[0] || "Unknown Author"}
          </span>
          <span>{formattedDate}</span>
        </div>

        {/* Keywords */}
        {data.keywords && (
          <div className="flex flex-wrap gap-2 mb-4">
            {data.keywords.slice(0, 4).map((key, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md"
              >
                #{key}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">
            {data.country?.[0]} • {data.language}
          </span>

          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm font-medium hover:underline"
          >
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;