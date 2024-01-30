import { Router } from "express";
import { verifyEmail } from "../controller/verifyController";
import { verifyOtp } from "../controller/verifyController";

const router = Router();

router.route("/email").post(verifyEmail);
router.route("/otp").post(verifyOtp);

export default router;
