//Dependencies
const { DataTypes } = require('sequelize');
//Conexion a bd.
const { db } = require('../utils/database');

//Modelo de categories
const categories =db.define('category',{
id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement:true
    
    
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false

  }
},
{
  freezeTableName: true
}
)

module.exports = categories;
