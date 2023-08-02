import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function OneNote(props){

    function handleClick(){
        props.onDelete(props.id);
    }
    return(
    <div className="note">
    <div className="eachnote">
        <h1>
            {props.title}
        </h1>
        <hr/>
        <p>
            {props.content}
        </p>
        </div>
        <button onClick={handleClick}  ><DeleteIcon  variant="outlined" startIcon={<DeleteIcon />} /></button>        
    </div>
    );
}

export default OneNote;