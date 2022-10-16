const router = require('express').Router();
const categoriesServices = require('./categories.http');
const productsServices = require('../product/products.http');


router.route('/')
  .get(categoriesServices.getAll)

router.route('/:id/products')
  .get(productsServices.getByCategoryId)

router.route('/:id')
  .get(categoriesServices.getById)

exports.router = router;