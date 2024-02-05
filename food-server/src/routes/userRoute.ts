import { Router } from "express";
import {
  createUser,
  getAllUser,
  getUser,
  deleteUser,
  updateUser,
  signin,
} from "../controller/authController";

const router = Router();

router.route("/signup").post(createUser).get(getAllUser);
router.route("/:userId").delete(deleteUser).put(updateUser).get(getUser);

router.route("/signin").post(signin);

export default router;
