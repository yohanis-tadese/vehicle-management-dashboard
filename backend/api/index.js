import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "../app.js";

dotenv.config();

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    isConnected = db.connections[0].readyState;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error.message);
  }
};

export default async (req, res) => {
  await connectDB();
  app(req, res);
};
