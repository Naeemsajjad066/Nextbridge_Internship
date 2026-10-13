import { Router } from 'express'
import upload from '../config/upload.js'

const router = Router()

router.post('/', (req, res) => {
  upload.single('image')(req, res, (err) => {
    if (err) {
      return res.status(400).json({
        message: 'File upload failed',
        error: err.message,
      })
    }

    if (!req.file) {
      return res.status(400).json({ message: 'No file provided' })
    }

    res.status(201).json({
      message: 'Image uploaded successfully',
      file: req.file,
    })
  })
})

export default router