import { Router } from "express";
import {
  addBasket,
  updateBasket,
  getBasketFood,
  deleteFoodInBasket,
} from "../controller/basket";

import { auth } from "../middleware/auth";

const router = Router();

router.route("/").post(auth, addBasket);
router.route("/").put(auth, updateBasket);
router.route("/").get(auth, getBasketFood);
router.route("/:foodId").delete(auth, deleteFoodInBasket);
// router.route("/").get(auth, updateFood);

export default router;
