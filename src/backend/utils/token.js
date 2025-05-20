import jwt from 'jsonwebtoken'

export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWTF_SECRET)
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      throw new Error('Token expirado')
    }
    if (error.name === 'JsonWebTokenError') {
      throw new Error('Token inválido')
    }
    throw error
  }
}
