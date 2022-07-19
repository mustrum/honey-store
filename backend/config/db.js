import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log(`MongoDB connected on ${connect.connection.host}`);
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
};

export default connectDB;
