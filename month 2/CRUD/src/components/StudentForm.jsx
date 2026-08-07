import { useEffect, useState } from 'react'
import Button from './common/Button'
import Input from './common/Input'
import { validateStudentForm, hasErrors } from '../utils/validator'

const initialState = {
  id: null,
  name: '',
  email: '',
  role: '',
}

const initialErrors = {
  name: '',
  email: '',
  role: '',
}

function StudentForm({ onAddStudent, editingStudent, onUpdateStudent }) {
  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState(initialErrors)

  useEffect(() => {
    if (editingStudent) {
      setFormData(editingStudent)
    } else {
      setFormData(initialState)
    }
    setErrors(initialErrors)
  }, [editingStudent])

  function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validateStudentForm(formData)
    if (hasErrors(validationErrors)) {
      setErrors(validationErrors)
      return
    }
    if (editingStudent) {
      onUpdateStudent(formData)
    } else {
      onAddStudent(formData)
    }
    setFormData(initialState)
    setErrors(initialErrors)
  }

  function handleOnchange(e) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  function handleLettersOnly(e) {
    const allowed = /^[a-zA-Z ]$/
    const controlKeys = [
      'Backspace',
      'Delete',
      'ArrowLeft',
      'ArrowRight',
      'Tab',
    ]
    if (!allowed.test(e.key) && !controlKeys.includes(e.key)) {
      e.preventDefault()
    }
  }

  return (
    <div className="bg-white border border-[#0B132B]/20 rounded-lg p-6 mb-6 w-full max-w-md shadow-sm">
      <h2 className="font-bold text-xl mb-4 text-[#0B132B]">
        {editingStudent ? 'Update Student' : 'Add Student'}
      </h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Enter your Name.."
            label="Name"
            onChange={handleOnchange}
            onKeyDown={handleLettersOnly}
            value={formData.name}
          />
          {errors.name && (
            <p className="text-red-600 text-xs mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <Input
            type="email"
            name="email"
            placeholder="Enter your Email.."
            label="Email"
            onChange={handleOnchange}
            value={formData.email}
          />
          {errors.email && (
            <p className="text-red-600 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <Input
            type="text"
            name="role"
            placeholder="Enter your Role.."
            label="Role"
            onChange={handleOnchange}
            onKeyDown={handleLettersOnly}
            value={formData.role}
          />
          {errors.role && (
            <p className="text-red-600 text-xs mt-1">{errors.role}</p>
          )}
        </div>
        <Button color={editingStudent ? 'bg-green-700' : 'bg-[#0B132B]'}>
          {editingStudent ? 'Update' : 'Submit'}
        </Button>
      </form>
    </div>
  )
}

export default StudentForm
