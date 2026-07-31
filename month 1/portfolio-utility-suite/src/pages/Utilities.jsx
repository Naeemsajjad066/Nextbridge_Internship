import { useState } from 'react'
import Calculator from '../components/utilities/Calculator'
import TodoList from '../components/utilities/TodoList'
import WeatherWidget from '../components/utilities/WeatherWidget'

const tabs = [
  { key: 'calculator', label: '🧮 Calculator' },
  { key: 'todo',       label: '✅ Todo List' },
  { key: 'weather',    label: '🌤️ Weather' },
]

export default function Utilities() {
  const [active, setActive] = useState('calculator')

  return (
    <div className="bg-slate-100 min-h-screen">

      {/* Header */}
      <header className="bg-gradient-to-br from-slate-800 to-slate-900 text-white text-center py-16 px-5">
        <div className="max-w-xl mx-auto">
          <span className="inline-block bg-blue-600 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1 rounded-full mb-4">
            Utilities
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">Utility Suite</h1>
          <p className="text-slate-400 text-lg">Handy tools — Calculator, Todo List & Weather Widget</p>
        </div>
      </header>

      {/* Sub navbar */}
      <div className="bg-white border-b border-slate-200 shadow-sm sticky top-16 z-40">
        <div className="w-[92%] max-w-[1200px] mx-auto flex gap-1 py-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                active === tab.key
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-blue-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Active tool */}
      <main className="w-[92%] max-w-[1200px] mx-auto py-14">
        <div className="flex justify-center">
          {active === 'calculator' && <Calculator />}
          {active === 'todo'       && <TodoList />}
          {active === 'weather'    && <WeatherWidget />}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-7 text-slate-400 text-sm border-t border-slate-200 mt-5">
        © 2026 Portfolio · All rights reserved
      </footer>

    </div>
  )
}
