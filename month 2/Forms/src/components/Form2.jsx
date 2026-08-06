import { useState } from 'react'
import FormInput from './FormInput'
import { validateField } from '../utils/validate'
import Submitted from './Submitted'

function Form2() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    number: '',
  })
  const [errors, setErrors] = useState({
    name: '',
    age: '',
    email: '',
    number: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    const error = validateField(name, value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const isFormValid =
    formData.name &&
    formData.age &&
    formData.email &&
    formData.number &&
    !errors.name &&
    !errors.age &&
    !errors.email &&
    !errors.number

  function handleSubmit(e) {
    e.preventDefault()
    if (!isFormValid) return
    console.log(formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormData({ name: '', age: '', email: '', number: '' })
    setErrors({ name: '', age: '', email: '', number: '' })
  }

  return isSubmitted ? (
    <Submitted />
  ) : (
    <div className="w-96 bg-white rounded-2xl shadow-md px-8 py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">Contact Us</h2>
      <p className="text-sm text-gray-400 mb-6">Fill in the details below</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <FormInput
          label="Name"
          id="name"
          name="name"
          type="text"
          placeholder="Enter Name.."
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          maxLength={50}
          onKeyDown={e => {
            if (
              !/[a-zA-Z\s]/.test(e.key) &&
              e.key !== 'Backspace' &&
              e.key !== 'Delete'
            ) {
              e.preventDefault()
            }
          }}
        />

        <FormInput
          label="Age"
          id="age"
          name="age"
          type="number"
          placeholder="Enter Age.."
          value={formData.age}
          onChange={handleChange}
          error={errors.age}
          min="0"
          max="120"
          onKeyDown={e => {
            if (e.key === '-' || e.key === '+' || e.key === 'e') {
              e.preventDefault()
            }
            if (
              formData.age.length >= 3 &&
              e.key !== 'Backspace' &&
              e.key !== 'Delete'
            ) {
              e.preventDefault()
            }
          }}
        />

        <FormInput
          label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="Enter Email.."
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <FormInput
          label="Phone Number"
          id="number"
          name="number"
          type="tel"
          placeholder="03XXXXXXXXX"
          value={formData.number}
          onChange={handleChange}
          error={errors.number}
          maxLength={11}
          onKeyDown={e => {
            if (
              !/[0-9]/.test(e.key) &&
              e.key !== 'Backspace' &&
              e.key !== 'Delete'
            ) {
              e.preventDefault()
            }
          }}
        />

        <button
          type="submit"
          disabled={!isFormValid}
          className={`mt-2 text-white text-sm font-medium py-2 rounded-lg transition
                            ${
                              isFormValid
                                ? 'bg-indigo-600 hover:bg-indigo-700 cursor-pointer'
                                : 'bg-indigo-300 cursor-not-allowed'
                            }`}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form2
