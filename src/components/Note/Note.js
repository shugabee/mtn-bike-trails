import React, { useState } from "react";
import axios from "axios";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import "./Note.css";

const Note = ({ note, getTrailNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTextInput, setNewTextInput] = useState(note.trail_note);

  const editNote = () => {
    const body = {
      notesId: note.id,
      newTextInput
    };
    axios
      .put(`http://localhost:8080/api/editNote`, body)
      .then((res) => {
        console.log("new",res.data);
        setIsEditing((prev) => !prev);
        getTrailNote();
      })
      .catch((error) => console.log(error));
  };

  const handleChangeTextArea = (e) => {
    setNewTextInput(e.target.value);
  };

  const deleteNote = () => {
    axios
      .delete(`http://localhost:8080/api/deleteNote/${note.id}`)
      .then((res) => {
        getTrailNote();
        alert("Your note was deleted");
      })
      .catch((error) => console.log(error));
  };

  const formattedDate = new Date (note.date)
  const month = formattedDate.getMonth() + 1
  const date = formattedDate.getDate()
  const year = formattedDate.getFullYear()

  return (
    <div className="comment-parent-container">
      <div className="comment-container">
        <div className="header">
          <span className="date">{`${month}-${date}-${year}`}</span>
        </div>
        {isEditing ? (
          <div>
            <textarea
              id="new-note-box"
              name="new-note-box"
              rows="4"
              cols="30"
              value={newTextInput}
              onChange={handleChangeTextArea}
            />
            <div>
            <button className="update-btn" onClick={editNote}>update</button>
            </div>
          </div>
        ) : (
          <p>{note.trail_note}</p>
        )}
      </div>

      <footer className="buttons-container">
        <button
          onClick={() => setIsEditing((prev) => !prev)}
          isActive={isEditing}
        >
          <AiOutlineEdit />
        </button>
        <button onClick={deleteNote}>
          <AiOutlineDelete />
        </button>
      </footer>
    </div>
  );
};

export default Note;
