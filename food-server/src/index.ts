import express, { Application, Request, Response } from "express";
import color from "colors";
import { connectDB } from "./config/db";
import dotenv from "dotenv";

import authRoutes from "./router/userRoutes";
import sendEmail from "./router/sendEmailRoutes";

dotenv.config();
console.log(process.env);

const app: Application = express();
const MONGO_URI = process.env.MONGO_URI as string;
const port = process.env.PORT;

connectDB(MONGO_URI);

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/verify", sendEmail);

app.listen(port, () =>
  console.log(color.rainbow(`Server is Listening ${port}`))
);
