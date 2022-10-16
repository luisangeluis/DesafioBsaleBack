const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

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
