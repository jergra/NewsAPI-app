import React, {useState} from 'react'
import terms from '../data/terms'

const SearchForm = ({newSearch}) => {

    // console.log('terms in SearchForm.js:', terms)

    let oneOrTwo = Math.floor(Math.random() * 2 + 1)
    console.log('one or two:', oneOrTwo)
    
    if (oneOrTwo === 1) {
        let randomPosition = Math.floor(Math.random() * terms.length)
        var selected = terms[randomPosition]
        console.log('one query term chosen in SearchForm:', selected)
    }
    if (oneOrTwo === 2) {
        let randomPosition1 = Math.floor(Math.random() * terms.length)
        let randomPosition2 = Math.floor(Math.random() * terms.length)
        selected = terms[randomPosition1] + ' ' + terms[randomPosition2]
        console.log('two query terms chosen in SearchForm:', selected)
    }

    const [query, setQuery] = useState(selected)
    
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