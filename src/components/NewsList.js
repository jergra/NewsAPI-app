import React, {useState, useEffect} from 'react'
import SearchForm from './SearchForm'
import NewsItem from './NewsItem'
import axios from 'axios'
import terms from '../data/terms'

const NewsList = () => {

    //console.log('terms in NewsList.js:', terms)

    let randomPosition = Math.floor(Math.random() * terms.length)
    const [query, setQuery] = useState(terms[randomPosition])
    const [articles, setArticles] = useState([])
        
    useEffect(() => { 
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
            // console.log('response:', response)
            // console.log('response.data.articles[0]:', response.data.articles[0])
            // console.log('response.data.articles[0].description:', response.data.articles[0].description)
            setArticles(response.data.articles)
        }
        getArticles()
    }, [query])

    
    return (
      <>
        
        <div className="showcase">
            <div className="overlay px-5">
               
                <div className="text-white mb-6 mt-60 text-5xl font-semibold capitalize">
                    articles about {query}
                </div>
                
                <SearchForm 
                    newSearch={(query) => setQuery(query)}
                />
                
            </div>
        </div>
      
        <div className="ml-40 mr-40 mt-10">
            {articles.map((article, index) => (
                <NewsItem 
                    key={index}
                    index={index}
                    article={article}
                />
            ))}
        </div>
      
      </>
  )
}

export default NewsList