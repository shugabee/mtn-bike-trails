const bcrypt = require("bcrypt");
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


module.exports = {

    registerUser: async (req, res) => {
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
      },


   loginUser: function (req, res) {
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
                res.status(401).send('incorrect password')
              }
            })
          }
        })
      }

}