const { Op } = require("sequelize");
const Products = require('../models/product.model');

const readAllProducts = async () => {
  const response = await Products.findAll({
    attributes: {
      exclude: ['createdAt', 'updatedAt']
    }
  });

  return response;
}

const readProductById = async (productId) => {
  const response = await Products.findOne({
    where: { id: productId },
    attributes: {
      exclude: ['createdAt', 'updatedAt']
    }
  })

  return response;
}

const readProductsByCategoryId = async (categoryId) => {
  const response = await Products.findAll({
    where: { categoryId },
    attributes: {
      exclude: ['createdAt', 'updatedAt']
    }
  })

  return response;
}

const readProductsByName = async (name) => {
  const response = await Products.findAll({
    where: {
      name: {
        [Op.like]:'%'+name+'%'
      }
    },
    attributes: {
      exclude: ['createdAt', 'updatedAt']
    }
  })
  return response;
}

module.exports = {
  readAllProducts,
  readProductById,
  readProductsByCategoryId,
  readProductsByName
}