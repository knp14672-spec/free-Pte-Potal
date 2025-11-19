import React from 'react'
export default function Header(){
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-indigo-600">PTE POTALA</h1>
          <p className="text-sm text-gray-500">Practice speaking, listening, reading & writing — AI scoring</p>
        </div>
        <div>
          <a href="#" className="text-sm px-3 py-1 rounded bg-indigo-600 text-white">Login</a>
        </div>
      </div>
    </header>
  )
}
