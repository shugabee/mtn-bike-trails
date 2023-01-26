import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import FavoriteTrailCard from '../FavoriteTrailCard/FavoriteTrailCard';
import { connect } from "react-redux";
import "./FavoriteTrails.css";


const { REACT_APP_API_KEY } = process.env;

const FavoriteTrails = ({userId}) => {
  const [textInput, setTextInput] = useState("");
  const [trailNote, setTrailNote] = useState([]);
  const [trailInfo, setTrailInfo] = useState([]);

  const handleChangeTextArea = (e) => {
    setTextInput(e.target.value);
  };

  const addNote = () => {
    const body = {
      trailNote: textInput,
      userId,
    };
    axios
      .post("http://24.199.113.234:8080/api/addNote", body)
      .then((res) => {
        setTextInput("");
      })
      .catch((error) => {
        console.log(error);
      });
  };


  useEffect(() => {
    getFavoriteTrails();
  }, []);

  const getFavoriteTrails = () => {
    axios
      .get(`http://24.199.113.234:8080/api/getFavoriteTrails/${userId}`)
      .then((res) => {
        setTrailInfo(res.data)
      });
};

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Nav />
      </div>

      <div className="favorite-trail-container">
        {trailInfo.map((f, i) => {
          return <FavoriteTrailCard key={f.id} favTrail={f} />;
        })}
      </div>

      <div> 
      <Footer />
      </div>
    </div>
  );
}

export default connect(state => state)(FavoriteTrails);