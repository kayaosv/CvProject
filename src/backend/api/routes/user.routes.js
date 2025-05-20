import express from 'express'
import { register, login, obtenerUsers } from '../controllers/userController.js'

const UserRouter = express.Router()

UserRouter.post('/register', register)

UserRouter.post('/login', login)

UserRouter.get('/', obtenerUsers)

export default UserRouter
