import { Router } from "express";
import { uploadFile } from "../controller/uploudController";
import { upload } from "../utils/multer";

const router = Router();

router.route("/").post(upload.single("image"), uploadFile);

export default router;

// const upload = multer({ dest: "./upload" });
//utils multerees
//uploads gedeg filed hadgalna zamiin zaaj ugnu
