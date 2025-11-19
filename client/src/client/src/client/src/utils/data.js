// Data generator - in production store this in DB & paginate
export const MODULES = [
  { id: 'speaking', title: 'Speaking' },
  { id: 'listening', title: 'Listening' },
  { id: 'reading', title: 'Reading' },
  { id: 'writing', title: 'Writing' }
]

export function generateQuestions(moduleId, total = 2000) {
  const arr = []
  for (let i = 1; i <= total; i++) {
    arr.push({
      id: `${moduleId}-${i}`,
      title: `${moduleId} question ${i}`,
      prompt: `This is ${moduleId} sample prompt number ${i}. Please answer or respond accordingly.`,
      sampleAnswer: ''
    })
  }
  return arr
}

export function generateMockTests(moduleId, count = 100) {
  return Array.from({length: count}, (_, idx) => ({
    id: `${moduleId}-mock-${idx+1}`,
    title: `Mock Test ${idx+1}`,
    questions: generateQuestions(moduleId, 30) // example 30 q per mock
  }))
}

export function generateSessionTexts(moduleId, count = 50) {
  return Array.from({length: count}, (_, idx) => ({
    id: `${moduleId}-session-${idx+1}`,
    title: `Session Text ${idx+1}`,
    text: `Session passage for ${moduleId} session ${idx+1}. Read and prepare answers.`
  }))
}
