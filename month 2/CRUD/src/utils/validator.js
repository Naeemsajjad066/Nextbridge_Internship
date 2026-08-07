export function validateStudentForm(formData) {
  const errors = {}

  // Name validation
  if (!formData.name || !formData.name.trim()) {
    errors.name = 'Name is required'
  } else if (formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }

  // Email validation
  if (!formData.email || !formData.email.trim()) {
    errors.email = 'Email is required'
  } else if (
    !/^[a-zA-Z][a-zA-Z0-9]*@[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/.test(formData.email)
  ) {
    errors.email = 'Enter a valid email'
  }

  // Role validation
  if (!formData.role || !formData.role.trim()) {
    errors.role = 'Role is required'
  } else if (formData.role.trim().length < 2) {
    errors.role = 'Role must be at least 2 characters'
  }

  return errors
}

export function hasErrors(errors) {
  return Object.keys(errors).length > 0
}
