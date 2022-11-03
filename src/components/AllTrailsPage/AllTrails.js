import React, { useState, useEffect} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TrailInfo from '../TrailInfo/TrailInfo';
import axios from 'axios';
import './AllTrails.css';

const AllTrails = () => {

const [allTrails, setAllTrails] = useState([]);

  useEffect(() => {
    axios
      .get("https://trailapi-trailapi.p.rapidapi.com/trails/explore/", {
        params: { 
            lat: "37.01837", 
            lon: "-113.51416" },
        headers: {
          "X-RapidAPI-Key":
            "4577649e33msh77ce2a4d7de131cp127c12jsnd1eee86d32b7",
          "X-RapidAPI-Host": "trailapi-trailapi.p.rapidapi.com",
        },
      })
      .then((res) => {
        console.log(res.data.data)
        setAllTrails(res.data.data)
      });
  },[]);



return (
  <div>
    <Header />
    <div className='trail-container'>
      {allTrails.map((t, i) => {
          return <TrailInfo trail={t} />;
        })}
      {/* {allTrails.map((t, i) => {
          return <h4 key={t.id}>{t.name}</h4>;
        })} */}
    </div>
    <Footer />
  </div>
);
};


export default AllTrails











// {
//   allTrails.length &&
//     allTrails.map((t, i) => {
//       return <TrailInfo trail={t} />;
//     });
// }


     
       {/* <button onClick={getTrails}>Get Trails</button> */}
      
         {/* allTrails.length && allTrails.map((trail) => <TrailInfo trail={trail} />) */}
         {/* {allTrails.map((t, i) => {
           return <h3 key={t.name}>{t.name}</h3>
         })} 
        {allTrails.map((t, i) => {
          return <TrailInfo trail={t} />;
         })} */}
        


         //     const [characters, setCharacters] = useState([]);

//     useEffect(() => {
//         axios.get("https://swapi.dev/api/people")
//         .then((res) => {
//             console.log(res.data.results)
//             setCharacters(res.data.results)
//             console.log(characters)
//         });
//     }, []);


//   return (
//     <div>
//       <div>
//         <Header />
//         <div>
//           {characters.length && characters.map((character) => {
//             return <TrailInfo character={character} /> })}
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
    