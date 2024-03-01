import { NextFunction, Request, Response } from "express";
import { IReq } from "../utils/interface";
import User from "../modal/user";
import MyError from "../utils/myError";

export const createOrder = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const newOrder = req.body;
    const findUser = await User.findById(req.user._id);
    if (!findUser) {
      throw new MyError(`Бүртгэлгүй хэрэглэгч байна.`, 400);
    } else {
      findUser.orders.push(newOrder);
      await findUser.save();
      res.status(200).json({ message: "Захиалга амжилттай үүслээ." });
    }
  } catch (error) {
    next(error);
  }
};
