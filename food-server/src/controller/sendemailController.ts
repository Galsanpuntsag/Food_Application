import { Request, Response } from "express";
import { sendEmail } from "../utils/sendEmail";
import User from "../modal/user";

export const sendemail = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    console.log("EMM", email);
    await sendEmail(email, "Verify account for good platform");
    res.status(201).json({ message: "Email successful send" });
  } catch (error) {
    console.log("ERR", error);
    res.status(400).json({
      message: "send failed",
      error,
    });
  }
};
