import { addProductFromService, deleteProductByIdFromServices, getAllProducts, getProductById } from "../services/productService.js"

export const getProducts = async (req, res) => {
    try {
        const products = await getAllProducts()
        res.json(products)
    } catch (error) {
        res.status(500).json({
            message: error.message || "Something went wrong"
        })
    }

}
export const getProductByIdController = async (req, res) => {
    try {
        const id = req.params.id
        const product = await getProductById(id)
        res.json(product)
    } catch (error) {
        res.status(500).json({
            message: error.message || "Something went wrong"
        })
    }

}

export const deleteProductByIdFromController = async (req, res) => {
    try {
        const id = req.params.id
        const products = await deleteProductByIdFromServices(id)
        if (!products) {
            return res.status(404).json({ message: "Product not found" })
        }
        res.json({ message: "Deleted Successfully", data: products })
    } catch (error) {
        res.status(500).json({
            message: error.message || "Something went wrong"
        })
    }
}

export const addProductFromController = async (req, res) => {
    try {
        const { name, price } = req.body
        const products = await addProductFromService(name, price)
        res.json({ message: "Product added successfully", products: products })
    } catch (error) {
        res.status(500).json({
            message:error.message||"Something went wrong"
        })
    }

}