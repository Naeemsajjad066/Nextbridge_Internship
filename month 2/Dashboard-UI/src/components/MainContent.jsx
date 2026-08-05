import React from 'react'
import StatsSection from './StatsSection'
import UserTable from './UserTable'
import { statsData, usersData } from '../data/DashboardData'

function MainContent({ onMenuClick }) {
  return (
    <main className='flex-1 bg-slate-100 p-4 sm:p-8 overflow-auto'>
      <div className='mb-8 flex items-center gap-4'>
        {/* Hamburger button — only visible on mobile */}
        <button
          onClick={onMenuClick}
          className='md:hidden p-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-colors'
          aria-label='Open sidebar'
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className='text-2xl font-bold text-slate-800'>Dashboard</h1>
      </div>
      <StatsSection stats={statsData}/>
      <UserTable users={usersData}/>
    </main>
  )
}

export default MainContent