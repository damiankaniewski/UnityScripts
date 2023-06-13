import React, { useState } from "react";

export default function EditNote(props) {
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);

    const changeTitleHandler = event => {
        const value = event.target.value;
        setTitle(value);
    }

    const changeBodyHandler = event => {
        const value = event.target.value;
        setBody(value);
    }
    const editNote = () => {
        const note = {
            title: title,
            body: body,
            _id: props._id
        }
        props.onEdit(note);
    }


    return(
        <div className="editNote">
            <label>Title:</label>
            <input type="text" className="titleInput" value={title} onChange={changeTitleHandler}/>
            <br/>
            <label>Script:</label>
            <textarea className="bodyInput" value={body} onChange={changeBodyHandler}></textarea>
            <br/>
            <button className="add" onClick={() => editNote()}>Save script</button>
        </div>
    );
}
