import Loading from '../components/Loading'
import useStudents from '../hooks/useStudents'
import Users from './Users'

function Home() {
  const { loading } = useStudents()
  return (
    <div>
      {/* Page Header */}
      <div className='mb-8'>
        <h2 className='text-3xl font-bold text-[#0B132B]'>Users</h2>
        <p className='text-slate-500 text-sm mt-1'>
          Fetched from JSONPlaceholder API
        </p>
        <div className='w-12 h-1 bg-[#0B132B] rounded-full mt-3' />
      </div>
      {loading ? <Loading /> : <Users />}
    </div>
  )
}

export default Home
