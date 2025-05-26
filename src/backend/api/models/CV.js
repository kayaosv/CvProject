import mongoose from 'mongoose'
import experienciaSchemas from './schemas/experiencia.schemas.js'
import educacionSchema from './schemas/educacion.schema.js'
import { cvNormalization } from '../../middlewares/cv.middlewares.js'

const cvSchema = new mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'El nombre es obligatorio'],
      minlength: [3, 'Minimo 3 caracteres']
    },
    informacionBasica: {
      nombre: {
        type: String,
        required: true,
        trim: true,
        maxlength: 40
      },
      email: {
        type: String,
        required: true,
        match: /^\S+@\S+\.\S+$/,
        lowercase: true
      }
    },
    experiencia: [experienciaSchemas],
    educacion: [educacionSchema],

    habilidades: {
      type: [String],
      required: [true, 'Seleccione al menos 3 habilidades'],
      validate: {
        validator: (v) => v.length >= 5,
        message: 'Minimo 5 habilidades'
      }
    },

    atsAnalysis: {
      score: { type: Number, default: 0 },
      suggestions: [String],
      keywordsMatch: [String],
      lastAnalyzed: Date
    }
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)
cvNormalization(cvSchema)

export default mongoose.model('CV', cvSchema)
