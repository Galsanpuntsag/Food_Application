import { NextFunction, Request, Response } from "express";
import Basket from "../modal/basket";
import User from "../modal/user";

export const CreateFoodBasketed = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newFoodBasketed = { ...req.body };
    // {
    //     user: "fsalfjdlsdfhjlskdjf",
    //     foods: [{food: "fsjdjfsdflslfjf",count :3}]
    // }
    await Basket.create(newFoodBasketed);
    res.status(200).json({ message: "successful Food basketed" });
  } catch (error) {
    next(error);
  }
};

export const getAllFoodBasketed = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    const findUser = await User.findById(userId);

    res.status(200).json({ message: "successful Food basketed" });
  } catch (error) {
    next(error);
  }
};
