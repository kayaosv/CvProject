export const experienciaATSMiddleware = (schema) => {
  schema.pre('save', function (next) {
    if (this.puesto) {
      this.puesto = this.puesto.replace(/[^a-zA-ZÀ-ÿ\s]/g, '')
    }
    next()
  })
}
