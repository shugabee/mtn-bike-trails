import React, {useState, useEffect} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import TrailInfo from "../TrailInfo/TrailInfo";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ProfilePage.css";

const { REACT_APP_API_KEY } = process.env;

const ProfilePage = () => {
  const [allTrails, setAllTrails] = useState([]);

  useEffect(() => {
    axios
      .get("https://trailapi-trailapi.p.rapidapi.com/trails/explore/", {
        params: {
          lat: "37.01837",
          lon: "-113.51416",
        },
        headers: {
          "X-RapidAPI-Key": REACT_APP_API_KEY,
          "X-RapidAPI-Host": "trailapi-trailapi.p.rapidapi.com",
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setAllTrails(res.data.data);
      });
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Nav />
      </div>

      <div className="profile-page-title-container">
        <h3>Trail List</h3>
      </div>

      <div className="trail-container">
        {allTrails.map((t, i) => {
          return <TrailInfo key={t.id} trail={t} />;
        })}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ProfilePage;
