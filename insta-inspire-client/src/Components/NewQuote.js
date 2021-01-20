import React from 'react';
import {useRef} from 'react';

const NewQuoteForm = (props) => {
    const moodInput = useRef(null);
    const authorInput = useRef(null);
    const quoteInput = useRef(null);

    const newQuote = async (event) => {
        event.preventDefault();
        const mood = moodInput.current.value;
        const author = authorInput.current.value;
        const quote = quoteInput.current.value;
        const body = JSON.stringify({
            mood,
            author,
            quote
        });

        event.currentTarget.reset();

        try {
            const response = await fetch ('http://localhost:3000/Home', {
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
            <h1>New Quote</h1>
                <form onSubmit={newQuote}>
                    <label>Mood:<input type='text' name='mood' ref={moodInput} /><br/></label>
                    <label>Author:<input type='text' name='author' ref={authorInput} /><br/></label>
                    <label>Quote:<input type='text' name='quote' ref={quoteInput} /><br/></label>
                </form>   
        </>
    );
};

export default NewQuoteForm;