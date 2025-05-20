import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('mongo connectedddd')
  } catch (error) {
    console.error('try again :((', error.message)
  }
}

export { connectDB }
