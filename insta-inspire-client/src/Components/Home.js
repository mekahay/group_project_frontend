import React from 'react'
import {useState, useEffect} from 'react';
import { Card } from 'react-bootstrap';
import {Link } from 'react-router-dom';


function QuoteFeed (props) {
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
                    ['Dark'].map((variant, idx) => (
                        <Link to={`/ShowQuote/${quote.id}`}>
                            <Card 
                            bg={variant.toLowerCase()}
                            key={idx}
                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                            style={{ width: '28rem' }}
                            className="mb-2">
                            <Card.Header></Card.Header>
                                <Card.Body>
                                    <Card.Title> {quote.text} </Card.Title>
                                    <Card.Text>Currently feeling {quote.mood}</Card.Text>
                                </Card.Body>  
                            </Card>
                        </Link>
                    ))
                );
            })}
        </div>
    );
}

export default QuoteFeed;

