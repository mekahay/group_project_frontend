import React from 'react';
import {useRef} from 'react';

const EditQuoteForm = (props) => {
    const editMoodInput = useRef(null);
    // const editUserInput = useRef(null);
    const editQuoteInput = useRef(null);

    const editQuote = async (event) => {
        event.preventDefault();
        const mood = editMoodInput.current.value;
        // const user = editUserInput.current.value;
        const text = editQuoteInput.current.value;
        const body = JSON.stringify({mood, text});

        event.currentTarget.reset();

        try {
            const response = await fetch (`https://insta-api-sei-12345.herokuapp.com/quotes/${props.match.params.id}`,
            {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: body,
            }
          );

        //   const data = await response.json();
        //   const filteredQuote = props.quote.filter(
        //       (quote) => quote._id !== data._id
        //   );

        //   props.editQuote([...filteredQuote, data]);
            props.history.push('/')
        }catch(error) {
            console.error(error)
        }
    };

    return (
        <>
        <h1>Edit Quote</h1>
            <form onSubmit={editQuote}>
                <label>Quote:<input type='text' name='quote' ref={editQuoteInput} /><br/></label>
                <label>Mood:<input type='text' name='mood' ref={editMoodInput} /><br/></label>
                {/* <label>User:<input type='text' name='user' ref={editUserInput} /><br/></label> */}
                <input type='submit' name='' value='Edit Quote'/>
            </form>   
    </>

    )
};

export default EditQuoteForm;