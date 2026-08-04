import React, { useState } from 'react'
import Input from '../components/Input.jsx'

function User() {
    const [users, setUsers] = useState([])

    function addUser(user) {
        setUsers((prev) => [...prev, user])
    }

    return (
        <div className="min-h-screen bg-slate-100 p-10">
            <div className="max-w-sm mx-auto flex flex-col gap-6">

                <Input addUser={addUser} />

                {/* conditional rendering — show list only if users exist */}
                {users.length > 0 && (
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h2 className="text-lg font-bold text-slate-800 mb-4">Users</h2>
                        <div className="flex flex-col gap-3">
                            {users.map((u) => (
                                <div key={u.id} className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-lg px-4 py-3">
                                    <span className="text-sm font-semibold text-slate-800">{u.name}</span>
                                    <span className="text-xs text-slate-400">Age: {u.age}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default User
