import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../modal/user";

export const signup = async (req: Request, res: Response) => {
  try {
    const newUser = req.body;
    console.log("USERNEW", newUser);
    const user = await User.create(newUser);
    res
      .status(201)
      .json({ message: "Шинэ хэрэглэгч амжилттай бүртгэгдлэлээ", user });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Шинэ хэрэглэгч бүртгэхэд алдаа гарлаа", error });
  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    console.log("EMAIL", email);
    const user = await User.findOne({ email });

    console.log("USER", user);
    res.status(201).json({ message: "Амжилттай нэвтэрлээ" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Шинэ хэрэглэгч бүртгэхэд алдаа гарлаа", error });
  }
};
//USer modal
