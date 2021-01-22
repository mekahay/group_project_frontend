import React from 'react'
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

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
        props.history.push('/')
        
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
          <div key={quote.id}>
           <Link to={`/ShowQuote/${quote.id}`}>{quote.content}</Link>
              <h1>{quote.name}</h1>
              <h2>{quote.text}</h2>
              <p>Mood: {quote.mood}</p>
            <Link to={`/EditQuote/${quote.id}`}><button>Edit Quote</button></Link>
            <button onClick={(event) => {deleteQuote(quote.id);}}>Delete Quote</button>
          </div>
        </>
    );
}

export default ShowQuote;