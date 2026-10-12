import 'dotenv/config'
import express from 'express'
import { connectDb } from './config/db.js'
import userRouter from '../src/routes/userRoutes.js'
import postRouter from '../src/routes/postRoutes.js'
import commentRouter from './routes/commentRoutes.js'


const app=express()
app.use(express.json())

await connectDb()
app.use("/user", userRouter)
app.use("/post", postRouter)
app.use("/comments",commentRouter)

app.listen(3000,()=>{
    console.log("Server is running on port: 3000")
})