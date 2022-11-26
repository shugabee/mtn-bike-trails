require("dotenv").config();
const bcrypt = require("bcrypt");
const express = require("express");
const cors = require("cors");
const { Sequelize } = require("sequelize");
const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());
app.use(cors());

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

let newTrailNote = {};
app.post("/api/addNote", async (req, res) => {
  const { trailNote, trailId } = req.body;

  await sequelize.query(`
  insert into trail_notes (
    trail_note, trail_id
  ) values (
    '${trailNote}', '${trailId}'
  )
  `);
  newTrailNote = req.body;
  res.status(200).send(req.body);
});

app.get("/api/getNote/:id", async (req, res) => {
  const notes = await sequelize.query(`
  select * from trail_notes
  where trail_id = '${req.params.id}'
  `);
  res.status(200).send(notes[0]);
});

app.delete("/api/deleteNote/:id", async (req, res) => {
  await sequelize.query(`
  DELETE 
  FROM trail_notes
  WHERE trail_notes.id = '${req.params.id}'
  `);
  res.sendStatus(200);
});

// app.put("/api/editNote/:id", async (req, res) => {
//   await sequelize.query(`
//   UPDATE 
//   `)
// }

app.post("/auth/register", async (req, res) => {
  const { username, password } = req.body;

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const [user] = await sequelize.query(`
  insert into users (
    username, password
  ) values (
    '${username}', '${hash}'
  )
  `);
  res.status(200).send(user);
});

app.post("/auth/login", function (req, res) {
  const { username, password } = req.body;

  const user = sequelize
    .query(`
  SELECT * FROM users 
  WHERE username = '${username}' 
  `)

  .then(function (dbResponse) {
    const user = dbResponse[0]
    if (!user.length) {
      return res.status(400).send("User does not exist");
    } else {
      let hash = user[0].password
      console.log(user)
      bcrypt.compare(password, hash).then(areSame => {
        console.log({areSame})
        if (areSame) {
          let userResponse = {
            username,
            userId: user[0].id
          }
          res.status(200).send(userResponse);
        } else {
          res.send('incorrect password')
        }
      })
    }
  })
});
  
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

 

app.listen(SERVER_PORT, () =>
  console.log(`Server is running on ${SERVER_PORT}`)
);
