import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import AllTrails from "./components/AllTrailsPage/AllTrails";
import FavoriteTrails from "./components/FavoriteTrailsPage/FavoriteTrails";
import TrailsToTry from "./components/TrailsToTryPage/TrailsToTry";
import Register from "./components/Register/Register";
import SignIn from "./components/SignIn/SignIn";


export default (
  <Router>
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/profilePage" element={<ProfilePage />} />
      <Route path="/allTrails" element={<AllTrails />} />
      <Route path="/favoriteTrails" element={<FavoriteTrails />} />
      <Route path="/trailsToTry" element={<TrailsToTry />} />
    </Routes>
  </Router>
);