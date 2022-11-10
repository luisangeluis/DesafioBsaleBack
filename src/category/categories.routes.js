//Dependencies
const router = require('express').Router();
//Services
const categoriesServices = require('./categories.http');
const productsServices = require('../product/products.http');

/**Ruta para obtener todas las categorias */
router.route('/')
  .get(categoriesServices.getAll)

/**Ruta para obtener todos los productos de una categoria dada. */
router.route('/:id/products')
  .get(productsServices.getByCategoryId)

/**Ruta para obtener una categoria por su id. */
router.route('/:id')
  .get(categoriesServices.getById)

exports.router = router;