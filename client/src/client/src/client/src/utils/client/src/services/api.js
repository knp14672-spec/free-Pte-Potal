import axios from 'axios'

const SERVER = process.env.REACT_APP_API_URL || '' // e.g. 'https://your-backend.example.com'

export async function scoreText({ moduleId, text }) {
  if (!SERVER) {
    // fallback pseudo scoring (demo)
    const length = (text || '').trim().length
    return { score: Math.min(90, Math.round((length / 200) * 100)), feedback: 'Demo pseudo-score' }
  }
  const res = await axios.post(`${SERVER}/score`, { moduleId, text })
  return res.data
}
