import React, { useState } from "react";

function Note(props){

    const [showBody, setShowBody] = useState(false);

    const toggleBody = () => {
        setShowBody(!showBody);
    }

    return (
        <div className="note" key={props._id}>
        {showBody ?
        (  
        <div className="noteHeader" onClick={toggleBody}>
            <h2>{props.title}</h2>
        </div>
        ) : (
        <div className="noteHeaderClosed" onClick={toggleBody}>
            <h2>{props.title}</h2>
        </div>
        )
        }    
        

        {showBody && (
            <div className="noteBody">
                <p>{props.body}</p>
            </div>
            
        )}
            <div className="noteButtons">
                <button className="edit" onClick={() =>  props.onEdit({title: props.title, body: props.body, id: props._id})}>Edit</button>
                <button className="delete" onClick={() =>  props.onDelete(props._id)}>Delete</button>
            </div>
    </div>);
    }

export default Note;