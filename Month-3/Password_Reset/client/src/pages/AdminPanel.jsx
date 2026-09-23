import { useEffect } from 'react'
import { useAdmin } from '../hooks'
import { useAuth } from '../hooks'
import Navbar from '../components/layout/Navbar'
import Card from '../components/ui/Card'

const AdminPanel = () => {
  const { users, isLoading, fetchUsers } = useAdmin()
  const { user } = useAuth()

  useEffect(() => {
    fetchUsers()
  }, [])

  const getInitial = (name) => name?.charAt(0).toUpperCase() || '?'

  return (
    <div className='min-h-screen bg-gradient-to-br from-[var(--color-bg-gradient-start)] to-[var(--color-bg-gradient-end)]'>
      <Navbar />

      <main className='max-w-5xl mx-auto px-4 sm:px-6 py-10'>

        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-[var(--color-text-dark)]'>
            Admin Panel
          </h1>
          <p className='text-[var(--color-text-muted)] mt-1'>
            Manage all registered users
          </p>
        </div>

        {/* Stats card */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8'>
          <Card variant='feature' className='p-5 flex items-center gap-4'>
            <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-button-bg)] to-indigo-400 flex items-center justify-center'>
              <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' />
              </svg>
            </div>
            <div>
              <p className='text-sm text-[var(--color-text-muted)]'>Total Users</p>
              <p className='text-2xl font-bold text-[var(--color-text-dark)]'>
                {isLoading ? '...' : users.length}
              </p>
            </div>
          </Card>

          <Card variant='feature' className='p-5 flex items-center gap-4'>
            <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center'>
              <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
              </svg>
            </div>
            <div>
              <p className='text-sm text-[var(--color-text-muted)]'>Logged in as</p>
              <p className='text-lg font-bold text-[var(--color-text-dark)]'>
                {user?.name}
              </p>
            </div>
          </Card>
        </div>

        {/* Users table */}
        <Card variant='default' className='overflow-hidden'>
          <div className='px-6 py-4 border-b border-[var(--color-input-border)]'>
            <h2 className='font-semibold text-[var(--color-text-dark)]'>All Users</h2>
          </div>

          {isLoading ? (
            <div className='flex items-center justify-center py-16'>
              <div className='w-8 h-8 border-4 border-[var(--color-button-bg)] border-t-transparent rounded-full animate-spin' />
            </div>
          ) : users.length === 0 ? (
            <div className='flex flex-col items-center justify-center py-16 text-[var(--color-text-muted)]'>
              <svg className='w-12 h-12 mb-3 opacity-40' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' />
              </svg>
              <p>No users found</p>
            </div>
          ) : (
            <div className='overflow-x-auto'>
              <table className='w-full text-sm'>
                <thead className='bg-[var(--color-icon-bg)]'>
                  <tr>
                    <th className='text-left py-3 px-6 text-[var(--color-text-muted)] font-medium'>#</th>
                    <th className='text-left py-3 px-6 text-[var(--color-text-muted)] font-medium'>User</th>
                    <th className='text-left py-3 px-6 text-[var(--color-text-muted)] font-medium'>Email</th>
                    <th className='text-left py-3 px-6 text-[var(--color-text-muted)] font-medium'>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u, index) => (
                    <tr
                      key={u.email}
                      className='border-t border-[var(--color-input-border)] hover:bg-[var(--color-icon-bg)]/50 transition-colors'
                    >
                      <td className='py-4 px-6 text-[var(--color-text-muted)]'>
                        {index + 1}
                      </td>
                      <td className='py-4 px-6'>
                        <div className='flex items-center gap-3'>
                          <div className='w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-button-bg)] to-indigo-400 flex items-center justify-center text-white font-semibold text-sm shrink-0'>
                            {getInitial(u.name)}
                          </div>
                          <span className='font-medium text-[var(--color-text-dark)]'>
                            {u.name}
                          </span>
                        </div>
                      </td>
                      <td className='py-4 px-6 text-[var(--color-text-muted)]'>
                        {u.email}
                      </td>
                      <td className='py-4 px-6'>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          u.role === 'admin'
                            ? 'bg-indigo-100 text-indigo-700'
                            : 'bg-emerald-100 text-emerald-700'
                        }`}>
                          {u.role}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      </main>
    </div>
  )
}

export default AdminPanel
