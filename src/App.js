import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import "./App.css";

// function setToken(userToken) {
//   sessionStorage.setItem("token", JSON.stringify(userToken));
// }

// function getToken() {}

function App() {
  // const token = getToken();

  // if (!token) {
  //   return <LogIn setToken={setToken} />;
  // }

return (
  <div className="App">
    {routes}
  </div>
);
}
export default App;


