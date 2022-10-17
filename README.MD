# RUTAS

## INTRODUCCION

Api realizada con node y express y mysql, sirve para consumir los productos disponibles de la bbd.
Por el momento se puede buscar un producto ingresando el nombre del producto y devolvera resultados que se parezcan
al termino ingresado.
Se pueden tambien obtener  las categorias de los productos y filtrar los productos a travez de estas.

Se puede consultar con ejemplos en postman.

https://www.postman.com/luisangeluis/workspace/bsale/collection/12459556-a2b21b4d-aef2-488c-95ac-c4be7db537c3

## INTRODUCCION RUTAS

- /api/v1/products
- /api/v1/products/term/:name
- /api/v1/products/:id

- /api/v1/categories
- /api/v1/categories/:id/products
- /api/v1/categories/:id

## DETALLES DE RUTAS

- /api/v1/products
- - GET

- /api/v1/products/term/:name
- - GET

- /api/v1/products/:id
- - GET

- /api/v1/categories
- - GET

- /api/v1/categories/:id/products
- - GET

- /api/v1/categories/:id
- - GET

## EJEMPLOS

- /api/v1/products
- - Obtiene todos los productos disponibles.

{
  "items":2,
  "response":[
    {
      "id": 5,
      "name": "ENERGETICA MR BIG",
      "urlImage": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
      "price": 1490,
      "discount": 20,
      "categoryId": 1
    },
    {
      "id": 6,
      "name": "ENERGETICA RED BULL",
      "urlImage": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
      "price": 1490,
      "discount": 0,
      "categoryId": 1
    }
  ]
}

- /api/v1/products/term/:name
- - Obtiene los productos que se parezcan al nombre ingresado.

{
  "items": 2,
  "response": [
    {
      "id": 54,
      "name": "Papas Fritas Lisas Bolsa Grande",
      "urlImage": "https://dojiw2m9tvv09.cloudfront.net/11132/product/papaslisasgrande7128.jpg",
      "price": 1490,
      "discount": 0,
      "categoryId": 5
    },
    {
      "id": 55,
      "name": "Papas Fritas Bolsa Pequeña",
      "urlImage": "https://dojiw2m9tvv09.cloudfront.net/11132/product/papaslisas7271.jpg",
      "price": 500,
      "discount": 0,
      "categoryId": 5
    }
  ]
}

- /api/v1/products/:id
- - Obtiene un producto por su id.
{
  "id": 6,
  "name": "ENERGETICA RED BULL",
  "urlImage": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
  "price": 1490,
  "discount": 0,
  "categoryId": 1
}

- /api/v1/categories
- - Obtiene todas las categorias de los productos.
{
  "items": 7,
  "response": [
    {
      "id": 1,
      "name": "bebida energetica"
    },
    {
      "id": 2,
      "name": "pisco"
    },
    {
      "id": 3,
      "name": "ron"
    },
    {
      "id": 4,
      "name": "bebida"
    },
    {
      "id": 5,
      "name": "snack"
    },
    {
      "id": 6,
      "name": "cerveza"
    },
    {
      "id": 7,
      "name": "vodka"
    }
  ]
}

- /api/v1/categories/:id/products
- - Obtiene los productos que pertenezcan a una categoria en especifico.
{
  "items": 8,
  "response": [
    {
      "id": 5,
      "name": "ENERGETICA MR BIG",
      "urlImage": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
      "price": 1490,
      "discount": 20,
      "categoryId": 1
    },
    {
      "id": 6,
      "name": "ENERGETICA RED BULL",
      "urlImage": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
      "price": 1490,
      "discount": 0,
      "categoryId": 1
    },
    {
      "id": 7,
      "name": "ENERGETICA SCORE",
      "urlImage": "https://dojiw2m9tvv09.cloudfront.net/11132/product/logo7698.png",
      "price": 1290,
      "discount": 0,
      "categoryId": 1
    },
    {
      "id": 34,
      "name": "ENERGETICA MONSTER RIPPER",
      "urlImage": "https://dojiw2m9tvv09.cloudfront.net/11132/product/mosterriper0436.jpg",
      "price": 1990,
      "discount": 0,
      "categoryId": 1
    },
    {
      "id": 35,
      "name": "ENERGETICA MAKKA DRINKS",
      "urlImage": "https://dojiw2m9tvv09.cloudfront.net/11132/product/makka-drinks-250ml0455.jpg",
      "price": 1190,
      "discount": 0,
      "categoryId": 1
    },
    {
      "id": 36,
      "name": "ENERGETICA MONSTER VERDE",
      "urlImage": "https://dojiw2m9tvv09.cloudfront.net/11132/product/monsterverde0476.jpg",
      "price": 1990,
      "discount": 0,
      "categoryId": 1
    },
    {
      "id": 77,
      "name": "ENERGETICA MONSTER RIPPER",
      "urlImage": "",
      "price": 1990,
      "discount": 0,
      "categoryId": 1
    },
    {
      "id": 79,
      "name": "ENERGETICA MONSTER VERDE",
      "urlImage": "",
      "price": 1990,
      "discount": 0,
      "categoryId": 1
    }
  ]
}

- /api/v1/categories/:id
- - Obtiene una categoria por su id.
{
  "id": 1,
  "name": "bebida energetica"
}
