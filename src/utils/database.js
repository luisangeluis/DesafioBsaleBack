//Dependencies
const { Sequelize } = require('sequelize');
//Ejecucion del dotenv.
require('dotenv').config();

//Configuracion de la conexion en la bd.
const db = new Sequelize({
  dialect: 'mysql',
  host: process.env.HOST,
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
})


module.exports = {
  db
}