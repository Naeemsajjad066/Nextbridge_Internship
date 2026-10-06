import { products } from "../../config/collections.js";


export const AddProduct = async (product) => {
    try {
        await products.insertOne({
            name: product.name,
            category: product.category,
            brand: product.brand,
            price: product.price,
            stock: product.stock,
            units_sold: product.units_sold,
            rating: product.rating
        })
        console.log("Product added successfully")
    } catch (error) {
        console.error("Failed to create product",error.message)
    }
}

