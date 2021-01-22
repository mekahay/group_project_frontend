import React from 'react'
import {useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown } from 'react-bootstrap'


function SearchQuoteFeed () {
    const [quotes, setQuotes] = useState([]);
    const moodInput = useRef(null);


    const searchMood = async (query) => {
        console.log('hi')
            // const mood = moodInput.current.value;
            //     const myMood = JSON.stringify(
            //         {
            //             searchMood: mood
            //         }
            //     )

                try {
                    const response = await fetch(`https://insta-api-sei-12345.herokuapp.com/quotes/search?q=${query}`, {
                        method: 'GET',
                        headers: {'content-type': 'application/json'}
                    })
                    const data = await response.json();
                    setQuotes(data);
                    console.log(data)
                } catch (error) {
                    console.error(error)
                }
    }
    
        useEffect(() => {
            // searchMood();
        }, []);

    return(

    <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item >Sad</Dropdown.Item>
            <Dropdown.Item >Lazy</Dropdown.Item>
            <Dropdown.Item onClick={() => searchMood('heartbroken')}>Heartbroken</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>

)

}
export default SearchQuoteFeed;