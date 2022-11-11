# Ecommerce

## INTRODUCCION

Api realizada con node y express, sirve para consumir los productos disponibles de la bbd.
Por el momento se puede buscar un producto ingresando el nombre del producto y devolvera resultados que se parezcan
al termino ingresado.
Se pueden tambien obtener  las categorias de los productos y filtrar los productos a travez de estas.

## TECNOLOGÍAS
- Mysql
- Sequelize 6.21.24

## LINK DEL DEPLOY

- [Railway.app](https://desafiobsaleback-production.up.railway.app/) 

**Para acceder a los diferentes recursos es necesario ingresar la ruta https://desafiobsaleback-production.up.railway.app y concatenarla con alguna de las rutas que viene en el apartado de la documentacion.**

#### Ejemplo:

**https://desafiobsaleback-production.up.railway.app/api/v1/categories**  

## DOCUMENTACIÓN

- [Documentacion en Postman](https://documenter.getpostman.com/view/12459556/2s8YekSaaU) 
- [Ver colección offline](./BSALE.postman_collection.json) <br />

 [![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/12459556-a2b21b4d-aef2-488c-95ac-c4be7db537c3?action=collection%2Ffork&collection-url=entityId%3D12459556-a2b21b4d-aef2-488c-95ac-c4be7db537c3%26entityType%3Dcollection%26workspaceId%3D3832ba21-03bc-4fec-835f-47724b1aef42)

### Rutas

- /api/v1/products
- /api/v1/products/term/:name
- /api/v1/products/:id

- /api/v1/categories
- /api/v1/categories/:id/products
- /api/v1/categories/:id

### Detalle de rutas

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

### Ejemplos

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
## Licencia.

Licencia [MIT](https://opensource.org/licenses/MIT)






