# Ecommerce

## INTRODUCCION

Api realizada con node y express, sirve para consumir los productos disponibles de la bbd.
Por el momento se puede buscar un producto ingresando el nombre del producto y devolvera resultados que se parezcan
al termino ingresado.
Se pueden tambien obtener  las categorias de los productos y filtrar los productos a travez de estas.

### Postman
Se puede consultar con ejemplos en postman.
https://www.postman.com/luisangeluis/workspace/bsale/collection/12459556-a2b21b4d-aef2-488c-95ac-c4be7db537c3

Api realizada con node, express y mysql, realizada para mostrar consumir los productos de la bd en bsale.
## postman https://documenter.getpostman.com/view/12459556/2s8YekSaaU acomodar

### Tecnologias
- Mysql
- Sequelize

### Link del deploy
- Url base
- - desafiobsaleback-production.up.railway.app

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

```javascript
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
```
- /api/v1/products/term/:name
- - Obtiene los productos que se parezcan al nombre ingresado.

```javascript
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
```

- /api/v1/products/:id
- - Obtiene un producto por su id.

```javascript
{
  "id": 6,
  "name": "ENERGETICA RED BULL",
  "urlImage": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
  "price": 1490,
  "discount": 0,
  "categoryId": 1
}
```

- /api/v1/categories
- - Obtiene todas las categorias de los productos.

```javascript
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
```

- /api/v1/categories/:id/products
- - Obtiene los productos que pertenezcan a una categoria en especifico.

```javascript
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
```

- /api/v1/categories/:id
- - Obtiene una categoria por su id.

```javascript
{
  "id": 1,
  "name": "bebida energetica"
}
```


[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/12459556-a2b21b4d-aef2-488c-95ac-c4be7db537c3?action=collection%2Ffork&collection-url=entityId%3D12459556-a2b21b4d-aef2-488c-95ac-c4be7db537c3%26entityType%3Dcollection%26workspaceId%3D3832ba21-03bc-4fec-835f-47724b1aef42)


https://www.postman.com/luisangeluis/workspace/bsale/collection/12459556-a2b21b4d-aef2-488c-95ac-c4be7db537c3?action=share&creator=12459556