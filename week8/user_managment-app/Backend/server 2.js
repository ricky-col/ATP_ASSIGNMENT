import express from "express"
import { connect } from "mongoose"
import { userApp } from "./Api/UserApi.js"
import { config } from 'dotenv'
import cookieParser from "cookie-parser"
import cors from "cors"

config()

const app = express()
const port = process.env.PORT


app.use(cors({"origin":"http://localhost:5173"}))
// use body-parser middleware
app.use(express.json())
// use cookie-parser middleware
app.use(cookieParser())

const connectDb = async () => {
  try {
    await connect(process.env.DB_URL);
    console.log("Connected to MongoDB")
    app.listen(port, () => console.log(`server running on port ${port}.....`))
  }
  catch (err) {
    console.log("Error connecting to MongoDB", err)
  }
}

connectDb();

//calling user api
app.use("/user-api", userApp);
//error handling middleware
app.use((err, req, res, next) => {
  // Mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    });
  }
  // Invalid ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  // Duplicate key
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
    });
  }
  res.status(500).json({
    message: "Internal Server Error",
  });
});