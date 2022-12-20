require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const {registerUser, loginUser} = require("./controllers/authController");
const { addNote, getNote, showFavorite, deleteNote, editNote, addToFavorites, deleteFavortie, getFavoriteTrails } = require("./controllers/trailController");

const { SERVER_PORT } = process.env;

app.use(express.json());
app.use(cors());


app.post("/api/addNote", addNote)
app.get("/api/getNote/:id/:userId", getNote)
app.get("/api/showFavorite/:id/:trailId", showFavorite)
app.delete("/api/deleteNote/:id", deleteNote)
app.put("/api/editNote", editNote)
app.post("/api/addToFavorites", addToFavorites)
app.delete("/api/deleteFavorite/:id", deleteFavortie)
app.get("/api/getFavoriteTrails/:id", getFavoriteTrails)
app.post("/auth/register", registerUser)
app.post("/auth/login", loginUser)



app.listen(SERVER_PORT, () =>
  console.log(`Server is running on ${SERVER_PORT}`)
);














// let newTrailNote = {};
// app.post("/api/addNote", async (req, res) => {
//   const { trailNote, trailId, userId } = req.body;

//   await sequelize.query(`
//   insert into trail_notes (
//     trail_note, trail_id, user_id
//   ) values (
//     '${trailNote}', '${trailId}', '${userId}'
//   )
//   `);
//   newTrailNote = req.body;
//   res.status(200).send(req.body);
// });


// app.get("/api/getNote/:id/:userId", async (req, res) => {
//   const notes = await sequelize.query(`
//   select * from trail_notes
//   where trail_id = '${req.params.id}'
//   AND user_id = '${req.params.userId}'
//   `);
//   res.status(200).send(notes[0]);
// });

// app.get("/api/showFavorite/:id/:trailId", async (req, res) => {
//   const favorite = await sequelize.query(`
//   SELECT * from favorite_trails
//   WHERE user_id = '${req.params.id}'
//   AND trail_id = '${req.params.trailId}'
//   `);
//   res.status(200).send(favorite[0])
// });

// app.delete("/api/deleteNote/:id", async (req, res) => {
//   await sequelize.query(`
//   DELETE 
//   FROM trail_notes
//   WHERE trail_notes.id = '${req.params.id}'
//   `);
//   res.sendStatus(200);
// });

// app.put("/api/editNote", async (req, res) => {
//   const { notesId, newTextInput } = req.body
//   await sequelize.query(`
//   UPDATE trail_notes
//   SET trail_note = '${newTextInput}'
//   WHERE trail_notes.id = '${notesId}'
//   `);
//   res.status(200).send(req.body);
//   console.log("PUT", req.body)
// });

// app.post("/api/addToFavorites", async (req, res) => {
//   const { userId, trailId, trailName, trailCity, trailRegion, trailLength } = req.body;

//   await sequelize.query(`
//   insert into favorite_trails (
//     user_id, trail_id, trail_name, trail_city, trail_region, trail_length
//   ) values (
//     '${userId}', '${trailId}', '${trailName}', '${trailCity}', '${trailRegion}', '${trailLength}'
//   )
//   `);
//   res.sendStatus(200);
// });


// app.delete("/api/deleteFavorite/:id", async (req, res) => {
//   await sequelize.query(`
//   DELETE
//   FROM favorite_trails
//   WHERE favorite_trails.id = '${req.params.id}'
//   `);
//   res.sendStatus(200);
// });

// app.get("/api/getFavoriteTrails/:id", async (req, res) => {
//   const favTrails = await sequelize.query(`
//   SELECT * FROM favorite_trails
//   WHERE user_id = '${req.params.id}'
//   `);
//   res.status(200).send(favTrails[0]);
// })



// app.post("/auth/register", async (req, res) => {
//   const { username, password } = req.body;

//   const salt = bcrypt.genSaltSync(10);
//   const hash = bcrypt.hashSync(password, salt);

//   const [user] = await sequelize.query(`
//   insert into users (
//     username, password
//   ) values (
//     '${username}', '${hash}'
//   )
//   `);
//   res.status(200).send(user);
// });


// app.post("/auth/login", function (req, res) {
//   const { username, password } = req.body;

//   const user = sequelize
//     .query(`
//   SELECT * FROM users 
//   WHERE username = '${username}' 
//   `)

//   .then(function (dbResponse) {
//     const user = dbResponse[0]
//     if (!user.length) {
//       return res.status(400).send("User does not exist");
//     } else {
//       let hash = user[0].password
//       console.log(user)
//       bcrypt.compare(password, hash).then(areSame => {
//         console.log({areSame})
//         if (areSame) {
//           let userResponse = {
//             username,
//             userId: user[0].id
//           }
//           res.status(200).send(userResponse);
//         } else {
//           res.status(401).send('incorrect password')
//         }
//       })
//     }
//   })
// });
  
//   .then(user => {
//     let hash = user[0].password;
//     console.log(user[0]);
//     bcrypt.compare(password, hash).then(areSame => {
//       if(areSame) {
//         req.session.user = {
//           username
//         }
//         res.status(200).send(req.session.user);
//       } else {
//         res.status(401).send({error: "username or password is incorrect"
//       })
//       }
//     })
//   })
// });



  //   .then((user) => {
  //     let hash = user[0].password;

  //     console.log(user[0]);

  //     bcrypt.compare(password, hash).then(areSame => {
  //       if(areSame) {
  //         req.session.user = {
  //           username,
  //           userId: user[0].id
  //         }
  //         res.status(200).send(req.session.user);
  //       } else{
  //         res.status(401).send("Username or Password is incorrect");
  //       }
  //     })
  //   })
  // });

   
  //     if (!user[0]) {
  //       return res.status(400).send("User does not exist");
  //     } else {
  //       let hash = user[0].password
  //       const authenticated = bcrypt.compareSync(password, hash);
  //       if (authenticated) {
  //         req.session.user = { 
  //           userId: user[0].id,
  //           username: user[0].username,
  //         };
  //         res.status(200).send(req.session.user);
  //         console.log(req.session.user)
  //       } else {
  //         res.status(401).send("Username or Password is incorrect");
  //       }
  //     }
  // });

 


