import axios from "axios";
import React, { useState, useEffect } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import NoteDisplay from "../NoteDisplay/NoteDisplay";
import "./TrailInfo.css";

const TrailInfo = ({ trail }) => {
  const [textInput, setTextInput] = useState("");
  const [trailNote, setTrailNote] = useState([]);


  useEffect(() => {
    getTrailNote();
  }, []);

  const handleChangeTextArea = (e) => {
    setTextInput(e.target.value);
  };

  const getTrailNote = () => {
    axios.get(`http://localhost:8080/api/getNote/${trail.id}`).then((res) => {
      setTrailNote(res.data);
      console.log("all",res.data);
    });
  };

  const addNote = () => {
    const body = { trailNote: textInput, trailId: trail.id };
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
        {/* {trailNote.length > 0 &&
          trailNote.map(({ trail_note }) => (
            <p key={trail_note}>{trail_note}</p>
          ))} */}

          {trailNote.length > 0 && 
          trailNote.map(( {trail_note} ) => {
            return <NoteDisplay key={trail_note.id} trail_note={trail_note} />;
          })
          }

        

        
      </section>

      <div>
        {/* <button>Add to favorites</button> */}
        {/* <button>Add to trails to try</button> */}
      </div>
    </div>
  );
};

export default TrailInfo;
