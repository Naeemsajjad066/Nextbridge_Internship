import db from "./db.js";

const products=db.collection("products")
const users=db.collection("user")

export {
    products,users
}