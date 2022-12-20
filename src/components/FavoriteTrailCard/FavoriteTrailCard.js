import React, { useState, useEffect } from "react";
import NoteList from "../NoteList/NoteList";
import { BsHeart } from "react-icons/bs";
import "./FavoriteTrailCard.css";
import axios from "axios";
import { connect } from "react-redux";

const FavoriteTrailCard = ({ favTrail, userId }) => {
  const [textInput, setTextInput] = useState("");
  const [trailNote, setTrailNote] = useState([]);
  const [iconColor, setIconColor] = useState("");

  useEffect(() => {
    getTrailNote();
  }, []);

  const handleChangeTextArea = (e) => {
    setTextInput(e.target.value);
  };

  const getTrailNote = () => {
    axios
      .get(`http://localhost:8080/api/getNote/${favTrail.id}/${userId}`)
      .then((res) => {
        setTrailNote(res.data);
      });
  };

  const removeFromFavorite = () => {
    axios
      .delete(`http://localhost:8080/api/deleteFavorite/${favTrail.id}`)
      .then((res) => {
        alert("Your trail has been removed form favorites")
        setIconColor("black");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="favorite-trail-info">
      <div className="heart-button">
        <BsHeart
          size="22px"
          color="brown"
          style={{ color: iconColor }}
          onClick={removeFromFavorite}
        />
      </div>

      <h2 className="fav-trail-h2">{favTrail.trail_name}</h2>
      <h5 className="fav-trail-h5">
        {favTrail.trail_city}, {favTrail.trail_region}
      </h5>
      <h6 className="fav-trail-h6">Distance: {favTrail.trail_length} miles</h6>

      {/* <label>Trail notes:</label>
      <div className="text-area-container">
        <textarea
          id="note-box"
          name="note-box"
          rows="4"
          cols="30"
          value={textInput}
          onChange={handleChangeTextArea}
        />
        <div>
          <button className="add-note-btn" onClick={addNote}>
            Add Note
          </button>
        </div>
      </div> */}

      {/* <section>
        <NoteList getTrailNote={getTrailNote} notes={trailNote} />
      </section> */}
    </div>
  );
};

export default connect((state) => state)(FavoriteTrailCard);
