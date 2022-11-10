//Controllers
const categoriesControllers =require('./categories.controllers');

/**
 * Retorna todas las categorias con un status 200.
 * En caso de un error manda un mensaje con un status 400.
 * @param {Object} req 
 * @param {Object} res 
 */
const getAll =(req,res)=>{
  categoriesControllers.readAllCategories()
    .then(response =>res.status(200).json({items:response.length,response}))
    .catch(error=>res.status(400).json({message:error.message}))
}

/**
 * Retorna una categoria por su id con un status 200.
 * En caso de que no exista la categoria retorna un status 404 con un mensaje.
 * Retorna un status 400 en caso de un error.
 * @param {Object} req 
 * @param {Object} res 
 */
const getById=(req,res)=>{
  const categoryId = req.params.id;
  categoriesControllers.readCategoryById(categoryId)
    .then(response=>{
      if(response) return res.status(200).json(response)
      else return res.status(404).json({message:`Category with id:${categoryId} doesn't exist`})
    })
    .catch(error =>res.status(400).json({message:error.message}))
}

module.exports={
  getAll,
  getById
}