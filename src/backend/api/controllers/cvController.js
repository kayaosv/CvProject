import CV from '../models/CV.js'
import { advancedATSAnalysis } from '../services/aiATS.js'
import { generateCVText } from '../services/cvTextGenerator.js'
import { mockATSAnalysis } from '../services/mockATS.js'

export const crearCV = async (req, res) => {
  try {
    if (!req.body.usuario || !req.body.informacionBasica) {
      return res.status(400).json({
        success: false,
        message: 'Faltan campos obligatorios: usuario o informacionBasica'
      })
    }

    const newCV = new CV({
      usuario: req.body.usuario,
      informacionBasica: {
        nombre: req.body.informacionBasica.nombre,
        apellido: req.body.informacionBasica.apellido,
        email: req.body.informacionBasica.email,
        telefono: req.body.informacionBasica.telefono || null
      },
      experiencia: {
        puesto: req.body.experiencia.puesto,
        empresa: req.body.experiencia.empresa,
        descripcion: req.body.experiencia.descripcion,
        fechaInicio: req.body.experiencia.fechaInicio,
        fechaFin: req.body.experiencia.fechaFin
      },
      // experiencia: req.body.experiencia || [],
      educacion: req.body.educacion || [],
      habilidades: req.body.habilidades || []
    })
    const CVSaved = await newCV.save()

    return res.status(201).json({
      success: true,
      data: CVSaved,
      message: 'CV creado exitosamente'
    })
  } catch (error) {
    return res.status(error.name === 'ValidationError' ? 422 : 500).json({
      success: false,
      message: error.message,
      errorType: error.name
    })
  }
}

export const obtenerCVs = async (req, res) => {
  try {
    const cvs = await CV.find()
      .populate('usuario', 'email createdAt')
      .sort({ createdAt: -1 })
      .lean()

    if (!cvs.length) {
      return res.status(404).json({
        success: false,
        message: 'No se encontraron CVs'
      })
    }

    res.status(200).json({
      success: true,
      count: cvs.length,
      data: cvs
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener CVs',
      error: error.message
    })
  }
}

export const deleteCV = async (req, res) => {
  try {
    const { id } = req.params
    const CVDeleted = await CV.findByIdAndDelete(id)
    return res.status(200).json(CVDeleted)
  } catch (error) {
    return res.status(400).json('ERROR DELETE_CV CONTROLLER', error)
  }
}

export const actualizarCV = async (req, res) => {
  try {
    const { id } = req.params

    const allowedUpdates = [
      'informacionBasica',
      'experiencia',
      'educacion',
      'habilidades'
    ]
    const updates = Object.keys(req.body)

    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    )
    if (!isValidOperation) {
      return res.status(400).json({
        success: false,
        message: 'Campos no permitidos para actualización'
      })
    }

    const cvActualizado = await CV.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    })

    if (!cvActualizado) {
      return res.status(404).json({
        success: false,
        message: 'CV no encontrado'
      })
    }

    res.status(200).json({
      success: true,
      data: cvActualizado,
      message: 'CV actualizado'
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error al actualizar CV',
      error: error.message
    })
  }
}

export const analyzeCV = async (req, res) => {
  try {
    const cv = await CV.findById(req.params.id).lean()
    const cvText = generateCVText(cv)

    // const aiAnalysis = await advancedATSAnalysis(cvText)

    const analysisTest = mockATSAnalysis(cvText)

    cv.atsAnalysis = {
      ...analysisTest,
      lastAnalyzed: new Date()
    }

    await cv.save()

    // const updatedCV = await CV.findByIdAndUpdate(
    //   req.params.id,
    //   {
    //     atsAnalysis: {
    //       score: aiAnalysis.score,
    //       suggestions: aiAnalysis.top3Suggestions,
    //       missingKeywords: aiAnalysis.missingKeywords,
    //       lastAnalyzed: new Date()
    //     }
    //   },
    //   { new: true }
    // )

    res.json({
      success: true,
      analysisTest: cv.atsAnalysis
      // analysis: updatedCV.atsAnalysis,
      // cvPreview: cvText // DEBUG
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error en analisis ATS',
      error: error.message
    })
  }
}
