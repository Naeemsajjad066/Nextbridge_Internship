export function validate(formData, setErrors) {
  // Name Validation
  if (formData.name.trim() === "") {
    setErrors((prev) => ({ ...prev, name: "Name is required" }))
    return false
  }
  const nameRegex = /^[A-Za-z ]+$/
  if (!nameRegex.test(formData.name)) {
    setErrors((prev) => ({ ...prev, name: "Enter valid Name" }))
    return false
  }

  // City Validation
  if (formData.city.trim() !== "" && !/^[A-Za-z ]+$/.test(formData.city)) {
    setErrors((prev) => ({ ...prev, city: "Enter a valid city name" }))
    return false
  }

  // Email Validation
  if (formData.email.trim() === "") {
    setErrors((prev) => ({ ...prev, email: "Email is required" }))
    return false
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.email)) {
    setErrors((prev) => ({ ...prev, email: "Please Enter a valid email" }))
    return false
  }

  // Password Validations
  if (formData.password.trim() === "") {
    setErrors((prev) => ({ ...prev, password: "Password is required" }))
    return false
  }

  if (formData.password.length < 8) {
    setErrors((prev) => ({ ...prev, password: "Password must be at least 8 characters" }))
    return false
  }

  if (!/[A-Z]/.test(formData.password)) {
    setErrors((prev) => ({ ...prev, password: "Password must contain an uppercase letter" }))
    return false
  }

  if (!/[a-z]/.test(formData.password)) {
    setErrors((prev) => ({ ...prev, password: "Password must contain a lowercase letter" }))
    return false
  }

  if (!/\d/.test(formData.password)) {
    setErrors((prev) => ({ ...prev, password: "Password must contain a number" }))
    return false
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
    setErrors((prev) => ({ ...prev, password: "Password must contain a special character" }))
    return false
  }

  // Confirm Password
  if (formData.confirmPassword.trim() === "") {
    setErrors((prev) => ({ ...prev, confirmPassword: "Please Confirm Password" }))
    return false
  }
  if (formData.password !== formData.confirmPassword) {
    setErrors((prev) => ({ ...prev, confirmPassword: "Password not Matched" }))
    return false
  }

  return true
}
