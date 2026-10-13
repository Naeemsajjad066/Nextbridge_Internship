import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import uploadRoutes from './routes/upload.routes.js'

const app = express()
const port = process.env.PORT || 5000
const client_port = process.env.CLIENT_PORT || 5173
app.use(cors({
  origin: `http://localhost:${client_port}`,
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/upload', uploadRoutes)

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Backend is connected',
  })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})