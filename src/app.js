//Dependencies
const express = require('express');
const path = require('path');

//Archivos db
const { db } = require('./utils/database');
const defaultData = require('./utils/defaultData');
const initModels = require('./models/init.models');
initModels();

//Configuraciones iniciales
const app = express();
const PORT = process.env.PORT || 3000;

db.authenticate()
  .then(res => console.log('database autenticate'))
  .catch(error => console.log(error))

//{force:true}// es solo para desarrollo.
if (process.env.NODE_ENV === 'production') {
  db.sync()
    .then(() => {
      console.log('database synced');
      defaultData();
    })
    .catch(error => console.log(error))
} else {
  // db.sync({ force: true })
  db.sync()
    .then(() => {
      console.log('database synced');
      defaultData();
    })
    .catch(error => console.log(error))
}
//para que el body de la peticion no salga undefined
app.use(express.json());

//Routes files

const productsRouter = require('./product/products.routes').router;
const categoriesRouter = require('./category/categories.routes').router;

app.use('/api/v1/products', productsRouter);
app.use('/api/v1/categories', categoriesRouter);

app.listen(PORT, () => {
  console.log(`server started at port:${PORT}`);
});

module.exports = {
  app
}
