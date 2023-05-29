import mongoose from 'mongoose'

let isConnected = false

export const connectToDb = async () => {
  mongoose.set('strictQuery', true)
  if (isConnected) {
    console.log('mongoose already connected')
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'share_propmt',
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    isConnected = true
    console.log('MongoDB connected')
  } catch (error) {
    console.log(error)
  }
}
