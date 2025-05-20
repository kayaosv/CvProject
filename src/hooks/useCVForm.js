import { useFieldArray, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'

// 1. Esquema de validación Yup (frontend)
const cvSchema = yup.object().shape({
  nombre: yup
    .string()
    .required('El nombre es obligatorio')
    .min(3, 'Mínimo 3 caracteres'),
  experiencia: yup
    .array()
    .of(yup.string().required('La experiencia no puede estar vacía'))
    .min(1, 'Agrega al menos una experiencia'),
  habilidades: yup
    .array()
    .min(1, 'Selecciona al menos 3 habilidades')
    .required('Las habilidades son obligatorias')
})

export const useCVForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: yupResolver(cvSchema),
    defaultValues: {
      nombre: '',
      experiencia: [''],
      habilidades: []
    }
  })

  // Campos dinámicos para experiencia
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'experiencia'
  })

  // 2. Función para enviar datos al backend
  const onSubmit = async (data) => {
    try {
      // Envía los datos a tu API (que usará Mongoose)
      const response = await axios.post('http://localhost:6000/api/cv', data)

      console.log('CV guardado en MongoDB:', response.data)

      // Generar PDF aquí o redirigir a otra página
      alert('CV creado exitosamente!')
      reset()
    } catch (error) {
      console.error('Error al guardar:', error.response?.data || error.message)
      alert(error.response?.data?.message || 'Error al crear el CV')
    }
  }

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    control,
    errors,
    isSubmitting,
    fields,
    append,
    remove
  }
}
