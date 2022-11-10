//Dependencies
const { Sequelize, DataTypes, Model } = require('sequelize');
//Models
const Categories = require('./category.model');
//Conexion a bd
const { db } = require('../utils/database');

//Model de products
const Products = db.define('product', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true

  },
  name: {
    type: DataTypes.STRING,
    allowNull: false

  },
  urlImage: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'url_image',
    validate: {
      isUrl: true,
    }

  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,

  },
  discount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'category',
    references: {
      model: Categories,
      key: 'id'
    }
  }
  
},
  {
    freezeTableName: true
  },
  {
    timestamps: true
  }
)

module.exports = Products;