import React from 'react'

function Sidebar({ items, isOpen, onClose }) {
  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-50
        w-64 bg-slate-800 text-white p-6 flex flex-col gap-8
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0 md:z-auto
      `}
    >
      {/* Header row: title + close button (close only visible on mobile) */}
      <div className='flex items-center justify-between'>
        <h2 className='text-xl font-bold tracking-tight'>My Dashboard</h2>
        <button
          onClick={onClose}
          className='md:hidden text-slate-400 hover:text-white transition-colors'
          aria-label='Close sidebar'
        >
          ✕
        </button>
      </div>

      <nav>
        <p className='text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3'>Menu</p>
        <ul className='space-y-1'>
          {items.map((item) => (
            <li
              key={item.id}
              onClick={onClose}
              className='flex items-center gap-3 px-3 py-2.5  rounded-lg text-sm text-slate-300 hover:bg-slate-700 hover:text-white cursor-pointer transition-colors'
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>

    </aside>
  )
}

export default Sidebar