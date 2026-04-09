import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import LoadingGrid from "../components/LoadingGrid";

const MainContent = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const BASE_URL = process.env.REACT_APP_NEWS_URL;

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
  
        const res = await fetch(
          `${BASE_URL}?apikey=${API_KEY}&country=in&language=en`
        );
  
        const data = await res.json();
  
        console.log("API Response:", data);
  
        // ✅ Handle API error (Rate limit etc.)
        if (data.status === "error") {
          setError(data.results?.message || "Something went wrong");
          setNews([]);
          return;
        }
  
        // ✅ Handle valid data
        if (Array.isArray(data.results)) {
          setNews(data.results);
        } else if (Array.isArray(data.articles)) {
          setNews(data.articles);
        } else {
          setNews([]);
        }
  
      } catch (err) {
        console.error(err);
        setError("Failed to fetch news");
      } finally {
        setIsLoading(false);
      }
    };
  
    getData();
  }, [BASE_URL, API_KEY]);

  // ✅ Safe filtering (no crash ever)
  const filteredNews = Array.isArray(news)
    ? news.filter((item) => {
        const matchesSearch =
          item.title?.toLowerCase().includes(search.toLowerCase()) ||
          item.description?.toLowerCase().includes(search.toLowerCase());

        const matchesCategory =
          category === "all" ||
          item.category?.includes(category) ||
          item.source_id?.includes(category); // fallback (some APIs use this)

        return matchesSearch && matchesCategory;
      })
    : [];

  // ✅ UI States
  if (isLoading) return <LoadingGrid />;
  if (error)
  return (
    <div className="flex flex-col items-center justify-center mt-20 text-center px-4">
      
      <h2 className="text-xl md:text-2xl font-semibold text-red-500 mb-2">
      News Limit Reached
      </h2>

      <p className="text-gray-600 max-w-md">
        {error}
      </p>

      <button
        onClick={() => window.location.reload()}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Try Again!
      </button>
    </div>
  );

  if (error)
    return (
      <p className="text-red-500 text-center mt-10 text-lg">
        {error}
      </p>
    );

  return (
    <div className="p-4">
      
      {/* 🔍 Search + Filter */}
      <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between">
        
        <input
          type="text"
          placeholder="Search news..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none"
        >
          <option value="all">All</option>
          <option value="sports">Sports</option>
          <option value="business">Business</option>
          <option value="technology">Technology</option>
          <option value="top">Top</option>
        </select>
      </div>

      {/* 📰 News Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        
        {filteredNews.length > 0 ? (
          filteredNews.map((data, index) => (
            <NewsCard
              key={data.article_id || data.url || index} // ✅ safe key
              data={data}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 text-lg">
            No results found
          </p>
        )}

      </div>
    </div>
  );
};

export default MainContent;