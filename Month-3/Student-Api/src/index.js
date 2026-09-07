import express from 'express'
import morgan from 'morgan'
import { errorHandler } from './middlewares/errorHandler.js'
import studentRouter from './routes/StudentRoutes.js'
const app=express()

app.use(express.json())
app.use(morgan('dev'))

app.use(studentRouter)
app.use(errorHandler)
app.listen(3000,()=>{
    console.log("Server is listning on 3000 port");
})