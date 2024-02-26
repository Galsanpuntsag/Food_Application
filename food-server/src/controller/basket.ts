import { NextFunction, Request, Response } from "express";
import Basket from "../modal/basket";
import User from "../modal/user";
import { IReq } from "../utils/interface";
import cloudinary from "../utils/cloudinary";

export const CreateFoodBasketed = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newFoodBasketed = { ...req.body };
    console.log("NEW BASKET", newFoodBasketed);
    if (req.file) {
      const { secure_url } = await cloudinary.uploader.upload(req.file.path);
      newFoodBasketed.image = secure_url;
    }

    await Basket.create(newFoodBasketed);
    res.status(200).json({ message: "successful Food basketed" });
  } catch (error) {
    next(error);
  }
};

export const getBasketFood = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("Ireq", req.user);
    const basket = await Basket.findOne({
      user: req.user._id,
    }).populate("foods.food");
    console.log("BASK", basket);
    res.status(200).json({ message: "successful getbasket", basket });
  } catch (error: any) {
    next("ERRR" + error.message);
  }
};

export const updateBasket = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId, count } = req.body;
    const basket = await Basket.findOne({ user: req.user._id });
    basket?.foods.push({ food: foodId, count: count });
    await basket?.save();
    res.status(200).json({ message: "successful updated basket" });
  } catch (error) {}
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
