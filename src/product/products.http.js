const productsControllers = require('./products.controllers');

const getAll = (req, res) => {
  productsControllers.readAllProducts()
    .then(response => { return res.status(200).json({ items: response.length, response }) })
    .catch(error => res.status(400).json({ message: error.message }))
}

const getById = (req, res) => {
  const id = req.params.id;

  productsControllers.readProductById(id)
    .then(response => {
      if (response) return res.status(200).json(response)
      else return res.status(404).json({ message: `Product with id:${id} doesn't exist` })
    })
    .catch(error => res.status(400).json({ message: error.message }))
}

const getByCategoryId = (req, res) => {
  const categoryId = req.params.id;

  productsControllers.readProductsByCategoryId(categoryId)
    .then(response => {
      if (response) return res.status(200).json({ items: response.length, response })
      else return res.status(404).json({ message: `Category with id:${categoryId} doesn't exist` })
    })
    .catch(error => res.status(400).json({ message: error.message }))
}

const getByName = (req, res) => {
  const data = req.body;
  const name = data.name;

  if (!Object.keys(data).length) {
    return res.status(400).json({ message: 'Missing data' });
  }

  if (!data.name) {
    return res.status(400).json({
      message: 'Term name must be completed',
      fields: {
        name: 'The term to search'
      }
    })
  }

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