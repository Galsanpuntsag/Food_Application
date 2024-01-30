import { Request, Response } from "express";
import { sendEmail } from "../utils/sendEmail";
import User from "../modal/user";
import bcrypt from "bcrypt";

export const verifyEmail = async (req: Request, res: Response) => {
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
    console.log("FFFFFF", findUser);
    await sendEmail(email, otp);
    console.log("SSSEND");

    res.status(201).json({ message: "Email successful send" });
  } catch (error) {
    console.log("ERRorrr", error);
    res.status(400).json({
      message: "Email failed to send ",
      error,
    });
  }
};

export const verifyOtp = async (req: Request, res: Response) => {
  console.log("Working");
  try {
    const { email, otp } = req.body;
    console.log("EM", email);
    console.log("OTP", otp);
    const findUser = await User.findOne({ email });
    console.log("FInd", findUser);
    if (!findUser) {
      res.status(400).json({ message: "User not found" });
    }
    const validOtp = await bcrypt.compare(otp, findUser?.otp as string);
    if (!validOtp) {
      return res.status(400).json({ message: "your code is incorrect" });
    }
    console.log("valid", validOtp);
    res.status(200).json({ message: "your code validated", email, otp });
  } catch (error) {
    console.log("ERROE", error);
    res.status(400).json({ message: "Server is internal error", error });
  }
};

export const changePass = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    console.log("CHANGE_REQ", email, password);
    const findUser = await User.findOne({ email }).select("+password");
    console.log("FINDUSERaTchange", findUser);

    if (!findUser) {
      return res.status(400).json({ message: "Хэрэглэгч олдсонгүй" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(findUser.password as string, salt);

    const update = await User.updateOne({ password: hashedPass });
    findUser.save();
    console.log("sss", update);
    res.status(200).json({ message: "successfully changed password", update });
  } catch (error) {
    console.log("ERRCHANGE", error);
  }
};
