import { Router } from "express";
import { uploadFile } from "../controller/uploudController";
import multer from "multer";

const router = Router();

const upload = multer({ dest: "./upload" });
//uploads gedeg filed hadgalna zamiin zaaj ugnu

router.route("/").post(upload.single("image"), uploadFile);

export default router;
