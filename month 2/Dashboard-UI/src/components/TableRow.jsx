
function TableRow({user}) {
  const isActive = user.status === 'Active'
  return (
    <tr className='border-b border-slate-100 hover:bg-slate-50 transition-colors'>
        <td className='px-4 py-3 text-sm font-medium text-slate-800'>{user.name}</td>
        <td className='px-4 py-3 text-sm text-slate-500'>{user.role}</td>
        <td className='px-4 py-3'>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-500'}`}>
            {user.status}
          </span>
        </td>
    </tr>
  )
}

export default TableRow