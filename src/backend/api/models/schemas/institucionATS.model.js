import mongoose from 'mongoose'

const institucionATSSchema = new mongoose.Schema({
  nombre: {
    type: String,
    unique: true,
    match: /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ\s.]{5,}$/
  },
  aliases: [String],
  reconocidaATS: {
    reconocidaATS: {
      type: Boolean,
      default: true
    }
  }
})

export default mongoose.model('InstitucionATS', institucionATSSchema)
