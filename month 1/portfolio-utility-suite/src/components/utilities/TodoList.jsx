import { useState, useEffect } from 'react'

// ── localStorage helpers (same as script.js loadTask / saveTasks) ─────────────
function loadTasks() {
  const saved = localStorage.getItem('tasks')
  return saved ? JSON.parse(saved) : []
}

function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function TodoList() {
  const [tasks, setTasks] = useState(loadTasks)
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState('all') // 'all' | 'active' | 'completed'
  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')

  // persist to localStorage whenever tasks change
  useEffect(() => {
    saveTasks(tasks)
  }, [tasks])

  // addTask
  function addTask() {
    const text = input.trim()
    if (text === '') return
    const task = { id: Date.now(), text, completed: false }
    setTasks((prev) => [...prev, task])
    setInput('')
  }

  // deleteTask
  function deleteTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }

  // toggleTask
  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  // editTask — inline edit instead of prompt()
  function startEdit(task) {
    setEditId(task.id)
    setEditText(task.text)
  }

  function saveEdit(id) {
    const trimmed = editText.trim()
    if (trimmed === '') return
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, text: trimmed } : t)))
    setEditId(null)
    setEditText('')
  }

  // filtered list
  const filtered = tasks.filter((t) => {
    if (filter === 'active') return !t.completed
    if (filter === 'completed') return t.completed
    return true
  })

  const filterBtn = (label, value) => {
    const active = filter === value
    return (
      <button
        onClick={() => setFilter(value)}
        className={`px-4 py-2 rounded-md text-sm font-medium transition ${
          active ? 'bg-blue-600 text-white' : 'bg-slate-200 hover:bg-slate-300 text-slate-700'
        }`}
      >
        {label}
      </button>
    )
  }

  return (
    <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-center mb-6 text-slate-800">Todo App</h2>

      {/* Input row */}
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Enter a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          className="flex-1 border border-slate-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>

      {/* Filter buttons */}
      <div className="flex justify-center gap-3 mb-6">
        {filterBtn('All', 'all')}
        {filterBtn('Active', 'active')}
        {filterBtn('Completed', 'completed')}
      </div>

      {/* Task list */}
      <div className="space-y-3 max-h-72 overflow-y-auto">
        {filtered.length === 0 ? (
          <p className="text-center text-slate-400 py-6 text-sm">No todos found.</p>
        ) : (
          filtered.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between bg-slate-100 rounded-lg p-3 gap-2"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="w-5 h-5 cursor-pointer shrink-0"
                />

                {/* inline edit or display */}
                {editId === task.id ? (
                  <input
                    autoFocus
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') saveEdit(task.id)
                      if (e.key === 'Escape') setEditId(null)
                    }}
                    onBlur={() => saveEdit(task.id)}
                    className="flex-1 border border-blue-400 rounded px-2 py-0.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <span
                    className={`text-sm truncate ${
                      task.completed ? 'line-through text-slate-400' : 'text-slate-800'
                    }`}
                  >
                    {task.text}
                  </span>
                )}
              </div>

              <div className="flex gap-2 shrink-0">
                <button
                  onClick={() => startEdit(task)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-xs font-medium transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs font-medium transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
