import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import { connect } from "react-redux";
import axios from 'axios';


const FavoriteTrails = ({userId}) => {

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/getFavoriteTrails/${userId}`)
      .then((res) => {
        console.log(res.data)
      })
  }, []);



  return (
    <div>
        <div>
            <Header />
        </div>
        <div>
          <Nav />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default connect(state => state)(FavoriteTrails);