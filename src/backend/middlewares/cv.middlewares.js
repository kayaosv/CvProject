export const cvNormalization = (schema) => {
  schema.pre('save', function (next) {
    if (this.informacionBasica.nombre) {
      this.informacionBasica.nombre = this.informacionBasica.nombre
        .trim()
        .replace(/\s+/g, ' ')
    }

    if (this.habilidades) {
      this.habilidades = this.habilidades.map((h) => h.toLowerCase().trim())
    }
    next()
  })
}
