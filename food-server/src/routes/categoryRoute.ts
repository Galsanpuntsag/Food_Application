import { Router } from "express";
import {
  createCategory,
  getCategory,
  getAllCategory,
  deleteCategory,
  updateCategory,
} from "../controller/categoryController";
import { get } from "http";

const router = Router();

router.route("/").get(getAllCategory).post(createCategory);
router
  .route("/:categoryId")
  .delete(deleteCategory)
  .put(updateCategory)
  .get(getCategory);

export default router;
