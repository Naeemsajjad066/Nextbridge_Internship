import { products } from "../config/collections.js";
import { AddProduct } from "./Services/createProduct.js";

await products.createIndex({ category: 1 })
await products.createIndex({ category: 1, price: 1 })

const product={
    name:"Laptop",
    category:"Electronics",
    brand:"Lenovo",
    price:30000,
    stock:23,
    units_sold:2000,
    rating:3.9
}


await AddProduct(product)
const indexes = await products.listIndexes().toArray()
console.log('Indexes:', indexes)

const result = await products
    .find({ category: 'Electronics',price:{$gt:40} })
    .explain('executionStats')

console.log('Execution Stats:', result.executionStats)
