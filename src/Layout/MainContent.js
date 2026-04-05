import React, { useEffect, useState } from 'react'
import NewsCard from '../components/NewsCard'

const MainContent = () => {
    const [news, setNews] = useState([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
    const BASE_URL = process.env.REACT_APP_NEWS_URL;
    
    console.log("API_KEY:", API_KEY);
    console.log("BASE_URL:", BASE_URL);

    const getData = async () => {
        try {
          const res = await fetch(
            `${BASE_URL}?apikey=${API_KEY}&country=in&language=en`
          );
          const data = await res.json();
          setNews(data.results);
        } catch (err) {
          console.log(err);
        }
        finally{
            setIsLoading(false)
        }
      };
    useEffect(()=>{
        getData();
    },[])
    console.log(news)
    if(isLoading) return <p>Loading..</p>
  return (
    <div>
       {news.map((data) => (
       <NewsCard key={data.article_id} data={data} />
       ))}
          
     
    
    </div>
  )
}

export default MainContent
