import { Request, Response } from "express";
import { sendEmail } from "../utils/sendEmail";
import User from "../modal/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const sendOtpToEmail = async (req: Request, res: Response) => {
  console.log("SEND_EMAIL");
  try {
    const { email } = req.body;
    console.log("EMMAILL", email);

    const otp = Math.round(Math.random() * 1000000)
      .toString()
      .padStart(6, "0");

    const findUser = await User.findOne({ email });
    console.log("FINDuser_Email", findUser?.email);

    if (!findUser) {
      return res.status(400).json({ message: "user not find" });
    }

    console.log("OTPP", otp);
    const salt = await bcrypt.genSalt(10);

    findUser.otp = await bcrypt.hash(otp, salt);

    await findUser.save();
    console.log("FFFFFF", findUser);
    await sendEmail({ email, otp });
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

export const verifyEmailUser = async (req: Request, res: Response) => {
  try {
    const { token } = req.query;

    const { email } = jwt.verify(
      token as string,
      process.env.JWT_PRIVATE_KEY as string
    ) as { email: string };

    const findUser = await User.findOne({ email: email });

    if (!findUser) {
      res.status(500).send("Not verified");
    } else {
      findUser.isVerified = true;
    }

    await findUser?.save();

    res.status(200).send(`<div
      style="
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 12px;
      border-radius: 10px;
      padding: 20px;
      border-color: #333333;
      "
    >
      <h1>Congratulation</h1>
      <h3 style="line-height: 24px; color: #333333; font-size: 24px">
        Your email confirmed.
      </h3>
      <h3 style="line-height: 24px; color: #333333; font-size: 24px">
        You can now login to the
        <span style="color: #18ba51"> PLATFORM </span>
      </h3>
      <img
        class="adapt-img"
        src="https://eebwpio.stripocdn.email/content/guids/CABINET_6e1f8df35a5b479a57a8e76821d0a0c5afaaff2e27127ec4d44ac9781b8d8b1f/images/57b54818e2011d482548fb54201ce6c1.gif"
        alt
        style="
          display: block;
          border: 0;
          outline: none;
          text-decoration: none;
          -ms-interpolation-mode: bicubic;
        "
        width="365"
        height="274"
      />
      <a href="http://localhost:3000/login">
        <button
          style="
            background-color: #18ba51;
            color: aliceblue;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left: 20px;
            padding-right: 20px;
            border-radius: 5px;
            border-color: #18ba51;
            font-size: 24px;
          "
        >
          Go To Login Page
        </button>
      </a>
    </div>`);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Server is internal error", error });
  }
};
