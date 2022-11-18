import React from 'react'
import axios from 'axios';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import TrailInfo from '../TrailInfo/TrailInfo'

const NoteDisplay = ( {trail_note} ) => {

    console.log("test", {trail_note} )
    const deleteNote = () => {
      axios
        .delete(`http://localhost:8080/api/deleteNote/${trail_note.id}`)
        .then((res) => {
            console.log(res.data)
            alert("Your note was deleted");
        })
        .catch((error) => console.log(error));
    };

  return (
    <div>
      <p>{trail_note}</p>
      <button>
        <AiOutlineEdit />
      </button>

      <button onClick={deleteNote}>
        <AiOutlineDelete />
      </button>
    </div>
  );
}

export default NoteDisplay