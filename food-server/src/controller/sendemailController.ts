import { Request, Response } from "express";
import { sendEmail } from "../utils/sendEmail";
import User from "../modal/user";
import bcrypt from "bcrypt";

export const sendemail = async (req: Request, res: Response) => {
  console.log("SEND_EMAIL");
  try {
    const { email } = req.body;
    console.log("EMMAILL", email);

    const otp = Math.round(Math.random() * 1000000)
      .toString()
      .padStart(6, "0");

    const findUser = await User.findOne({ email });
    console.log("FINDuser_Email", findUser);

    if (!findUser) {
      return res.status(400).json({ message: "user not find" });
    }

    console.log("OTPP", otp);
    const salt = await bcrypt.genSalt(10);

    findUser.otp = await bcrypt.hash(otp, salt);
    console.log("BCRYPTSALT", findUser.otp);

    await findUser.save();
    await sendEmail(email, otp);

    res.status(201).json({ message: "Email successful send" });
  } catch (error) {
    console.log("ERRorrr", error);
    res.status(400).json({
      message: "Email failed to send ",
      error,
    });
  }
};
