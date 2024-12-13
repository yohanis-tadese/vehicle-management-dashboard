import mongoose from "mongoose";
import app from "./app.js";

let isConnected = false;

const connectDB = async () => {
  if (!isConnected) {
    try {
      await mongoose.connect("mongodb+srv://yohanistadese05:Rgw3GwsPEDDdATQX@cluster0.7cuyu.mongodb.net/");
      isConnected = true;
    } catch (error) {
      throw error;
    }
  }
};

export default async (req, res) => {
  try {
    await connectDB();
    app(req, res);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
