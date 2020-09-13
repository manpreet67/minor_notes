import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';


const Note=(props)=>
{


    const deleteNote=()=>{
        props.deleteItem(props.id);
    }
    return <>
    <div className="row">
        <div className="note">

            <h1>{props.title}</h1>
            <br/>
            <p>{props.content}</p>
            <button className="btn" onClick={deleteNote}>
            <DeleteIcon className="del"> </DeleteIcon>
            </button>
        

        </div>
    </div>
     </>
}

export default Note;