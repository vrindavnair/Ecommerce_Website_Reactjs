

import express  from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from 'dotenv'
import  Color  from "colors";
import cors from 'cors';
import authRouter from './routes/authRoute.js'
import morgan from "morgan"




dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(morgan("dev"))


app.get("/",(req,res)=>{
  res.send("hello")
})
app.use("/api/v1/auth",authRouter)


// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connection successful"))
  .catch((err) => {
    console.log(err);
   
  });

// Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`.bgBlack.red);
});
