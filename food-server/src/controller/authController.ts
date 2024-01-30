import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../modal/user";
import bcrypt from "bcrypt";

export const signup = async (req: Request, res: Response) => {
  try {
    const newUser = req.body;
    console.log("USERNEW", newUser);
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(newUser.password, salt);
    await User.create({ ...newUser, password: hashedPass });
    console.log("CONTROLLER_user");
    res.status(201).json({ message: "Шинэ хэрэглэгч амжилттай бүртгэгдлэлээ" });
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
    console.log("PASS", password);
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res
        .status(400)
        .json({ message: `${email}-тэй хэрэглэгч олдсонгүй.` });
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res
        .status(400)
        .json({ message: `И-мэйл эсвэл нууц үг буруу байна.` });
    }
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_PRIVATE_KEY as string,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.status(201).json({ message: "Хэрэглэгч амжилттай нэвтэрлээ", token });
  } catch (error) {
    console.log("ERR", error);
    res
      .status(400)
      .json({ message: "Шинэ хэрэглэгч бүртгэхэд алдаа гарлаа", error });
  }
};
