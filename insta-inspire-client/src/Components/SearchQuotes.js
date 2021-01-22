import React from 'react'
import {useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown } from 'react-bootstrap'


function SearchQuoteFeed () {
    const [quotes, setQuotes] = useState([]);
    const moodInput = useRef(null);
    let quoteItems = [];


    const searchMood = async (query) => {
        console.log('hi')

                try {
                    const response = await fetch(`https://insta-api-sei-12345.herokuapp.com/quotes/search?q=${query}`, {
                        method: 'GET',
                        headers: {'content-type': 'application/json'}
                    })
                    const data = await response.json();
                    setQuotes(data);
                    console.log(data)
                    // debugger;
                } catch (error) {
                    console.error(error)
                }
    }
    
        useEffect(() => {

        }, []);
    return(
<>
    <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Pick Mood
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item onClick={() => searchMood('sad')}>Sad</Dropdown.Item>
            <Dropdown.Item onClick={() => searchMood('lazy')}>Lazy</Dropdown.Item>
            <Dropdown.Item onClick={() => searchMood('heartbroken')}>Heartbroken</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    <ul>
    {quotes.map((quote) =>
        <li key={quote.id} >{quote.text}</li>
    )}
    </ul>
</>
    
        // <Form.Control ref={moodInput} as="select" className="mr-sm-2" id="inlineFormCustomSelect" custom>
        //             <option value="0">Choose...</option>
        //             <option value="sad" onClick={() => searchMood('sad')}>Sad</option>
        //             <option value="heartbroken" onClick={() => searchMood('heartbroken')}>Heartbroken</option>
        //             <option value="lazy" onClick={() => searchMood('lazy')}>Lazy</option>
        // </Form.Control>

)

}
export default SearchQuoteFeed;