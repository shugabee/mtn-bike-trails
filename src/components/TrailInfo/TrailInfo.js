import axios from "axios";
import React, { useState, useEffect } from "react";
import NoteList from "../NoteList/NoteList";
import { connect } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
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
    axios.get(`https://mtn-bike-trail.online/api/getNote/${trail.id}/${userId}`).then((res) => {
      setTrailNote(res.data);
    });
  };

  const showFavoriteTrail = () => {
    axios.get(`https://mtn-bike-trail.online/api/showFavorite/${userId}/${trail.id}`)
      .then((res) => {
        if (res.data.length > 0) {
          setIconColor("brown")
        }
      })
  }

  const addNote = () => {
    const body = { 
      trailNote: textInput, 
      trailId: trail.id,
      userId
    };
    axios
      .post("https://mtn-bike-trail.online/api/addNote", body)
      .then((res) => {
        getTrailNote();
        setTextInput("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addToFavorite = () => {
    const body = {
      trailId: trail.id,
      userId,
      trailName: trail.name,
      trailCity: trail.city,
      trailRegion: trail.region,
      trailLength: trail.length
    };
    axios.post("https://mtn-bike-trail.online/api/addToFavorites", body)
    .then((res) => {
      console.log(res.data);
      alert("Your trail was added to favorites!")
      setIconColor("brown");
    })
    .catch((error) => {
      console.log(error);
    });
  };


  return (
    <div className="trail-info">
      <div className="heart-button">
        <FaRegHeart
          size="22px"
          style={{ color: iconColor }}
          onClick={addToFavorite}
        />
      </div>

      <h3>{trail.name}</h3>
      <h4>
        {trail.city}, {trail.region}
      </h4>
      <h5>Distance: {trail.length} miles</h5>

      <label for="note-box-input">Trail Notes:</label>
      <div className="text-area-container">
        <textarea
          id="note-box-input"
          className="note"
          name="note-box"
          rows="4"
          cols="30"
          value={textInput}
          onChange={handleChangeTextArea}
        />
        <div>
          <button type="button" value="add-note" className="add-note-btn" onClick={addNote}>
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
