import { Request, Response, NextFunction } from "express";
import cloudinary from "../utils/cloudinary";

export const uploadFile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("FILE", req.file);
    //multer front endess ywuulsan fileiig barij awaad bidnii zaaj ugsun fileruu hiigeed bidnii req file ruu medeeluudiig ywuuldag dotor hiij ugdug

    const result = await cloudinary.uploader.upload(req.file?.path!);
    res.send("ok===>" + result.secure_url);
  } catch (error) {
    next(error);
  }
};
