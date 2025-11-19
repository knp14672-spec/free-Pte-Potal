import React from 'react'
import { Link } from 'react-router-dom'
import { MODULES } from '../utils/data'

export default function Home(){
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MODULES.map(m => (
          <Link key={m.id} to={`/module/${m.id}`} className="block bg-white p-6 rounded-xl shadow hover:shadow-2xl">
            <h2 className="text-xl font-bold">{m.title}</h2>
            <p className="text-sm text-gray-600 mt-2">2000 Questions • 100 Mock Tests • 50 Sessions</p>
            <div className="mt-4 text-indigo-600 text-sm">Start practicing →</div>
          </Link>
        ))}
      </section>
    </main>
  )
}
