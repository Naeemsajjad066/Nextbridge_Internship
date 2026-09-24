import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import userRoutes from './routes/userRoutes.js'
import { errorHandler } from './middlewares/ErrorMiddleware.js'
import adminRoutes from './routes/adminRoutes.js'
import { generalLimiter, authLimiter } from './middlewares/rateLimiter.js'
const app = express()

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
)
app.use(generalLimiter)
app.use(helmet())
app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Hello Users')
})

app.use('/users', authLimiter, userRoutes)
app.use('/admin', adminRoutes)
app.use(errorHandler)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
