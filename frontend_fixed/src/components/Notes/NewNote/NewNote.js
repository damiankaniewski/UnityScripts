import React, { useState } from "react";

function NewNote(props){

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const changeTitleHandler = event => {
        const value = event.target.value;
        setTitle(value);
    }

    const changeBodyHandler = event => {
        const value = event.target.value;
        setBody(value);
    }

    const addNote = () => {
        const note = {
            title: title,
            body: body
        };
        props.onAdd(note);

        setTitle('');
        setBody('');
    }

    return (
        <div className="newNote">
            <label>Title:</label>
            <input type="text" className="titleInput" value={title} onChange={changeTitleHandler}/>
            <br/>
            <label>Script:</label>
            <textarea className="bodyInput" value={body} onChange={changeBodyHandler}></textarea>
            <br/>
            <button className="add" onClick={() => addNote()}>Add script</button>
        </div>
    );
}

export default NewNote;