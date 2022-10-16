const categoriesControllers =require('./categories.controllers');

const getAll =(req,res)=>{
  categoriesControllers.readAllCategories()
    .then(response =>res.status(200).json({items:response.length,response}))
    .catch(error=>res.status(400).json({message:error.message}))
}

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