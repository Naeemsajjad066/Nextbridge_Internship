import { addProductFromService, deleteProductByIdFromServices, getAllProducts, getProductById } from "../services/productService.js"
import { AppError } from "../utils/AppError.js"
import logger from "../utils/logger.js"

export const getProducts = async (req, res, next) => {
    try {
    const { limit, page } = req.query || {}

    const products = await getAllProducts(page, limit)
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
            logger.warn(`product with ID:${req.params.id} not found`)
            return next(error)
        }
        logger.info(`product with ID:${req.params.id} fetched successfully`)
        res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            statusCode: 200,
            data: product
        })
    } catch (error) {
        logger.error(`failed to fetch product with ID:${req.params.id}`)
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
        const { name, price } = req.body || {}
        if (name === undefined || price === undefined) {
            logger.warn(`invalid product data with name:${name} and price:${price}`)
            return next(new AppError("Product name and price are required", 400))
        }
        const products = await addProductFromService(name, price)

        if (!products) {
            const error = new AppError("Failed to add product", 500)
            logger.error(`failed to add product with name:${name} and price:${price}`)
            return next(error)
        }
        logger.info(`product with name:${name} and price:${price} added successfully`)
        res.status(201).json({
            success: true,
            message: "Product added successfully",
            statusCode: 201,
            data: products
        })
    } catch (error) {
        logger.error(`failed to add product with name:${req.body.name} and price:${req.body.price}`)
        next(error)
    }

}