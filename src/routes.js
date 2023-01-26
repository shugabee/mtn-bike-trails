import React from "react";
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import AllTrails from "./components/AllTrailsPage/AllTrails";
import FavoriteTrails from "./components/FavoriteTrailsPage/FavoriteTrails";
import Register from "./components/Register/Register";
import SignIn from "./components/SignIn/SignIn";


export default (
  <Router>
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/trails" element={<AllTrails />} />
      <Route path="/favorites" element={<FavoriteTrails />} />
    </Routes>
  </Router>
);