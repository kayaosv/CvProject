import mongoose from 'mongoose'
import { EDUCACION } from '../../../constants/validation.js'

const educacionSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      enum: {
        values: EDUCACION.TITULOS_VALIDOS,
        message: 'Título no reconocido por ATS'
      },
      required: [true, 'El título es obligatorio']
    },
    institucion: {
      type: String,
      validate: {
        validator: async function (v) {
          return /^[A-Z][a-zA-Z\s.]{5,}$/.test(v)
        },
        message:
          'Formato institucional inválido (use nombre oficial sin abreviaturas)'
      },
      maxlength: 100,
      required: true
    },
    fechaFin: {
      type: String,
      match: [/^\d{4}$/, 'Solo año de graduación (YYYY)']
    }
  },
  { _id: false }
)

export default educacionSchema
