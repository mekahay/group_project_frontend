import React from 'react'
import {useState, useEffect} from 'react';
import { Card } from 'react-bootstrap';
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
                    
                    ['Dark'].map((variant, idx) => (
                        <Card 
                        bg={variant.toLowerCase()}
                        key={idx}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ width: '18rem' }}
                        className="mb-2">
                        <Card.Header>{quote.name}</Card.Header>
                        <Card.Body>
                            <Card.Title> {quote.mood} </Card.Title>
                            <Card.Text><Link to={`/ShowQuote/${quote.id}`}>{quote.text}</Link></Card.Text>
                        </Card.Body>    
                        </Card>
                    ))
                );
            })}
        </div>
    );
}

export default QuoteFeed;

