const router = require('express').Router();
const productsServices =require('./products.http');

router.route('/')
  .get(productsServices.getAll);

router.route('/name')
  .get(productsServices.getByName)

router.route('/:id')
  .get(productsServices.getById);

exports.router =router;