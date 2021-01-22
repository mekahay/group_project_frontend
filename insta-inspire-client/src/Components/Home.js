import React from 'react'
import {useState, useEffect} from 'react';
import {Link } from 'react-router-dom';


function QuoteFeed (props) {
    const [quotes, setQuotes] = useState([]);

    const fetchQuotes = async (props) => {
        
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
                return (
                    <div>
                        <Link to={`/ShowQuote/${quote.id}`}>
                            <ul>
                                <li>
                                    <h2>{quote.text}</h2>
                                    <p>{quote.name}</p>
                                    <p>{quote.mood}</p>
                                    <p>{quote.id}</p>
                                </li>
                            </ul>
                        </Link>
                    </div>
                    
                );
            })}
        </div>
    );
}

export default QuoteFeed;