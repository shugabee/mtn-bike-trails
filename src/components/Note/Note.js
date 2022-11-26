import React from 'react'
import axios from 'axios';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";


const Note = ({notes, getTrailNote}) => {

  const editNote = () => {
    axios
    .put(`http://localhost:8080/api/editNote/${notes[0].id}`)
    .then((res) => {
      console.log(res.data)

    })
    .catch((error) => console.log(error))
  }

  const deleteNote = () => {
  axios
    .delete(`http://localhost:8080/api/deleteNote/${notes[0].id}`)
    .then((res) => {
        getTrailNote();
        alert("Your note was deleted");
    })
    .catch((error) => console.log(error));
};
  
  return (
    <div>
      <div className='header'>
        <span>{notes[0].datetime}</span>
      </div>
      <p>{notes[0].trail_note}</p>
      <button onClick={editNote}>
        <AiOutlineEdit />
      </button>
      <button onClick={deleteNote}>
        <AiOutlineDelete  />
      </button>
    </div>
  );
}

export default Note




