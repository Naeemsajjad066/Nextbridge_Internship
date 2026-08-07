import { useState } from 'react'

export function useStudents() {
  const [students, setStudents] = useState([])
  const [editingStudent, setEditingStudent] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  function addStudent(student) {
    if (students.some(st => st.email === student.email)) {
      alert('Duplicate email')
      return
    }
    setStudents(prev => [...prev, { ...student, id: Date.now() }])
  }

  function updateStudent(updatedStudent) {
    if (
      students.some(
        st => st.email === updatedStudent.email && st.id !== updatedStudent.id
      )
    ) {
      alert('Duplicate email')
      return
    }
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    )
    setEditingStudent(null)
  }

  function deleteStudent(id) {
    setStudents(prevStudents =>
      prevStudents.filter(student => student.id !== id)
    )
  }

  function editStudent(id) {
    setEditingStudent(students.find(student => student.id === id))
  }

  const filteredStudents = students.filter(student => {
    const term = searchTerm.toLowerCase()
    return (
      student.name.toLowerCase().includes(term) ||
      student.email.toLowerCase().includes(term) ||
      student.role.toLowerCase().includes(term)
    )
  })

  return {
    students: filteredStudents,
    editingStudent,
    searchTerm,
    setSearchTerm,
    addStudent,
    updateStudent,
    deleteStudent,
    editStudent,
  }
}
