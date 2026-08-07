import StudentRow from './StudentRow'

function StudentTable({
  students,
  onDeleteStudent,
  onEditingStudent,
  editing,
}) {
  return (
    <div className="border border-[#0B132B]/20 rounded-lg overflow-hidden shadow-sm overflow-x-auto">
      <table className="w-full text-left text-sm min-w-[600px]">
        <thead style={{ backgroundColor: '#0B132B' }} className="text-white">
          <tr>
            <th className="px-4 py-3 font-semibold">ID</th>
            <th className="px-4 py-3 font-semibold">Name</th>
            <th className="px-4 py-3 font-semibold">Email</th>
            <th className="px-4 py-3 font-semibold">Role</th>
            <th className="px-4 py-3 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center px-4 py-6 text-slate-400">
                No Students Found
              </td>
            </tr>
          ) : (
            students.map(student => (
              <StudentRow
                key={student.id}
                id={student.id}
                name={student.name}
                email={student.email}
                role={student.role}
                onDeleteStudent={onDeleteStudent}
                onEditingStudent={onEditingStudent}
                editing={editing}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default StudentTable
