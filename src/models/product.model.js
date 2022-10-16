const { Sequelize, DataTypes, Model } = require('sequelize');
const { db } = require('../utils/database');


const Categories = require('./category.model');

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
  // createdAt: {
  //   type: DataTypes.DATE,
  //   allowNull: false,
  //   field: 'created_at'
  // },
  // updatedAt: {
  //   type: DataTypes.DATE,
  //   allowNull: false,
  //   field: 'updated_at'
  // }
},
  {
    freezeTableName: true
  },
  {
    timestamps: true
  }
)

// class Product extends Model { }

// Product.init({
//   id: {
//     primaryKey: true,
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     autoIncrement: true

//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false

//   },
//   urlImage: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     field: 'url_image',
//     validate: {
//       isUrl: true,
//     }

//   },
//   price: {
//     type: DataTypes.FLOAT,
//     allowNull: false,

//   },
//   discount: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   },
//   categoryId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     field: 'category_id',
//     references: {
//       model: Categories,
//       key: 'id'
//     }
//   }
// },{
//   sequelize:db,
//   modelName:'product'
// })



module.exports = Products;