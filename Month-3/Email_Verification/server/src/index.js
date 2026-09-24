import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRoutes from './routes/userRoutes.js'
import { errorHandler } from './middlewares/ErrorMiddleware.js'
import adminRoutes from './routes/adminRoutes.js'
const app = express()

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
)

app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Hello Users')
})

app.use('/users', userRoutes)
app.use('/admin', adminRoutes)
app.use(errorHandler)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
