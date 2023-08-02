import React, { useState } from "react";
import NoteAddTwoToneIcon from '@mui/icons-material/NoteAddTwoTone';

function InputArea(props){

    const [note,setNote] = useState({titlee:"",contentt:""});
    
    function changeNote(event){
        const {name,value}=event.target;
        
        setNote(prevNote=>{return {...prevNote,[name]:value}; } )
    }
    
    function submitNote(event){
        props.onAdd(note);
        setNote({titlee:"",contentt:""});
        event.preventDefault();
    }
    
    return <div className="input-area">
        <input name="titlee" type="text" onChange={(event)=>changeNote(event)} placeholder="enter title" className="in-input-area" value={note.titlee}/>
        <textarea name="contentt" placeholder="enter note here" onChange={(event)=>changeNote(event)}className="in-input-area" value={note.contentt}></textarea>
        <button className="in-input-area" onClick={submitNote}><NoteAddTwoToneIcon/></button>
    </div>;
}

export default InputArea;