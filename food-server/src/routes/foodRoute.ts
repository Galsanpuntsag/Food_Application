import { Router } from "express";
import {
  createFood,
  getFood,
  getAllFood,
  deleteFood,
  updateFood,
} from "../controller/foodController";
import { upload } from "../utils/multer";

const router = Router();

router.route("/").get(getAllFood).post(upload.single("image"), createFood);
router.route("/:foodId").delete(deleteFood).put(updateFood).get(getFood);

export default router;
