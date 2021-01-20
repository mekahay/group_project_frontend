import React from 'react';
import {useRef} from 'react';

const EditQuoteForm = (routerProps) => {
    const editMoodInput = useRef(null);
    const editAuthorInput = useRef(null);
    const editQuoteInput = useRef(null);

    const editQuote = async (event) => {
        event.preventDefault();
        const mood = editMoodInput.current.value;
        const author = editAuthorInput.current.value;
        const quote = editQuoteInput.current.value;
        const body = JSON.stringify({mood, author, quote});

        event.currentTarget.reset();

        try {
            const response = await fetch (`http://localhost:3000/Home/${routerProps.match.params.id}`,
            {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: body,
            }
          );

          routerProps.history.push('/Home')
        }catch(error) {
            console.error(error)
        }
    }

    return (
        <>
        <h1>Edit Quote</h1>
            <form onSubmit={editQuote}>
                <label>Mood:<input type='text' name='mood' ref={editMoodInput} /><br/></label>
                <label>Author:<input type='text' name='author' ref={editAuthorInput} /><br/></label>
                <label>Quote:<input type='text' name='quote' ref={editQuoteInput} /><br/></label>
            </form>   
    </>

    )
};

export default EditQuoteForm;