require("dotenv").config();
const express = require("express");
const cors = require("cors");
const {Sequelize} = require('sequelize');
const app = express();

const { PORT, CONNECTION_STRING } = process.env;

app.use(express.json());
app.use(cors());


// const sequelize = new Sequelize()



app.listen(PORT, () =>
  console.log(`Server is running on ${PORT}`)
);
