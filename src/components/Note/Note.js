import React, {useState} from 'react'
import axios from 'axios';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";


const Note = ({notes, getTrailNote}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [newTextInput, setNewTextInput] = useState("");

  console.log(notes)

  const editNote = () => {
    const body = {
      notesId: notes[0].id,
      newTextInput
    }
    axios
    .put(`http://localhost:8080/api/editNote`, body)
    .then((res) => {
      console.log(res.data)
      setIsEditing((prev) => !prev);
      getTrailNote();
    })
    .catch((error) => console.log(error))
  }

  const handleChangeTextArea = (e) => {
    setNewTextInput(e.target.value);
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
      <div className="header">
        <span>{notes[0].date}</span>
      </div>
      {isEditing ? (
        <div>
          <textarea 
            id='note-box'
            name='note-box'
            rows="2"
            cols="20"
            value={newTextInput}
            onChange={handleChangeTextArea}
            // placeholder={notes[0].trail_note}
            />

          <button onClick={editNote}>update</button>
        </div>
      ) : (
        <p>{notes[0].trail_note}</p>
      )}

      <button
        onClick={() => setIsEditing((prev) => !prev)}
        isActive={isEditing}
      >
        <AiOutlineEdit />
      </button>
      <button onClick={deleteNote}>
        <AiOutlineDelete />
      </button>
    </div>
  );
}

export default Note




