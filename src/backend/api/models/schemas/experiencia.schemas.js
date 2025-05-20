import mongoose from 'mongoose'
import { EXPERIENCIA } from '../../../constants/validation.js'

const experienciaSchema = new mongoose.Schema(
  {
    puesto: {
      type: String,
      required: [true, 'El puesto es obligatorio'],
      maxlength: [
        EXPERIENCIA.MAX_PUESTO,
        `Máximo ${EXPERIENCIA.MAX_PUESTO} caracteres`
      ],
      match: /^[\wÀ-ÿ\s\-()&]+$/
    },
    empresa: {
      type: String,
      validate: {
        validator: function (v) {
          return !/\.(com|org|net)$/i.test(v)
        },
        message: 'Use nombre legal sin dominio web'
      },
      required: [true, 'La empresa es obligatoria'],
      maxlength: [100, 'Máximo 100 caracteres']
    },
    // ubicacion: {
    //   type: String,
    //   maxlength: [80, 'Maximo 80 caracteres']
    // },
    fechaInicio: {
      type: String,
      required: true,
      match: [
        /^(0[1-9]|1[0-2])-\d{4}$/,
        'Formato MM-YYYY requerido (ej: 02-2020)'
      ]
    },
    fechaFin: String,
    descripcion: {
      type: String,
      validate: {
        validator: function (v) {
          const wordCount = v.trim().split(/\s+/).filter(Boolean).length
          return wordCount >= 25 && wordCount <= 100
        },
        message: 'Descripción debe contener entre 25-100 palabras'
      }
    },

    keywords: {
      type: [String],
      validate: {
        validator: function (v) {
          return v.length >= 3 && v.every((kw) => kw === kw.toLowerCase())
        },
        message: 'Minimo 3 keywords en minusculas'
      }
    }
  },
  { _id: false }
)

export default experienciaSchema
