import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import StudentForm from '../components/StudentForm'
import StudentTable from '../components/StudentTable'
import { useStudents } from '../hooks/useStudents'

function StudentManagement() {
  const {
    students,
    editingStudent,
    searchTerm,
    setSearchTerm,
    addStudent,
    updateStudent,
    deleteStudent,
    editStudent,
  } = useStudents()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side - Form */}
          <div className="lg:col-span-1">
            <StudentForm
              onAddStudent={addStudent}
              editingStudent={editingStudent}
              onUpdateStudent={updateStudent}
            />
          </div>

          {/* Right side - Table */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-[#0B132B]">
                    Student Records
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    {students.length}{' '}
                    {students.length === 1 ? 'student' : 'students'} found
                  </p>
                </div>
              </div>
              <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              <StudentTable
                students={students}
                onDeleteStudent={deleteStudent}
                onEditingStudent={editStudent}
                editing={editingStudent !== null}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default StudentManagement
