import express, { Application, Request, Response } from "express";
import color from "colors";
import { connectDB } from "./config/db";
import dotenv from "dotenv";
import cors from "cors";

import authRoute from "./routes/userRoute";
import verifyRoute from "./routes/verifyRoute";

dotenv.config();
console.log(process.env);

const app: Application = express();
const MONGO_URI = process.env.MONGO_URI as string;
const port = process.env.PORT;

connectDB(MONGO_URI);

app.use(cors());
app.use(express.json());
app.use("/auth", authRoute);
app.use("/verify", verifyRoute);

app.listen(port, () =>
  console.log(color.rainbow(`Server is Listening ${port}`))
);
