import express from 'express'
import productRoutes from './routes/productRoutes.js'
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './config/swagger.js'
import { errorHandler } from './middleware/errorMiddleware.js'
import cors from 'cors'
import morgan from 'morgan'
const app =express()

app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use(cors())
app.use(morgan('dev'))

app.use(productRoutes)
app.use(errorHandler)
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})