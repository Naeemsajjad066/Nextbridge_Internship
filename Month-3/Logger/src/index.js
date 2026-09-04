import express from 'express'
import productRoutes from './routes/productRoutes.js'
import { errorHandler } from './middleware/errorMiddleware.js'
import cors from 'cors'
import morgan from 'morgan'
const app =express()

app.use(express.json())

app.use(cors())
app.use(morgan('dev'))

app.use(productRoutes)
app.use(errorHandler)
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})