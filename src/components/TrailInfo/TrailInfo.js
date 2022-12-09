import axios from "axios";
import React, { useState, useEffect } from "react";
import NoteList from "../NoteList/NoteList";
import { connect } from "react-redux";
import { BsHeart } from "react-icons/bs";
import "./TrailInfo.css";



const TrailInfo = ({ trail, userId }) => {
  const [textInput, setTextInput] = useState("");
  const [trailNote, setTrailNote] = useState([]);
  const [iconColor, setIconColor] = useState("");

  useEffect(() => {
    getTrailNote();
    showFavoriteTrail();
  }, []);

  const handleChangeTextArea = (e) => {
    setTextInput(e.target.value);
  };

  const getTrailNote = () => {
    // console.log(userId)
    axios.get(`http://localhost:8080/api/getNote/${trail.id}/${userId}`).then((res) => {
      setTrailNote(res.data);
    });
  };

  const showFavoriteTrail = () => {
    axios.get(`http://localhost:8080/api/showFavorite/${userId}`)
      .then((res) => {
        // console.log(res.data)
      })
  }

  const addNote = () => {
    const body = { 
      trailNote: textInput, 
      trailId: trail.id,
      userId
    };
    axios
      .post("http://localhost:8080/api/addNote", body)
      .then((res) => {
        getTrailNote();
        setTextInput("");
      })
      .catch((error) => {
        console.log(error);
      });
      document.getElementsByClassName("note").reset();
  };

  const addToFavorite = () => {
    const body = {
      trailId: trail.id,
      userId,
      trailName: trail.name,
      trailCity: trail.city,
      trailRegion: trail.region
    };
    axios.post("http://localhost:8080/api/addToFavorites", body)
    .then((res) => {
      console.log(res.data);
      alert("Your trail was added to favorites!")
      setIconColor("green");
    })
    .catch((error) => {
      console.log(error);
    });
  };


  return (
    <div className="trail-info">
      <div className="heart-button">
        <BsHeart
          size="22px"
          style={{ color: iconColor }}
          onClick={addToFavorite}
        />
      </div>

      <h2>{trail.name}</h2>
      <h5>
        {trail.city}, {trail.region}
      </h5>

      {/* <h6>{trail.description}</h6>  */}
      <img src="" alt="" />

      <label>Trail notes:</label>
      <div className="text-area-container">
        <textarea
          id="note-box"
          className="note"
          name="note-box"
          rows="4"
          cols="30"
          value={textInput}
          onChange={handleChangeTextArea}
        />
        <div>
          <button type="button" className="add-note-btn" onClick={addNote}>
            Add Note
          </button>
        </div>
      </div>

      <section>
        <NoteList getTrailNote={getTrailNote} notes={trailNote} />
      </section>
    </div>
  );
};

export default connect(state => state)(TrailInfo);
