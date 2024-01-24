import express, { Application, Request, Response } from "express";
import color from "colors";
import mongoose from "mongoose";
import User from "./modal/user";
import { connectDB } from "./config/db";

const MONGO_URI = process.env.MONGO_URI as string;

const app: Application = express();

connectDB(MONGO_URI);

app.use("/auth");

app.listen(8008, () => console.log(color.rainbow("Server is Listening")));
