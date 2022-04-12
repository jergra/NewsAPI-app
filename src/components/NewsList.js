import React, {useState, useEffect} from 'react'
import SearchForm from './SearchForm'
import NewsItem from './NewsItem'
import axios from 'axios'
import terms from '../data/terms'

const NewsList = () => {

    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            console.log('window.pageYOffset:', window.pageYOffset)
            if (window.pageYOffset > 10) {
                setShowTop(true)
            } else {
                setShowTop(false)
            }
        };
    
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    //console.log('terms in NewsList.js:', terms)

    let oneOrTwo = Math.floor(Math.random() * 2 + 1)
    console.log('one or two:', oneOrTwo)
    
    if (oneOrTwo === 1) {
        let randomPosition = Math.floor(Math.random() * terms.length)
        var selected = terms[randomPosition]
        console.log('one query term chosen in NewsList:', selected)
    }
    if (oneOrTwo === 2) {
        var randomPosition1 = Math.floor(Math.random() * terms.length)
        var randomPosition2 = Math.floor(Math.random() * terms.length)
        selected = terms[randomPosition1] + ' ' + terms[randomPosition2]
        console.log('two query terms chosen in NewsList:', selected)
    }

    const [query, setQuery] = useState(selected)
    
    const [articles, setArticles] = useState([])
        
    useEffect(() => { 
        const getArticles = async () => {
            console.log('query in useEffect:', query)
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_NEWS_API_KEY_3}`)
            console.log('response:', response)
            console.log('response.data.articles[0]:', response.data.articles[0])
            // console.log('response.data.articles[0].description:', response.data.articles[0].description)
            setArticles(response.data.articles)
        }
        getArticles()
    }, [query])

    
    return (
      <>
        
        <div className="showcase">
            <div className="overlay px-5">
               
                <div className="text-white mb-6 mt-60 text-4xl font-semibold capitalize">
                    articles about {query}
                </div>
                
                <SearchForm 
                    newSearch={(query) => setQuery(query)}
                />
                
            </div>
        </div>
      
        <div 
            className="ml-40 mr-40 mt-10"
        >
            {articles.map((article, index) => (
                <NewsItem 
                    key={index}
                    index={index}
                    article={article}
                />
            ))}
        </div>

        {showTop ? (
            <div className='fixed bottom-5 right-5'>
            <a href='#'>
                <button className="bg-teal-700 text-white rounded font-bold pl-3 pt-1 pr-3 pb-1 text-sm">
                    TOP
                </button>
            </a>
        </div>
        ) : (
            <div></div>
        )}
        
      </>
  )
}

export default NewsList