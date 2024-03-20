import express, { Application, Request, Response } from "express";
import color from "colors";
import { connectDB } from "./config/db";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";

import authRoute from "./routes/userRoute";
import verifyRoute from "./routes/verifyRoute";
import errorHandler from "./middleware/errorHandler";
import categoryRoute from "./routes/categoryRoute";
import foodRoute from "./routes/foodRoute";
import uploadRoute from "./routes/uploadRoute";
import basketRoute from "./routes/basket";
import order from "./routes/order";

dotenv.config();
console.log(process.env);

const app: Application = express();
const MONGO_URI = process.env.MONGO_URI as string;
const port = process.env.PORT;

const upload = multer({ dest: "uploads/" });

connectDB(MONGO_URI);
//apiv1
app.use(cors());
app.use(express.json());
app.use("/auth", authRoute);
app.use("/verify", verifyRoute);
app.use("/categories", categoryRoute);
app.use("/foods", foodRoute);
app.post("/upload", uploadRoute);
app.use("/basket", basketRoute);
app.use("/order", order);
app.use(errorHandler);

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Food Delivery</h1>");
});

app.listen(port, () =>
  console.log(color.rainbow(`Server is Listening ${port}`))
);
