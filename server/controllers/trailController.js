require("dotenv").config();
const { Sequelize } = require("sequelize");

const { SERVER_PORT, CONNECTION_STRING } = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  });


let newTrailNote = {};
  const addNote = async (req, res) => {
    const { trailNote, trailId, userId } = req.body;
  
    await sequelize.query(`
    insert into trail_notes (
      trail_note, trail_id, user_id
    ) values (
      '${trailNote}', '${trailId}', '${userId}'
    )
    `);
    newTrailNote = req.body;
    res.status(200).send(req.body);
  }


  const getNote = async (req, res) => {
    const notes = await sequelize.query(`
    select * from trail_notes
    where trail_id = '${req.params.id}'
    AND user_id = '${req.params.userId}'
    `);
    res.status(200).send(notes[0]);
  }

  const showFavorite = async (req, res) => {
    const favorite = await sequelize.query(`
    SELECT * from favorite_trails
    WHERE user_id = '${req.params.id}'
    AND trail_id = '${req.params.trailId}'
    `);
    res.status(200).send(favorite[0])
  }

  const deleteNote = async (req, res) => {
    await sequelize.query(`
    DELETE 
    FROM trail_notes
    WHERE trail_notes.id = '${req.params.id}'
    `);
    res.sendStatus(200);
  }

  const editNote = async (req, res) => {
    const { notesId, newTextInput } = req.body
    await sequelize.query(`
    UPDATE trail_notes
    SET trail_note = '${newTextInput}'
    WHERE trail_notes.id = '${notesId}'
    `);
    res.status(200).send(req.body);
    console.log("PUT", req.body)
  }

  const addToFavorites = async (req, res) => {
    const { userId, trailId, trailName, trailCity, trailRegion, trailLength } = req.body;
  
    await sequelize.query(`
    insert into favorite_trails (
      user_id, trail_id, trail_name, trail_city, trail_region, trail_length
    ) values (
      '${userId}', '${trailId}', '${trailName}', '${trailCity}', '${trailRegion}', '${trailLength}'
    )
    `);
    res.sendStatus(200);
  }

  const deleteFavortie = async (req, res) => {
    await sequelize.query(`
    DELETE
    FROM favorite_trails
    WHERE favorite_trails.id = '${req.params.id}'
    `);
    res.sendStatus(200);
  }


  const getFavoriteTrails = async (req, res) => {
    const favTrails = await sequelize.query(`
    SELECT * FROM favorite_trails
    WHERE user_id = '${req.params.id}'
    `);
    res.status(200).send(favTrails[0]);
  }



  module.exports = {
        addNote, 
        getNote,
        showFavorite,
        deleteNote,
        editNote,
        addToFavorites,
        deleteFavortie,
        getFavoriteTrails
  }