import User from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const register = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email y contraseña obligatorios'
      })
    }

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'Este mail ya esta registrado'
      })
    }

    const newUser = new User({ email, password })
    await newUser.save()

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    })

    res.status(201).json({
      success: true,
      data: {
        _id: newUser._id,
        email: newUser.email
      },
      token
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al registrar usuario',
      error: error.message
    })
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email y contraseña obligatorios'
      })
    }

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Credenciales inválidas'
      })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Credenciales inválidas'
      })
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    })

    res.json({
      success: true,
      data: {
        _id: user._id,
        email: user.email
      },
      token
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error en el login',
      error: error.message
    })
  }
}

export const obtenerUsers = async (req, res) => {
  try {
    const users = await User.find()
      .select('-password')
      .sort({ createdAt: -1 })
      .lean()

    if (!users.length) {
      return res.status(404).json({
        success: false,
        message: 'No se encontraron usuarios'
      })
    }

    return res.status(200).json({
      success: true,
      count: users.length,
      data: users
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error al obtener usuarios',
      error: error.message
    })
  }
}
