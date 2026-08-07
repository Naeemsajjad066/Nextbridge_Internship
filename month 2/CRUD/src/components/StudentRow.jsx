import Button from './common/Button'

function StudentRow({
  id,
  name,
  email,
  role,
  onDeleteStudent,
  onEditingStudent,
  editing,
}) {
  function handleDelete() {
    const isConfirmed = window.confirm('Are you Sure?')
    if (isConfirmed) {
      onDeleteStudent(id)
    }
  }
  return (
    <tr className="border-t border-[#0B132B]/10 hover:bg-slate-50 text-[#0B132B]">
      <td className="px-4 py-3">{id}</td>
      <td className="px-4 py-3 font-medium">{name}</td>
      <td className="px-4 py-3 text-slate-500">{email}</td>
      <td className="px-4 py-3">{role}</td>
      <td className="px-4 py-3 flex gap-2">
        <Button color="bg-[#1C3A6B] " onClick={() => onEditingStudent(id)}>
          Edit
        </Button>
        <Button color="bg-rose-700" onClick={handleDelete} disabled={editing}>
          Delete
        </Button>
      </td>
    </tr>
  )
}

export default StudentRow
