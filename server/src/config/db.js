import mongoose from 'mongoose';

export default async function connectDB() {
  try {
    if (!process.env.MONGO_URI) {
      console.warn('MONGO_URI is not defined. API will fail until you add MongoDB connection string.');
      return;
    }
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
}
