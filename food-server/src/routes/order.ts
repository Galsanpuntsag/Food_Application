import { Router } from "express";
import { createOrder } from "../controller/order";
import { auth } from "../middleware/auth";

const router = Router();

router.route("/").post(auth, createOrder);

export default router;
