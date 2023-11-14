import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
dotenv.config();

mongoose.connect(process.env.MONGODB).then(() => {
  console.log("db connected");
});

const app = express();

app.listen(3000, () => {
  console.log("server is connected...");
});

app.use('/api/user', userRouter);
