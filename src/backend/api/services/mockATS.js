export const mockATSAnalysis = (cvText) => {
  const hasTechKeywords =
    cvText.toLowerCase().includes('react') ||
    cvText.toLowerCase().includes('node')

  const hasManagementKeywords =
    cvText.toLowerCase().includes('gestión') ||
    cvText.toLowerCase().includes('liderazgo')

  return {
    score: hasTechKeywords ? 75 : 60,
    top3Suggestions: [
      hasTechKeywords
        ? 'Mejorar métricas en experiencia laboral'
        : 'Agregar habilidades técnicas clave',
      'Incluir más palabras clave de la industria',
      'Unificar formato de fechas (MM-YYYY)'
    ],
    missingKeywords: [
      ...(hasTechKeywords ? [] : ['React', 'Node.js']),
      ...(hasManagementKeywords ? [] : ['Gestión de equipos']),
      'SCRUM',
      'AWS'
    ]
  }
}
