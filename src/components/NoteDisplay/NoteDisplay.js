import React from 'react'
import axios from 'axios';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";


const NoteDisplay = ( {trail_note, datetime }) => {
  

  const deleteNote = () => {
  axios
    .delete(`http://localhost:8080/api/deleteNote/${trail_note}`)
    .then((res) => {
        console.log(res.data)
        alert("Your note was deleted");
    })
    .catch((error) => console.log(error));
};
  
  return (
    <div>
      <div className='header'>
        <span>{datetime}</span>
      </div>
      <p>{trail_note}</p>
      <button>
        <AiOutlineEdit />
      </button>
      <button onClick={deleteNote}>
        <AiOutlineDelete  />
      </button>
    </div>
  );
}

export default NoteDisplay




