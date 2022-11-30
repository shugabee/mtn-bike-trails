import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import NoteList from '../NoteList/NoteList';
import TrailInfo from '../TrailInfo/TrailInfo';
import { connect } from "react-redux";
import axios from 'axios';
import { AiFillHeart } from "react-icons/ai";
import { BiListPlus } from "react-icons/bi";

const { REACT_APP_API_KEY } = process.env;

const FavoriteTrails = ({userId}) => {
  const [textInput, setTextInput] = useState("");
  const [trailNote, setTrailNote] = useState([]);

  const handleChangeTextArea = (e) => {
    setTextInput(e.target.value);
  };

  // const getTrailNote = () => {
  //   // console.log(userId)
  //   axios
  //     .get(`http://localhost:8080/api/getNote/${trail.id}/${userId}`)
  //     .then((res) => {
  //       setTrailNote(res.data);
  //     });
  // };

  const addNote = () => {
    const body = {
      trailNote: textInput,
      // trailId: trail.id,
      userId,
    };
    axios
      .post("http://localhost:8080/api/addNote", body)
      .then((res) => {
        // console.log(res.data);
        // getTrailNote();
        setTextInput("");
      })
      .catch((error) => {
        console.log(error);
      });
  };


  useEffect(() => {
    getFavoriteTrails();
  }, []);

  // const [allTrails, setAllTrails] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://trailapi-trailapi.p.rapidapi.com/trails/explore/", {
  //       params: {
  //         lat: "37.01837",
  //         lon: "-113.51416",
  //       },
  //       headers: {
  //         "X-RapidAPI-Key": REACT_APP_API_KEY,
  //         "X-RapidAPI-Host": "trailapi-trailapi.p.rapidapi.com",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data.data);
  //       setAllTrails(res.data.data);
  //     });
  // }, []);

  const getFavoriteTrails = () => {
    axios
      .get(`http://localhost:8080/api/getFavoriteTrails/${userId}`)
      .then((res) => {
        console.log(res.data);
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

      <div className="profile-page-title-container">
        <h4>Favorite Trails</h4>
      </div>

      <div>
        <div className="trail-info">
          <h2>name</h2>
          <h5>
            city, region
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
            {/* <NoteList getTrailNote={getTrailNote} notes={trailNote} /> */}
          </section>

          <div>
            <button>
              <AiFillHeart />
            </button>
            <button>
              <BiListPlus />
            </button>
          </div>
        </div>
      </div>

      {/* <div className="trail-container">
        {allTrails.filter(getFavoriteTrails).map((t, i) => {
          return <TrailInfo key={t.id} trail={t} />
          
        })}
      <div> */}
      <Footer />
    </div>
  );
}

export default connect(state => state)(FavoriteTrails);