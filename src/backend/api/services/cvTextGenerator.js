export const generateCVText = (cv) => {
  const basicInfo = `
  **Nombre**: ${cv.informacionBasica.nombre}
  **Email**: ${cv.informacionBasica.email}
  **Telefono**: ${cv.informacionBasica.telefono || 'No especificado'}
  `

  const experience = cv.experiencia
    .map(
      (exp) => `
    - ${exp.puesto} en ${exp.empresa || 'Empresa no especificada'}
    `
    )
    .join('\n')

  return `${basicInfo}\n**Experiencia**:\n${experience}`

  // const experienciaText = cv.experiencia
  //   .map(
  //     (exp) =>
  //       `Puesto: ${exp.puesto}\nEmpresa: ${exp.empresa}\nDescripción: ${
  //         exp.descripcion || 'Sin descripción'
  //       }\n`
  //   )
  //   .join('\n')

  // const educacionText = cv.educacion
  //   .map((edu) => `Titulo: ${edu.titulo}\nInstitucion: ${edu.institucion}\n`)
  //   .join('\n')

  // return `
  // **Información Básica**
  // Nombre: ${cv.informacionBasica.nombre}
  // Email: ${cv.informacionBasica.email}
  // Teléfono: ${cv.informacionBasica.telefono || 'No proporcionado'}

  // **Experiencia Profesional**
  // ${experienciaText}

  // **Educación**
  // ${educacionText}

  // **Habiliades Técnicas**
  // ${cv.habiliades.join(', ')}
  // `
}
