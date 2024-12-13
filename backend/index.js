import mongoose from "mongoose";
import app from "./app.js";


const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://yohanistadese05:Rgw3GwsPEDDdATQX@cluster0.7cuyu.mongodb.net/");
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error.message);
    process.exit(1);
  }
};

app.listen(5000, async () => {
  await connectDB();
  console.log(`Server is running on port 5000}`);
});
