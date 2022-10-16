const Categories = require('../models/category.model');

const readAllCategories = async () => {
  const response = await Categories.findAll({
    attributes:{
      exclude:['createdAt','updatedAt']
    }
  });
  return response;
}

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