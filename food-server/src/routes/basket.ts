import { Router } from "express";
import { CreateFoodBasketed } from "../controller/basket";

const router = Router();

router.route("/").post(CreateFoodBasketed);

export default router;
