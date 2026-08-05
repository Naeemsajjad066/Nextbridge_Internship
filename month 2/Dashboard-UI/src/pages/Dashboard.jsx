import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'
import { sidebarItems } from '../data/DashboardData'

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex min-h-screen'>

      {isOpen && (
        <div
          className='fixed inset-0 bg-black/50 z-40 md:hidden'
          onClick={() => setIsOpen(false)}
        />
      )}

      <Sidebar items={sidebarItems} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <MainContent onMenuClick={() => setIsOpen(true)} />

    </div>
  )
}

export default Dashboard