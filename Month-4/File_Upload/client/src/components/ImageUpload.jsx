import { useState } from 'react'
import api from '../Services/api'
import './ImageUpload.css'

function ImageUpload() {
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState('')
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState('')

  const MAX_MB = 10

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0]
    if (!selectedImage) return

    if (selectedImage.size > MAX_MB * 1024 * 1024) {
      setError(`File too large. Max size is ${MAX_MB} MB.`)
      return
    }

    setError('')
    setImage(selectedImage)
    setPreview(URL.createObjectURL(selectedImage))
    setProgress(0)
  }

  const handleUpload = async () => {
    if (!image) return

    const formData = new FormData()
    formData.append('image', image)
    setError('')

    try {
      const response = await api.post('/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const percentage = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            )
            setProgress(percentage)
          }
        },
      })
      if (response.status === 201) {
        setImage(null)
        setPreview('')
        // keep progress at 100 to show success, reset after 2s
        setTimeout(() => setProgress(0), 2000)
      }
    } catch (err) {
      setProgress(0)
      setError(err?.response?.data?.message || 'Upload failed. Please try again.')
      console.error('Upload failed:', err)
    }
  }

  return (
    <div className="iu-page">
      <div className="iu-card">
        <h2 className="iu-title">Image Upload</h2>

        {/* Drop zone */}
        <label className="iu-dropzone">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="iu-file-input"
          />
          {preview ? (
            <img src={preview} alt="Preview" className="iu-preview" />
          ) : (
            <div className="iu-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#9ca3af" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
              <p>Click to choose an image</p>
              <span>PNG, JPG, WEBP</span>
            </div>
          )}
        </label>

        {/* File name */}
        {image && <p className="iu-filename">{image.name}</p>}

        {/* Error */}
        {error && <p className="iu-error">{error}</p>}

        {/* Upload button */}
        <button
          className="iu-btn"
          onClick={handleUpload}
          disabled={!image}
        >
          Upload Image
        </button>

        {/* Progress / Success */}
        {progress > 0 && (
          <div className="iu-feedback">
            {progress < 100 ? (
              <>
                <div className="iu-progress-header">
                  <span>Uploading...</span>
                  <span>{progress}%</span>
                </div>
                <div className="iu-track">
                  <div className="iu-fill" style={{ width: `${progress}%` }} />
                </div>
              </>
            ) : (
              <div className="iu-success">
                <span className="iu-check">✓</span>
                Successfully uploaded
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ImageUpload
