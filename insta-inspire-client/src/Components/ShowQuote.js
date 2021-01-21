import React from 'react'
import {useState, useEffect} from 'react';

function ShowQuote(props) {
    const [quote, setQuote] = useState({});
    // const [user, setUser] = useState([]);
    

    const fetchQuote = async () => {
      const id = props.match.params.id
        try{
            const res = await fetch(`https://insta-api-sei-12345.herokuapp.com/quotes/${id}`);

            const json = await res.json();
            setQuote(json)
        }catch(error){
            console.error(error);
        }
    };

    const deleteQuote = async (id) => {
        try {
          // const id = routerProps.match.params.id
          const response = await fetch(`https://insta-api-sei-12345.herokuapp.com/quotes/${id}`, {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
          });
          const data = await response.json();
          const filteredQuotes = quote.filter((quote) => quote._id !== data.id);
          setQuote(filteredQuotes);
        } catch (error) {
          console.log(error);
        }
      };

      // const setSelected = (index) => {
      //   setQuote(quotes[index])
      // }

      useEffect(() => {
          fetchQuote();
          console.log(quote)
      }, []);


      return (
        <>
          <div>
              <h1>{quote.name}</h1>
              <h2>{quote.text}</h2>
              <p>Mood: {quote.mood}</p>
          </div>
        </>
    );
}

export default ShowQuote;