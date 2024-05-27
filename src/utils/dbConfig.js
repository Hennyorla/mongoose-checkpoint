const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// connect the database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed");
  }
};

module.exports = connectDB;
