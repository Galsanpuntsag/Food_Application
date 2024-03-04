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
    const newOrder = {
      foods: req.body.basket.foods,
      orderNo: Math.floor(Math.random() * 1000000),
      payment: { paymentAmount: req.body.basket.totalPrice },
      address: req.body.address,
      phoneNumber: req.body.address.phoneNumber,
    };
    console.log("ORDER", newOrder);

    // const findUser = await User.findById(req.user._id);
    // if (!findUser) {
    //   throw new MyError(`Бүртгэлгүй хэрэглэгч байна.`, 400);
    // } else {
    //   const order = findUser.orders.push(newOrder);
    //   const
    //   await findUser.save();
    //   res.status(200).json({ message: "Захиалга амжилттай үүслээ.", order });
    // }
  } catch (error) {
    next(error);
  }
};
