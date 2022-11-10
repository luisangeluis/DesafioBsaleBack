//Dependencies
const { Op } = require("sequelize");
//Models
const Products = require('../models/product.model');

/**
 * Funcion que obtiene todos los productos de la bd.
 * @returns {Object} Retorna todos los productos en forma de objeto.
 */
const readAllProducts = async () => {
  const response = await Products.findAll({
    attributes: {
      exclude: ['createdAt', 'updatedAt']
    }
  });

  return response;
}

/**
 * Funcion que obtiene un producto por su id.
 * @param {Integer} productId Recibe el id del producto a buscar.
 * @returns {Object} Retorna el producto encontrado.
 */
const readProductById = async (productId) => {
  const response = await Products.findOne({
    where: { id: productId },
    attributes: {
      exclude: ['createdAt', 'updatedAt']
    }
  })

  return response;
}

/**
 * Recibe el id de una categoria y busca todos los productos que pertenezcan a esa.
 * @param {Integer} categoryId Recibe el id de una categoria.
 * @returns {Object} Retorna todos los productos correspodientes a la categoria dada.
 */
const readProductsByCategoryId = async (categoryId) => {
  const response = await Products.findAll({
    where: { categoryId },
    attributes: {
      exclude: ['createdAt', 'updatedAt']
    }
  })

  return response;
}

/**
 * Funcion que busca todos los productos que contengan el nombre dado.
 * @param {String} name Recibe el nombre del producto a buscar.
 * @returns {Object} Retorna los productos que tengan alguna coincidencia con el nombre dado.
 */
const readProductsByName = async (name) => {
  const response = await Products.findAll({
    where: {
      name: {
        [Op.like]: '%' + name + '%'
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