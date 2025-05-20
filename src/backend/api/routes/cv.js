import express from 'express'
import { crearCV, deleteCV, obtenerCVs } from '../controllers/cvController.js'

const CVrouter = express.Router()

CVrouter.post('/', crearCV)
CVrouter.get('/', obtenerCVs)
CVrouter.delete('/:id', deleteCV)

export default CVrouter
