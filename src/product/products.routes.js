//Dependencies
const router = require('express').Router();
//Services
const productsServices =require('./products.http');

/** Ruta para todos los productos*/
router.route('/')
  .get(productsServices.getAll);

/**Ruta para obtener los productos que tengan alguna coincidencia con el nombre dado. */
router.route('/term/:name')
  .get(productsServices.getByName)

/**Ruta para obtener un producto por su id. */
router.route('/:id')
  .get(productsServices.getById);

exports.router =router;