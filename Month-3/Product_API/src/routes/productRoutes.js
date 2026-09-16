import express from 'express'
import productController from '../controllers/productController.js'
import { validate } from '../middleware/validate.js'
import { productIdSchema, productPatchSchema, productQuerySchema, productSchema } from '../validations/productValidations.js'

const router = express.Router()

router.get("/products", validate(productQuerySchema, "query"), productController.getAll)
router.get("/products/:id", validate(productIdSchema, "params"), productController.getById)
router.post("/products", validate(productSchema, "body"), productController.create)
router.put("/products/:id", validate(productIdSchema, "params"), validate(productSchema, "body"), productController.update)
router.patch("/products/:id", validate(productIdSchema, "params"), validate(productPatchSchema, "body"), productController.patch)
router.delete("/products/:id", validate(productIdSchema, "params"), productController.deleteById)

export default router