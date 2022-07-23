import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

import authRoute from "./routes/auth/auth.js";
import ticketRoute from "./routes/ticket/tickets.js";

// router system here

app.use("/api/auth", authRoute);
app.use("/api/ticket", ticketRoute);

dotenv.config();
// mongodb connect
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => {
    console.log("Connect to Mangodb Successfully");
  }
);

app.listen(8800, () => {
  console.log("Back end server 8800 is running!");
});
