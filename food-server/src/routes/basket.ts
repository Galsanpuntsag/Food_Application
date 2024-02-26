import { Router } from "express";
import {
  CreateFoodBasketed,
  getBasketFood,
  updateBasket,
} from "../controller/basket";

import { auth } from "../middleware/auth";

const router = Router();

router.route("/").post(CreateFoodBasketed);
router.route("/").get(auth, getBasketFood);
router.route("/").put(updateBasket);
// router.route("/").get(auth, updateFood);

export default router;
