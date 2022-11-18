import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';


const FavoriteTrails = () => {



  // const getAllTrails = () => {
  //   axios
  //     .get("/api/getFavoriteTrails")
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((error) => console.log(error));
  // }


  return (
    <div>
        <div>
            <Header />
        </div>
          <h2>test</h2>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default FavoriteTrails