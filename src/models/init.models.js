//Models
const Product =require('./product.model');
const Category =require('./category.model');

const initModels=()=>{
  //Category -> Products
  Category.hasMany(Product);
  Product.belongsTo(Category);
  
}

module.exports=initModels;