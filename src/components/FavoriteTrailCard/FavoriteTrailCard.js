import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsHeart } from "react-icons/bs";
import { connect } from "react-redux";
import "./FavoriteTrailCard.css";

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
      .get(`http://24.199.113.234:8080/api/getNote/${favTrail.id}/${userId}`)
      .then((res) => {
        setTrailNote(res.data);
      });
  };

  const removeFromFavorite = () => {
    axios
      .delete(`http://24.199.113.234:8080/api/deleteFavorite/${favTrail.id}`)
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

    </div>
  );
};

export default connect((state) => state)(FavoriteTrailCard);
