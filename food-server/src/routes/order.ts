import { Router } from "express";
import { createOrder, updateOrder } from "../controller/order";
import { auth } from "../middleware/auth";

const router = Router();

router.route("/").post(auth, createOrder);
router.route("/:orderId").put(auth, updateOrder);

export default router;
