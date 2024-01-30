import { Router } from "express";
import { verifyEmail } from "../controller/verifyController";
import { verifyOtp } from "../controller/verifyController";
import { changePass } from "../controller/verifyController";

const router = Router();

router.route("/email").post(verifyEmail);
router.route("/otp").post(verifyOtp);
router.route("/changepassword").put(changePass);

export default router;
