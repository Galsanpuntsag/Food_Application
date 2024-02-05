import { Router } from "express";
import {
  createFood,
  getFood,
  getAllFood,
  deleteFood,
  updateFood,
} from "../controller/foodController";

const router = Router();

router.route("/").get(getAllFood).post(createFood);
router.route("/:foodId").delete(deleteFood).put(updateFood).get(getFood);

export default router;
