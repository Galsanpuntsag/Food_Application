import { NextFunction, Request, Response } from "express";
import Category from "../modal/category";
import MyError from "../utils/myError";
import cloudinary from "../utils/cloudinary";

export const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("Body", req.body);
    console.log("File", req.file);
    const newCategory = { ...req.body };
    console.log("NEWCATE", newCategory);
    if (req.file) {
      const { secure_url } = await cloudinary.uploader.upload(req.file.path);
      newCategory.image = secure_url;
    }
    await Category.create(newCategory);
    res.status(201).json({ message: "Category succesful created." }); //created status code 201
  } catch (error) {
    next(error);
  }
};
export const getCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { categoryId } = req.params;

    const findCategory = await Category.findById(categoryId);

    if (!findCategory) {
      throw new MyError(`${categoryId}-тай категори олдсонгүй.`, 400);
    }
    // const findCategory = Category.findOne({_id: categoryId})
    res.status(200).json({ message: `${categoryId}-тай категори олдлоо` }); // status cose 200 success
  } catch (error) {
    next(error);
  }
};
export const getAllCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ message: `Бүх категори олдлоо`, categories });
  } catch (error) {
    next(error);
  }
};
export const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { categoryId } = req.params;
    const updateCategory = req.body;

    const category = await Category.findByIdAndUpdate(
      categoryId,
      updateCategory
    );

    if (!category) {
      throw new MyError(`${categoryId}-тай категори олдсонгүй.`, 400);
    }
    res
      .status(200)
      .json({ message: `${categoryId}-тай категори updated`, category });
  } catch (error) {
    next(error);
  }
};
export const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { categoryId } = req.params;
    const category = await Category.findByIdAndDelete(categoryId);
    res
      .status(200)
      .json({ message: `${categoryId}-тай категори deleted`, category });
  } catch (error) {
    next(error);
  }
};
