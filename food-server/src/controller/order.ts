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
      products: req.body.basket.foodsInBask,
      orderNo: "#" + Math.floor(Math.random() * 1000000),
      payment: { amount: req.body.basket.totalPrice },
      address: req.body.address,
    };
    console.log("ORDER___", newOrder);

    const findUser = await User.findById(req.user._id);
    if (!findUser) {
      throw new MyError(`Бүртгэлгүй хэрэглэгч байна.`, 400);
    } else {
      const order = findUser.orders.push(newOrder);
      await findUser.save();
      res.status(200).json({ message: "Захиалга амжилттай үүслээ.", order });
    }
  } catch (error) {
    next(error);
  }
};
export const updateOrder = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const findUser = await User.findById(req.user._id);
    console.log("FINDuser", findUser);

    console.log("pstatus", req.body.pStatus, "dstatus", req.body.dStatus);
    const findIndex = findUser?.orders.findIndex((item) => {
      item._id?.toString() === req.params.orderId.toString();
      console.log("Iten1", item._id?.toString());
      console.log("Iten2", req.params.orderId);
    });
    console.log("orderID req", req.params.orderId);
    console.log("first findindex", findIndex);
    if (findIndex !== undefined && findIndex !== -1) {
      const updateOrder = findUser!.orders[findIndex];
      if (updateOrder) {
        updateOrder.payment!.status = req.body.pStatus;
        updateOrder.delivery!.status = req.body.dStatus;
      }
    } else {
      throw new MyError(`index oldsongu.`, 400);
    }

    await findUser!.save();

    res.status(200).json({ message: "Захиалга амжилттай үүслээ." });
  } catch (error) {
    next(error);
  }
};
