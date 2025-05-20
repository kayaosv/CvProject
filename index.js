import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connectDB } from './src/backend/api/config/db.js'
import CVrouter from './src/backend/api/routes/cv.js'
import UserRouter from './src/backend/api/routes/user.routes.js'

const app = express()

app.use(cors())
app.use(express.json())
connectDB()

app.use('/users', UserRouter)
app.use('/api/cv', CVrouter)

app.listen(6000, () => {
  console.log('Server is running on http://localhost:6000')
})

app.use('*', (req, res) => {
  return res.status(404).json('Route not found :(')
})
