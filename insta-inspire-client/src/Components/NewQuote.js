import React from 'react';
import {useRef} from 'react';

const NewQuoteForm = (props) => {
    const moodInput = useRef(null);
    const userInput = useRef(null);
    const quoteInput = useRef(null);

    const newQuote = async (event) => {
        event.preventDefault();
        const mood = moodInput.current.value;
        const user = userInput.current.value;
        const quote = quoteInput.current.value;
        const body = JSON.stringify({
            mood,
            user,
            quote
        });

        event.currentTarget.reset();

        try {
            const response = await fetch ('https://insta-api-sei-12345.herokuapp.com/quotes', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: body,
                }
            );
            props.history.push('/Home')
        }catch(error) {
            console.error(error);
        }        
    }

    return (
        <>
            <h2>find user</h2>
                
            <h1>New Quote</h1>
                <form onSubmit={newQuote}>
                    <label>Mood:<input type='text' name='mood' ref={moodInput} /><br/></label>
                    <label>User:<input type='text' name='user' ref={userInput} /><br/></label>
                    <label>Quote:<input type='text' name='quote' ref={quoteInput} /><br/></label>
                </form>   
        </>
    );
};

export default NewQuoteForm;