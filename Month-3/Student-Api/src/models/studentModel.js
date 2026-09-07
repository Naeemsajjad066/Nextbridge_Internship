import fs from 'fs/promises'

const path = "./src/data/students.json"

export const readStudents = async () => {
    const data = await fs.readFile(path, "utf-8")
    const students = JSON.parse(data)
    return students
}

export const addStudent = async (student) => {
    const students = await readStudents()
    const newStudent = {
        id: Date.now(),
        name: student.name,
        email: student.email,
        semester: student.semester,
        department: student.department
    }
    students.push(newStudent)
    const updatedStudents = JSON.stringify(students)
    await fs.writeFile(path, updatedStudents, "utf-8")
}

export const getStudentById = async (id) => {
    const students = await readStudents()
    const student = students.find((stud) => stud.id === Number(id))
    return student
}

export const updateStudentById = async (id, studentData) => {
    const students = await readStudents()
    const studentIndex = students.findIndex((student) => student.id === Number(id))
    if (studentIndex === -1) {
        return null
    }
    students[studentIndex] = {
        ...students[studentIndex],
        ...studentData,
        id: students[studentIndex].id
    }
    await fs.writeFile(path, JSON.stringify(students), "utf-8")
    return students[studentIndex]
}

export const replaceStudentById = async (id, studentData) => {
    const students = await readStudents()
    const studentIndex = students.findIndex((student) => student.id === Number(id))
    if (studentIndex === -1) {
        return null
    }
    students[studentIndex] = {
        id: students[studentIndex].id,
        name: studentData.name,
        email: studentData.email,
        semester: studentData.semester,
        department: studentData.department
    }
    await fs.writeFile(path, JSON.stringify(students), "utf-8")
    return students[studentIndex]
}

export const deletStudentById = async (id) => {
    const students = await readStudents()
    const studentExists = students.some((stud) => stud.id === Number(id))
    if (!studentExists) {
        return null
    }
    const updatedStudents = students.filter((stud) => stud.id !== Number(id))
    const newStudents = JSON.stringify(updatedStudents)
    await fs.writeFile(path, newStudents, "utf-8")
    return updatedStudents
}
