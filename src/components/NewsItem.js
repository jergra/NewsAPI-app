import React from 'react'

const NewsItem = ({index, article}) => {
    
  return (
    <div className="bg-white p-4 mb-7"
        key={index}
    >
        <div 
            className="mb-5" 
        >
            <img src={article.urlToImage} alt="" />
        </div>
        <div
            className="font-semibold mb-3 text-lg"
        >
            {article.title}
        </div>
        <div
            className="mb-3"
        >
            {article.description}
        </div>
        <div
            className="mb-3"
        >
            <a className="text-teal-800" href={article.url}>{article.url}</a>
        </div>
    </div>
  )
}

export default NewsItem