import React from 'react'

export default function QuestionCard({ q }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold">{q.title}</h3>
      <p className="text-sm text-gray-600 mt-2">{q.prompt}</p>
    </div>
  )
}
