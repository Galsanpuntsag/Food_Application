import { Router } from "express";
import {
  createCategory,
  getCategory,
  getAllCategory,
  deleteCategory,
  updateCategory,
} from "../controller/categoryController";
import { upload } from "../utils/multer";

const router = Router();

router
  .route("/")
  .get(getAllCategory)
  .post(upload.single("image"), createCategory);
router
  .route("/:categoryId")
  .delete(deleteCategory)
  .put(updateCategory)
  .get(getCategory);

export default router;
