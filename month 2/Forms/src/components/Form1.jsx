import { useState } from 'react'
import FormInput from './FormInput'
import { validateField } from '../utils/validate'
import Submitted from './Submitted'

function Form1() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [nameError, setNameError] = useState('')
  const [ageError, setAgeError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [numberError, setNumberError] = useState('')

  function handleChange(e) {
    const { name, value } = e.target

    if (name === 'name') setName(value)
    if (name === 'age') setAge(value)
    if (name === 'email') setEmail(value)
    if (name === 'number') setNumber(value)

    const error = validateField(name, value)

    if (name === 'name') setNameError(error)
    if (name === 'age') setAgeError(error)
    if (name === 'email') setEmailError(error)
    if (name === 'number') setNumberError(error)
  }

  const isFormValid =
    name &&
    age &&
    email &&
    number &&
    !nameError &&
    !ageError &&
    !emailError &&
    !numberError

  function handleSubmit(e) {
    e.preventDefault()
    if (!isFormValid) return

    console.log({ name, age, email, number })

    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)

    setName('')
    setAge('')
    setEmail('')
    setNumber('')
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
          value={name}
          onChange={handleChange}
          error={nameError}
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
          value={age}
          onChange={handleChange}
          error={ageError}
          min="0"
          max="120"
          onKeyDown={e => {
            if (e.key === '-' || e.key === '+' || e.key === 'e') {
              e.preventDefault()
            }
            if (
              age.length >= 3 &&
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
          value={email}
          onChange={handleChange}
          error={emailError}
        />

        <FormInput
          label="Phone Number"
          id="number"
          name="number"
          type="tel"
          placeholder="03XXXXXXXXX"
          value={number}
          onChange={handleChange}
          error={numberError}
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

export default Form1
