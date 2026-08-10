import Error from '../components/Error'
import User from '../components/User'
import useStudents from '../hooks/useStudents'

function Users() {
  const { users, error } = useStudents()
  if (error) return <Error error={error} />

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  )
}

export default Users
