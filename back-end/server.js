import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

// Database connection function
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database successfully!");
  } catch (err) {
    console.error("Error connecting to database:", err.message);
    process.exit(1); // Exit the application if the database connection fails
  }
};

// Initialize the database connection
dbConnection();

// Start the server
app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
