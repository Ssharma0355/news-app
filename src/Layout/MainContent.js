import React, { useEffect, useState } from 'react'
import NewsCard from '../components/NewsCard'
import LoadingGrid from '../components/LoadingGrid'

const MainContent = () => {
  const [news, setNews] = useState([])
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const BASE_URL = process.env.REACT_APP_NEWS_URL;

  const getData = async () => {
    try {
      const res = await fetch(
        `${BASE_URL}?apikey=${API_KEY}&country=in&language=en`
      );
      const data = await res.json();
      setNews(data.results || []);
    } catch (err) {
      setError("Failed to fetch news");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // ✅ Filter logic
  const filteredNews = news.filter((item) => {
    const matchesSearch =
      item.title?.toLowerCase().includes(search.toLowerCase()) ||
      item.description?.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || item.category?.includes(category);

    return matchesSearch && matchesCategory;
  });

  if (isLoading) return <LoadingGrid />;
  if (error) return <p className="text-red-500">{error}</p>;

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
          filteredNews.map((data) => (
            <NewsCard key={data.article_id} data={data} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No results found
          </p>
        )}
      </div>
    </div>
  )
}

export default MainContent