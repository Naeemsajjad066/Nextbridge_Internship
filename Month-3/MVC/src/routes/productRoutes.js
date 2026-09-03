import express from 'express'
import { addProductFromController, deleteProductByIdFromController, getProductByIdController, getProducts } from '../controllers/productController.js'
const router=express.Router()

router.get("/products",getProducts)
router.get("/products/:id",getProductByIdController)
router.delete("/products/:id",deleteProductByIdFromController)
router.post("/products",addProductFromController)
export default router;