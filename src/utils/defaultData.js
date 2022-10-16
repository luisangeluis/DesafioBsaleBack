const Categories =require('../models/category.model');
const Products =require('../models/product.model');

const generateData = async()=>{
  // await Categories.bulkCreate([
  //   {name:'uno'},{name:'dos'}
  // ])

  // await Products.bulkCreate([
  //   {name:'uno',urlImage:'http://foo.com',price:10,discount:10,categoryId:1},
  //   {name:'dos',urlImage:'http://foo.com',price:10,discount:10,categoryId:1},
  //   {name:'tres',urlImage:'http://foo.com',price:10,discount:10,categoryId:1},
  //   {name:'cuatro',urlImage:'http://foo.com',price:10,discount:10,categoryId:2},
  //   {name:'cinco',urlImage:'http://foo.com',price:10,discount:10,categoryId:2}
  // ])


}

module.exports = generateData;