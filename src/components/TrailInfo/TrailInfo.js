import axios from "axios";
import React, { useState, useEffect } from "react";
import Note from "../Note/Note";
import NoteList from "../NoteList/NoteList";
import { connect } from "react-redux";
import "./TrailInfo.css";


const TrailInfo = ({ trail, userId }) => {
  const [textInput, setTextInput] = useState("");
  const [trailNote, setTrailNote] = useState([]);


  useEffect(() => {
    getTrailNote();
  }, []);

  const handleChangeTextArea = (e) => {
    setTextInput(e.target.value);
  };

  const getTrailNote = () => {
    console.log(userId)
    axios.get(`http://localhost:8080/api/getNote/${trail.id}/${userId}`).then((res) => {
      setTrailNote(res.data);
    });
  };

  const addNote = () => {
    const body = { 
      trailNote: textInput, 
      trailId: trail.id,
      userId
    };
    axios
      .post("http://localhost:8080/api/addNote", body)
      .then((res) => {
        // console.log(res.data);
        getTrailNote();
        setTextInput("");
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="trail-info">
      <h2>{trail.name}</h2>
      <h5>
        {trail.city}, {trail.region}
      </h5>
      {/* <h6>{trail.description}</h6>  */}
      <img src="" alt="" />

      <div>
        <label>Trail notes:</label>
        <textarea
          id="note-box"
          name="note-box"
          rows="3"
          cols="30"
          value={textInput}
          onChange={handleChangeTextArea}
        />
        <button onClick={addNote}>Add Note</button>
      </div>

      <section>
        <h4>Notes:</h4>
        {/* {trailNote.length > 0 &&
          trailNote.map(({ trail_note }) => (
            <p key={trail_note}>{trail_note}</p>
          ))} */}

          <NoteList getTrailNote={getTrailNote} notes={trailNote}/>


      </section>

      <div>
        {/* <button>Add to favorites</button> */}
        {/* <button>Add to trails to try</button> */}
      </div>
    </div>
  );
};

export default connect(state => state)(TrailInfo);
