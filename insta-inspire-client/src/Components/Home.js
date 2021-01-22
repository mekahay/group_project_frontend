import React from 'react'
import {useState, useEffect} from 'react';
import {Link } from 'react-router-dom';


function QuoteFeed () {
    const [quotes, setQuotes] = useState([]);

    const fetchQuotes = async () => {
        
        try {
            const response = await fetch('https://insta-api-sei-12345.herokuapp.com/quotes');
            const json = await response.json();
            setQuotes(json);
        }catch(error) {
            console.log(error);
        }
    };



    useEffect(() => {
        fetchQuotes();
    }, []);
    
    return (
        <div className='home'>
            {quotes.map((quote) => {
                console.log(quote)
                return (
                    <div>
                        <Link to={`/ShowQuote/${quote.id}`}>
                            <ul>
                                <h2>{quote.text}</h2>
                                <p>{quote.user.name}</p>
                                <p>{quote.mood}</p>
                                <p>{quote.id}</p>
                            </ul>
                        </Link>
                    </div>
                    
                );
            })}
        </div>
    );
}

export default QuoteFeed;