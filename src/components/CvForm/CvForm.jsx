import React from 'react'
import { useCVForm } from '../../hooks/useCVForm'

const CvForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    fields: experiencias,
    append,
    remove
  } = useCVForm()

  const habilidadesDisponibles = [
    // **Habilidades Blandas** (Relevantes para cualquier sector)
    'Trabajo en equipo',
    'Comunicación efectiva',
    'Resolución de conflictos',
    'Adaptabilidad',
    'Liderazgo',
    'Empatía',
    'Pensamiento crítico',
    'Gestión del tiempo',
    'Negociación',
    'Creatividad',
    'Organización',
    'Toma de decisiones',
    'Atención al detalle',
    'Inteligencia emocional',
    'Servicio al cliente',

    // **Habilidades Técnicas Genéricas** (No solo tech)
    'Microsoft Office (Excel, Word, PowerPoint)',
    'Google Workspace (Docs, Sheets, Drive)',
    'Gestión de proyectos (Trello, Asana)',
    'Redes sociales (Facebook, Instagram, LinkedIn)',
    'Diseño gráfico (Canva, Adobe Photoshop)',
    'Edición de video (Premiere Pro, Final Cut)',
    'Marketing digital (SEO, Email Marketing)',
    'Contabilidad básica (QuickBooks, Excel)',
    'Manejo de maquinaria pesada',
    'Soldadura (MIG/TIG)',
    'Carpintería',
    'Costura avanzada',
    'Laboratorio clínico',
    'Fotografía profesional',
    'Escritura técnica',

    // **Sector Salud/Educación**
    'Atención al paciente',
    'Primeros auxilios',
    'Gestión de historiales médicos',
    'Docencia',
    'Planificación de lecciones',
    'Educación infantil',
    'Terapia física',
    'Enfermería clínica',

    // **Sector Administrativo/Logística**
    'Gestión de inventarios',
    'Atención telefónica',
    'Archivo documental',
    'Logística de transporte',
    'Compras y proveedores',
    'Import/Export',
    'Cadena de suministro',

    // **Certificaciones Comunes** (Relevantes para ATS)
    'Certificación PMP',
    'Scrum Master',
    'Primeros auxilios (Certificado)',
    'Manipulación de alimentos',
    'Seguridad industrial (OSHA)',
    'ISO 9001',
    'Carnet de conducir (Tipo B, C)',
    'Forklift Operator License',

    // **Habilidades Digitales** (No-code/low-code)
    'WordPress',
    'Shopify',
    'Wix',
    'Mailchimp',
    'CRM (Salesforce, HubSpot)',

    // **Artes/Oficios**
    'Dibujo técnico',
    'Pintura al óleo',
    'Escultura',
    'Diseño de joyería',
    'Jardinería profesional',
    'Cocina internacional',

    // **Otros**
    'Voluntariado comunitario',
    'Gestión de eventos',
    'Traducción técnica'
  ]

  return (
    <div>
      <h1 className='text-3xl font-bold mb-6 text-center text-gray-800'>
        Generador de CVs
      </h1>

      <form onSubmit={handleSubmit} className='space-y-6'>
        {/* Campo: Nombre */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Nombre completo
          </label>
          <input
            type='text'
            {...register('nombre')}
            placeholder='Ej: María González'
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 ${
              errors.nombre
                ? 'border-red-500 focus:ring-red-200'
                : 'border-gray-300 focus:ring-blue-200'
            }`}
          />
          {errors.nombre && (
            <p className='mt-1 text-sm text-red-600'>{errors.nombre.message}</p>
          )}
        </div>

        {/* Campos dinámicos: Experiencia laboral */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Experiencia laboral
          </label>
          {experiencias.map((field, index) => (
            <div key={field.id} className='flex gap-2 mb-2'>
              <input
                {...register(`experiencia.${index}`)}
                placeholder={`Experiencia ${index + 1}`}
                className={`flex-grow px-4 py-2 border rounded-lg focus:ring-2 ${
                  errors.experiencia?.[index]
                    ? 'border-red-500 focus:ring-red-200'
                    : 'border-gray-300 focus:ring-blue-200'
                }`}
              />
              {index > 0 && (
                <button
                  type='button'
                  onClick={() => remove(index)}
                  className='px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors'
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          <button
            type='button'
            onClick={() => append('')}
            className='mt-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors'
          >
            + Añadir experiencia
          </button>
          {errors.experiencia && (
            <p className='mt-1 text-sm text-red-600'>
              {errors.experiencia.message}
            </p>
          )}
        </div>

        {/* Campo: Habilidades (select múltiple) */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Habilidades (selecciona al menos 3)
          </label>
          <select
            multiple
            {...register('habilidades')}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 ${
              errors.habilidades
                ? 'border-red-500 focus:ring-red-200'
                : 'border-gray-300 focus:ring-blue-200'
            } h-32`}
          >
            {habilidadesDisponibles.map((habilidad) => (
              <option
                key={habilidad}
                value={habilidad}
                className='p-2 hover:bg-blue-50'
              >
                {habilidad}
              </option>
            ))}
          </select>
          {errors.habilidades && (
            <p className='mt-1 text-sm text-red-600'>
              {errors.habilidades.message}
            </p>
          )}
        </div>

        {/* Botón de envío */}
        <button
          type='submit'
          disabled={isSubmitting}
          className='w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300'
        >
          {isSubmitting ? 'Guardando...' : 'Generar CV'}
        </button>
      </form>

      {/* Mensaje de ayuda */}
      <p className='mt-4 text-sm text-gray-500 text-center'>
        ¿Necesitas ayuda? Usa el formato sugerido en cada campo.
      </p>
    </div>
  )
}

export default CvForm
