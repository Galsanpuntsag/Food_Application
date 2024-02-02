import { Router } from "express";
import { sendEmailToUser } from "../controller/verifyController";
import { verifyOtp } from "../controller/verifyController";
import { changePass } from "../controller/verifyController";
import { verifyUserEmail } from "../controller/verifyController";

const router = Router();

router.route("/sendemail").post(sendEmailToUser);
router.route("/otp").post(verifyOtp);
router.route("/changepassword").put(changePass);
router.route("/useremail").post(verifyUserEmail);

export default router;
