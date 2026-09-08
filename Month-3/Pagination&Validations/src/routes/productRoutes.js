import express from 'express'
import { addProductFromController, deleteProductByIdFromController, getProductByIdController, getProducts } from '../controllers/productController.js'
import { validate } from '../middleware/validate.js'
import { productIdSchema, productQuerySchema, productSchema } from '../validations/productValidations.js'
const router=express.Router()

router.get("/products",validate(productQuerySchema,"query"),getProducts)
router.get("/products/:id",validate(productIdSchema,"params"),getProductByIdController)
router.delete("/products/:id",deleteProductByIdFromController)
router.post("/products",validate(productSchema,"body"),addProductFromController)
export default router;