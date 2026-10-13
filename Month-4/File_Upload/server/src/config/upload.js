import multer from 'multer'
import path from 'node:path'
import fs from 'node:fs'

const uploadDir = 'uploads/'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Create the folder on every request if it doesn't exist
    fs.mkdirSync(uploadDir, { recursive: true })
    cb(null, uploadDir)
  },

  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}${path.extname(file.originalname)}`
    cb(null, uniqueName)
  },
})

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB
  },
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
    if (allowed.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('Only JPEG, PNG, WEBP and GIF are allowed'))
    }
  },
})

export default upload
