import { addProductFromService, deleteProductByIdFromServices, getAllProducts, getProductById } from "../services/productService.js"
import { AppError } from "../utils/AppError.js"

export const getProducts = async (req, res, next) => {
    try {
        const products = await getAllProducts()
        if (!products) {
            const error = new AppError("Failed to get products", 500)
            return next(error)
        }
        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            statusCode: 200,
            data: products
        })
    } catch (error) {
        next(error)
    }

}
export const getProductByIdController = async (req, res, next) => {
    try {
        const id = req.params.id
        const product = await getProductById(id)
        if (!product) {
            const error = new AppError("Product not found", 404)
            return next(error)
        }
        res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            statusCode: 200,
            data: product
        })
    } catch (error) {
        next(error)
    }

}

export const deleteProductByIdFromController = async (req, res, next) => {
    try {
        const id = req.params.id
        const products = await deleteProductByIdFromServices(id)
        if (!products) {
            const error = new AppError("Product not found", 404)
            return next(error)
        }
        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            statusCode: 200,
            data: products
        })
    } catch (error) {
        next(error)
    }
}

export const addProductFromController = async (req, res, next) => {
    try {
        const { name, price } = req.body
        const products = await addProductFromService(name, price)

        if (!products) {
            const error = new AppError("Failed to add product", 500)
            return next(error)
        }
        res.status(201).json({
            success: true,
            message: "Product added successfully",
            statusCode: 201,
            data: products
        })
    } catch (error) {
        next(error)
    }

}