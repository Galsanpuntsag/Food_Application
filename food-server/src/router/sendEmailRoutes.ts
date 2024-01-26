import { Router } from "express";
import { sendemail } from "../controller/sendemailController";

const router = Router();

router.route("/sendemail").post(sendemail);

export default router;
