import { NextFunction, Request, Response } from "express";
import Basket from "../modal/basket";
import User from "../modal/user";
import { IReq } from "../utils/interface";
import cloudinary from "../utils/cloudinary";

export const AddBasket = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  console.log("REQ11 :", req.body.foods.quantity);
  console.log("REQ22 :", req.body.foods.food);
  console.log("REQUSER", req.user);
  try {
    const findBasket = await Basket.findOne({ user: req.user._id });
    console.log("REQUSER", req.user);
    if (!findBasket) {
      const basket = await Basket.create({
        user: req.user._id,
        foods: { ...req.body.foods },
        totalPrice: req.body.totalPrice,
      });
      res
        .status(200)
        .json({ message: "successful food added at basket first time" });
    } else {
      console.log("findBAsket", findBasket);
      const findIndex = findBasket.foods.findIndex(
        (el) => el?.food?.toString() === req.body.foods.food
      );
      console.log("FindIndex___:", findIndex);
      console.log("Foods", findBasket.foods);

      if (findIndex !== -1) {
        findBasket.foods[findIndex].quantity = Number(req.body.foods.quantity);
        console.log("Qauannnr", req.body.foods.quantity),
          (findBasket.totalPrice = Number(req.body.totalPrice));
      } else {
        findBasket.foods.push(req.body.foods);
      }

      console.log("ChangeFood", findBasket.foods);

      await findBasket.save();
      res
        .status(200)
        .json({ message: "successful food added at basket second time" });
    }
  } catch (error: any) {
    next(error);
  }
};

//getBasket

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

// sdfghjkl____

// export const CreateFoodBasketed = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const newFoodBasketed = { ...req.body };
//     console.log("NEW BASKET", newFoodBasketed);
//     if (req.file) {
//       const { secure_url } = await cloudinary.uploader.upload(req.file.path);
//       newFoodBasketed.image = secure_url;
//     }

//     await Basket.create(newFoodBasketed);
//     res.status(200).json({ message: "successful Food basketed" });
//   } catch (error) {
//     next(error);
//   }
// };
