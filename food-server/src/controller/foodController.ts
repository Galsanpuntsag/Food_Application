import { NextFunction, Request, Response } from "express";
import Food from "../modal/food";
import MyError from "../utils/myError";
import cloudinary from "../utils/cloudinary";

export const createFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("FoodDtaa", req.body);
    const newFood = req.body;
    if (req.file) {
      const { secure_url } = await cloudinary.uploader.upload(req.file.path);
      newFood.image = secure_url;
    }
    await Food.create(newFood);
    res.status(201).json({ message: "Food succesfully created." }); //created status code 201
  } catch (error) {
    next(error);
  }
};
export const getFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId } = req.params;

    const findFood = await Food.findById(foodId);

    if (!findFood) {
      throw new MyError(`${foodId}-тай food олдсонгүй.`, 400);
    }
    // const findCategory = Category.findOne({_id: categoryId})
    res.status(200).json({ message: `${foodId}-тай food олдлоо` }); // status cose 200 success
  } catch (error) {
    next(error);
  }
};
export const getAllFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const foods = await Food.find().populate("category", "_id, name");
    res.status(200).json({ message: `Бүх foods олдлоо`, foods });
  } catch (error) {
    next(error);
  }
};
export const updateFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId } = req.params;
    const updateFood = req.body;

    const food = await Food.findByIdAndUpdate(foodId, updateFood);

    if (!food) {
      throw new MyError(`${foodId}-тай food олдсонгүй.`, 400);
    }
    res.status(200).json({ message: `${foodId}-тай категори updated`, food });
  } catch (error) {
    next(error);
  }
};
export const deleteFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId } = req.params;
    const food = await Food.findByIdAndDelete(foodId);
    res.status(200).json({ message: `${foodId}-тай категори deleted`, food });
  } catch (error) {
    next(error);
  }
};
