import productService from "../services/productService.js"
import { AppError } from "../utils/AppError.js"
import logger from "../utils/logger.js"

const getAll = async (req, res, next) => {
    try {
        const { limit, page, search, sortBy, order } = req.validated?.query || req.query || {}

        const products = await productService.getAll(page, limit, search, sortBy, order)
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

const getById = async (req, res, next) => {
    try {
        const id = Number(req.params.id)
        const product = await productService.getById(id)
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

const deleteById = async (req, res, next) => {
    try {
        const id = Number(req.params.id)
        const products = await productService.deleteById(id)
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

const create = async (req, res, next) => {
    try {
        const { name, description, price } = req.validated?.body || req.body || {}
        if (!name || !description || price === undefined) {
            logger.warn(`invalid product data with name:${name}, description:${description}`)
            return next(new AppError("Product name, description and price are required", 400))
        }
        const products = await productService.create(name, description, price)

        if (!products) {
            const error = new AppError("Failed to add product", 500)
            logger.error(`failed to add product with name:${name}`)
            return next(error)
        }
        logger.info(`product with name:${name} added successfully`)
        res.status(201).json({
            success: true,
            message: "Product added successfully",
            statusCode: 201,
            data: products
        })
    } catch (error) {
        logger.error(`failed to add product with name:${req.body?.name}`)
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const id = Number(req.params.id)
        const { name, description, price } = req.validated.body
        const product = await productService.update(id, name, description, price)
        if (!product) {
            return next(new AppError("Product not found", 404))
        }
        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            statusCode: 200,
            data: product
        })
    } catch (error) {
        next(error)
    }
}

const patch = async (req, res, next) => {
    try {
        const id = Number(req.params.id)
        const product = await productService.patch(id, req.validated.body)
        if (!product) {
            return next(new AppError("Product not found", 404))
        }
        res.status(200).json({
            success: true,
            message: "Product patched successfully",
            statusCode: 200,
            data: product
        })
    } catch (error) {
        next(error)
    }
}

const productController = {
    getAll,
    getById,
    deleteById,
    create,
    update,
    patch
}

export default productController