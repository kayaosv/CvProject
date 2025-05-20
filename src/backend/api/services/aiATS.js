import OpenAI from 'openai'
import dotenv from 'dotenv'

dotenv.config()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export const advancedATSAnalysis = async (cvText) => {
  const prompt = `
  Como experto en sistemas ATS (Applicant Tracking Systems) y reclutamiento tecnológico, 
  analiza este CV y genera un JSON con:
  
  {
    "score": [puntaje del 1 al 100 basado en compatibilidad ATS],
    "top3Suggestions": [3 sugerencias concretas para mejorar],
    "missingKeywords": [5-10 palabras clave faltantes relevantes para el puesto]
  }

  Reglas:
  1. Considera estructura, palabras clave, formato y relevancia
  2. Usa términos en español
  3. Sé específico y técnico

  CV:
  ${cvText.substring(0, 3000)} // Limitamos a 3000 caracteres por costo
  `

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.3
  })

  return JSON.parse(response.choices[0].message.content)
}
