import { NextFunction, Request, Response } from "express";
import Basket from "../modal/basket";
import User from "../modal/user";
import { IReq } from "../utils/interface";
import cloudinary from "../utils/cloudinary";
import MyError from "../utils/myError";

export const AddBasket = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const findBasket = await Basket.findOne({ user: req.user._id });
    if (!findBasket) {
      const basket = await (
        await Basket.create({
          user: req.user._id,
          foods: { ...req.body.foods },
          totalPrice: req.body.totalPrice,
        })
      ).populate("foods.food");
      res.status(200).json({
        message: "successful food added at basket first time",
        basket,
      });
    } else {
      const findIndex = findBasket.foods.findIndex(
        (el) => el?.food?.toString() === req.body.foods.food
      );

      if (findIndex !== -1) {
        findBasket.foods[findIndex].quantity = Number(req.body.foods.quantity);
        findBasket.totalPrice = Number(req.body.totalPrice);
      } else {
        findBasket.foods.push(req.body.foods);
        findBasket.totalPrice = Number(req.body.totalPrice);
      }

      const savedBasket = await (
        await findBasket.save()
      ).populate("foods.food");
      res.status(200).json({
        message: "successful food added at basket second time",
        basket: { foods: savedBasket.foods, totalPrice: findBasket.totalPrice },
      });
    }
  } catch (error: any) {
    next(error);
  }
};

export const updateBasket = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId, count, totalPrice } = req.body;
    console.log("DD", foodId, count, totalPrice);
    const findBasket = await Basket.findOne({ user: req.user._id });
    console.log("Find", findBasket);
    if (!findBasket) {
      throw new MyError(`User doesn't have a basket`, 400);
    } else {
      console.log("ID2", foodId);
      const findIndex = findBasket.foods.findIndex(
        (el) => el?.food?.toString() === foodId.toString()
      );
      console.log("FoodType", typeof foodId);

      console.log("INNIN", findIndex);
      if (findIndex === -1) {
        // Food not found in basket
        throw new MyError(`Food not found in basket`, 400);
      } else {
        // Update food quantity and total price
        findBasket.foods[findIndex].quantity = count;
        findBasket.totalPrice = totalPrice;
        await findBasket.updateOne(
          { user: req.user._id },
          { $set: { foods: findBasket.foods, totalPrice: totalPrice } }
        );
        console.log("updat", findBasket);
        const updateFood = await findBasket.save();
        res
          .status(200)
          .json({ message: "Successfully updated basket", updateFood });
      }
    }
  } catch (error) {
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
    const basket = await Basket.findOne({
      user: req.user._id,
    }).populate("foods.food");
    if (!basket) {
      throw new MyError("Сагсны мэдээлэл олдсонгүй", 400);
    }

    res.status(200).json({
      message: "Хоолны мэдээлэл",
      basket: { foods: basket.foods, totalPrice: basket.totalPrice },
    });
  } catch (error: any) {
    next("ERRR" + error.message);
  }
};

export const deleteFoodInBasket = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId } = req.params;
    console.log("food.ID ====>", foodId);
    const basket = await Basket.findOne({ user: req.user._id }).populate(
      "foods.food"
    );

    const findIndex = basket?.foods.findIndex((el) => el.food?.equals(foodId));
    console.log("FINDINDEX", findIndex);

    if (findIndex !== undefined) {
      basket?.foods.splice(findIndex, 1);
    }
    await basket?.save();
    // console.log("LAST basket", basket);
    res
      .status(200)
      .json({ message: `Deleted this ${foodId}-id food on basket`, basket });
  } catch (error) {
    next(error);
  }
};
