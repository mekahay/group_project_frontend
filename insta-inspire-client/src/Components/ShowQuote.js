import React from 'react'
import {useState, useEffect} from 'react';

function ShowQuote(routerProps) {
    const [quote, setQuote] = useState([]);

    const fetchQuote = async () => {
        try{
            const res = await fetch(`http://localhost:3000/quotes/${quote.id}`);
            const json = await res.json();
            setQuote(json)
        }catch(error){
            console.error(error);
        }
    };

    const deleteQuote = async (id) => {
        try {
          const response = await fetch(`https://insta-api-sei-12345.herokuapp.com/quotes/${quote.id}`, {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
          });
          const data = await response.json();
          const filteredQuotes = quote.filter((quote) => quote.id !== data.id);
          setQuote(filteredQuotes);
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
          fetchQuote();
      }, []);

      return (
          <div>
            <h1>{quote.user}</h1>
            <h2>{quote.quote}</h2>
            <p>{quote.mood}</p>
          </div>

        
      );
};

export default ShowQuote;