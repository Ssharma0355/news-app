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
  return (
    <div>
        {news.map((data)=>(
            // <li key={data.article_id}>{data.title}</li>
              <NewsCard id={data.article_id}
              title={data.title}
               />
        ))}
          
     
    
    </div>
  )
}

export default MainContent
