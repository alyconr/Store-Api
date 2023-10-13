# Product API Documentation

This is the  documentation for the Product API. The API allows you to retrieve product information with various filtering and sorting options. The API supports both a static endpoint that retrieves products with a specific name and a more flexible dynamic endpoint that allows you to filter, sort, and paginate the product data.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Endpoints](#endpoints)
     - [Dynamic Endpoint](#dynamic-endpoint)
3. [Parameters](#parameters)
4. [Response](#response)
5. [Examples](#examples)

## Getting Started

To use the Product API, you should have the API server running. Make sure to replace `../models/product` with the appropriate path to your product model in your Node.js application.

```javascript
const Product = require("../models/product");
```

## Endpoints

Retrive all products:

* URL Format: `/api/v1/products`
* Method: GET
* Description: Returns a list of all products

Retrive a single product:

* URL Format: `/api/v1/products/:id`
* Method: GET
* Description: Returns a single product

Retrive all products with a specific name:

* URL Format: `/api/v1/products/name=:name`
* Method: GET
* Description: Returns a list of products with a specific name

Retrive all products with a specific price:

* URL Format: `/api/v1/products/price=:price`
* Method: GET
* Description: Returns a list of products with a specific price

Retrive all products with a specific company:

* URL Format: `/api/v1/products/company=:company`
* Method: GET
* Description: Returns a list of products with a specific company

Retrive all products with a specific rating:

* URL Format: `/api/v1/products/rating=:rating`
* Method: GET
* Description: Returns a list of products with a specific rating

## Parameters

### Dynamic Endpoint Parameters 

The dynamic endpoint `api/products` supports the following query parameters:

* `name` - Filter products by name
* `price` - Filter products by price
* `company` - Filter products by company
* `rating` - Filter products by rating
* `sort` - Sort products by name, price, or rating
* `page` - Paginate products by page number
* `limit` - Limit the number of products returned per page
* `numericFilters` - Filter products by multiple numeric values

### Numeric Filters

* Numeric filters should be formatted as `field-operator-value`, where:

* `field` - The field to filter on
* `operator` - The operator to use for the filter (e.g., `gt`, `lt`, `gte`, `lte`, `eq`)
* `value` - The value to compare against

## Response

The API response will be in JSON format and will have the following structure:

```json
{
  "products": [
    {
      "name": "accent chair",
      "price": 25,
      "company": "marcos",
      "rating": 4
    },
    {
      "name": "albany sectional",
      "price": 109,
      "company": "liddy",
      "rating": 5
    },
    {
      "name": "albany table",
      "price": 309,
      "company": "liddy",
      "rating": 4.9
    },

  ]

}
```
* `products` - An array of product objects
* `nbHits` - The number of products returned


## Examples

```javascript
GET /api/productsproducts?numericFilters=price>90,rating>=4.5&sort=price,-name&page=1

```
Response:

```json
{
    "products": [
        {
            "_id": "65282bc99a0e93003f4db146",
            "name": "leather sofa",
            "price": 99,
            "rating": 4.5,
            "featured": false,
            "company": "caressa",
            "createdAt": "2023-10-12T17:24:25.179Z",
            "__v": 0
        },
        {
            "_id": "65282bc99a0e93003f4db14a",
            "name": "simple chair",
            "price": 109,
            "rating": 4.5,
            "featured": false,
            "company": "liddy",
            "createdAt": "2023-10-12T17:24:25.182Z",
            "__v": 0
        },
        {
            "_id": "65282bc99a0e93003f4db13e",
            "name": "albany sectional",
            "price": 109,
            "rating": 5,
            "featured": false,
            "company": "liddy",
            "createdAt": "2023-10-12T17:24:25.174Z",
            "__v": 0
        },
        {
            "_id": "65282bc99a0e93003f4db14e",
            "name": "vase table",
            "price": 120,
            "rating": 4.5,
            "featured": true,
            "company": "marcos",
            "createdAt": "2023-10-12T17:24:25.184Z",
            "__v": 0
        },
        {
            "_id": "65282bc99a0e93003f4db140",
            "name": "armchair",
            "price": 125,
            "rating": 4.8,
            "featured": false,
            "company": "marcos",
            "createdAt": "2023-10-12T17:24:25.176Z",
            "__v": 0
        },
        {
            "_id": "65282bc99a0e93003f4db14b",
            "name": "sofa set",
            "price": 129,
            "rating": 4.5,
            "featured": false,
            "company": "marcos",
            "createdAt": "2023-10-12T17:24:25.183Z",
            "__v": 0
        },
        {
            "_id": "65282bc99a0e93003f4db13f",
            "name": "albany table",
            "price": 309,
            "rating": 4.9,
            "featured": false,
            "company": "liddy",
            "createdAt": "2023-10-12T17:24:25.175Z",
            "__v": 0
        }
    ],
    "nbHits": 7
}
```


    
    
