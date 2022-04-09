import React, {useState} from 'react'

const SearchForm = ({newSearch}) => {

    const terms = ["music", "piano", "classical piano", 'diy', 'chess', 
        'cameras', 'art', 'architecture', 
        "cooking", 'cakes', 'cherries', "cheese", 'crops', 
        'fishing', 'boats', "fitness", 'exercise', 'fat', 'healing', 
        "coding", "react.js", 'javascript', "web development", 'the internet', "work", 'retirement', 
        'renovation', 'construction', 'homesteading', 
        'the sun', 'wilderness', "summer", 'spring', 
        'California', 'China', "Germany", 'the Okanagan', 'Whistler', 'travel', 
        "circles", "squares", "red", "teal", 
        "covid", 'Canadian politics',
        'brothers', 'women',
        'mysteries', 'hovering', 'lamps', 'camels', 'coral', 'currencies', 'crests', 'crime', 
        'cruelty', 'exclusion', 'kindness', 'thrones', 'harshness', 'hair', 'clapping']
    
    let randomPosition = Math.floor(Math.random() * terms.length)
    const [query, setQuery] = useState(terms[randomPosition])
    
    const queryChangeHandler = (e) => {
        setQuery(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        newSearch(query)
    };
  
    return (
    <div>
        <form 
            onSubmit={submitHandler}
            className="mb-4"
            >
            <input
                name="query"
                //placeholder='e.g. election'
                value={query}
                onChange={queryChangeHandler}
                className="border-solid border-2 border-gray-400 rounded pl-1"
            />
            <button
                type="submit"
                className="bg-teal-700 text-white font-bold pl-3 pt-1 pr-3 pb-1 rounded ml-2 text-sm"
            >
                SEARCH
            </button>
        </form>
    </div>
  )
}

export default SearchForm