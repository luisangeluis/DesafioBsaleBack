//Controllers
const productsControllers = require('./products.controllers');

/**
 * Retorna todos los productos de la bd con status 200, en caso de que haya un error
 * Arroja status 400
 * @param {Object} req 
 * @param {Object} res 
 */
const getAll = (req, res) => {
  productsControllers.readAllProducts()
    .then(response => { return res.status(200).json({ items: response.length, response }) })
    .catch(error => res.status(400).json({ message: error.message }))
}

/**
 * Retorna el producto con status 200.
 * En caso de que no exista el producto retorna 404, o si hay un error un 404.
 * @param {Object} req 
 * @param {Object} res 
 */
const getById = (req, res) => {
  const id = req.params.id;

  productsControllers.readProductById(id)
    .then(response => {
      if (response) return res.status(200).json(response)
      else return res.status(404).json({ message: `Product with id:${id} doesn't exist` })
    })
    .catch(error => res.status(400).json({ message: error.message }))
}

/**
 * Retorna todos los productos pertenecientes a una categoria con status 200.
 * Si la categoria no existe arroja un mensaje con status 404 y si hay un error arroja un mensaje
 * con status 400.
 * @param {Object} req 
 * @param {Object} res 
 */
const getByCategoryId = (req, res) => {
  const categoryId = req.params.id;

  productsControllers.readProductsByCategoryId(categoryId)
    .then(response => {
      console.log('la response',response);
      if (response.length) return res.status(200).json({ items: response.length, response })
      else return res.status(404).json({ message: `Category with id:${categoryId} doesn't exist` })
    })
    .catch(error => res.status(400).json({ message: error.message }))
}

/**
 * Retorna un status 200 con todos los productos que tengan alguna coincida con el nombre dado
 * Si hay un error retorna un mensaje con un status 400.
 * @param {Object} req 
 * @param {Object} res 
 */
const getByName = (req, res) => {
  const name = req.params.name;

  productsControllers.readProductsByName(name)
    .then(response => res.status(200).json({ items: response.length, response }))
    .catch(error => res.status(400).json({ message: error.message }))
}

module.exports = {
  getAll,
  getById,
  getByCategoryId,
  getByName
}