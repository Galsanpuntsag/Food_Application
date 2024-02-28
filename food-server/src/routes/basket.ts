import { Router } from "express";
import { AddBasket, updateBasket, getBasketFood } from "../controller/basket";

import { auth } from "../middleware/auth";

const router = Router();

router.route("/").post(auth, AddBasket);
router.route("/").put(updateBasket);
router.route("/").get(auth, getBasketFood);
// router.route("/").get(auth, updateFood);

export default router;
