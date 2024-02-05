import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../modal/user";
import bcrypt from "bcrypt";
import { sendEmail } from "../utils/sendEmail";
import MyError from "../utils/myError";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Signup");
  try {
    const newUser = req.body;
    console.log("USERNEW", newUser);
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(newUser.password, salt);
    const user = await User.create({ ...newUser, password: hashedPass });
    console.log("CONTROLLER_user");
    const verifyToken = jwt.sign(
      { email: user.email },
      process.env.JWT_PRIVATE_KEY as string,
      {
        expiresIn: "5m",
      }
    );
    sendEmail({ email: user.email as string, token: verifyToken });
    res.status(201).json({ message: "Шинэ хэрэглэгч амжилттай бүртгэгдлэлээ" });
  } catch (error) {
    next(error);
  }
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    console.log("_ID___", userId);
    const user = await User.findById(userId);
    if (!user) {
      throw new MyError(`${userId}-тай хэрэглэгч олдсонгүй`, 400);
    }
    res.status(200).json({ message: `${userId}-тай хэрэглэгч олдлоо`, user });
  } catch (error) {
    next(error);
  }
};

export const getAllUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.find();
    if (!users) {
      throw new MyError(`Бүртгүүлсэн хэрэглэгч байхгүй байна.`, 400);
    }
    res.status(200).json({ message: "Бүх хэрэглэгчийн мэдээлэл.", users });
  } catch (error) {
    next(error);
  }
};
export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    const { updateUser } = req.body;
    const user = await User.findByIdAndUpdate(userId);
    if (!user) {
      throw new MyError(`${userId}-тай хэрэглэгч олдсонгүй.`, 400);
    }
    res.status(200).json({
      message: "Хэрэглэгчийн мэдээлэл амжилттай шинэчлэгдсэн.",
      userId,
      updateUser,
    });
  } catch (error) {
    next(error);
  }
};
export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    const { deletedUser } = req.body;

    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      throw new MyError(`${userId}-тай хэрэглэгч олдсонгүй`, 400);
    }
    res.status(200).json({
      message: "Хэрэглэгчийн мэдээлэл амжилттай устгагдсан.",
      userId,
      deleteUser,
    });
  } catch (error) {
    next(error);
  }
};

export const signin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    console.log("EMAIL", email);
    console.log("PASS", password);
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      throw new Error(`${email}-тэй хэрэглэгч олдсонгүй.`);
    }

    const isValid = await bcrypt.compare(password, user.password as string);

    if (!isValid) {
      throw new MyError(`И-мэйл эсвэл нууц үг буруу байна.`, 400);
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
    next(error);
  }
};
