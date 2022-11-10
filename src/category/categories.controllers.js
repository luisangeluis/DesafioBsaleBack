//Models
const Categories = require('../models/category.model');

/**
 * Funcion que obtiene todas las categorias de los productos existentes en la bd
 * @returns {Object} Retorna todas las Categorias.
 */
const readAllCategories = async () => {
  const response = await Categories.findAll({
    attributes:{
      exclude:['createdAt','updatedAt']
    }
  });
  return response;
}

/**
 * Funcion que obtiene una categoria por su id.
 * @param {Integer} id Recibe el id de la categoria a buscar.
 * @returns {Object} Retorna la categoria encontrada.
 */
const readCategoryById = async (id) => {
  const response = await Categories.findOne({
    where: { id },
    attributes:{
      exclude: ['createdAt', 'updatedAt']
    }
  })

  return response;
}

module.exports = {
  readAllCategories,
  readCategoryById
}