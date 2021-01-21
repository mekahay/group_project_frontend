import React from 'react';
import {useRef} from 'react';

const NewQuoteForm = (props) => {
    const moodInput = useRef(null);
    const userInput = useRef(null);
    const quoteInput = useRef(null);

    const newQuote = async (event) => {
        event.preventDefault();
        const mood = moodInput.current.value;
        const name = userInput.current.value;
        const text = quoteInput.current.value;
       
        try {
            const res = await fetch (`https://insta-api-sei-12345.herokuapp.com/users/searchUser?u=${name}`)
            // console.log(res)
            console.log(res.body)
            const body = JSON.stringify({
                quote: {
                    mood,
                    text,
                },
                user_id: 1
                
            });
            console.log(body)
    
            // event.currentTarget.reset();
            const response = await fetch ('https://insta-api-sei-12345.herokuapp.com/quotes', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: body,
                }
            );
            props.history.push('/')
        }catch (error){
            console.error(error);
        }

       
    }

    return (
        <>
            <h1>New Quote</h1>
                <form onSubmit={newQuote}>
                    <label>Mood:<input type='text' name='mood' ref={moodInput} /><br/></label>
                    <label>User:<input type='text' name='user' ref={userInput} /><br/></label>
                    <label>Quote:<input type='text' name='quote' ref={quoteInput} /><br/></label>
                    <input type="submit" value="Add New Quote"/>
                </form>   
        </>
    );
};

export default NewQuoteForm;