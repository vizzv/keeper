
import '../App.css';
import NavBar from './NavBar';
import OneNote from './OneNote';
import Footer from './Footer';
import InputArea from './InputArea';
import { useState } from 'react';


function App() {
  const [Note,setNote] = useState([]);
  function addNote(newNote){
    setNote( prevNotes=>{
      return [...prevNotes,newNote];
    });

  }
  function deleteNote(id){
    setNote( prevNotes=> prevNotes.filter((noteItem,index)=> index!==id))
  }
  return (
    <div>
    <NavBar/>
    <InputArea onAdd={addNote} />
    {Note.map((e,indx)=> {
      if(e.contentt==="" && e.titlee===""){
          return null;
      }
    return (<OneNote className="note"
        key={indx}
        id={indx}
        title={e.titlee}
        content={e.contentt} 
        onDelete={deleteNote}
        />)
      })
    }
    
    <Footer/>
    </div>
  );
}

export default App;
