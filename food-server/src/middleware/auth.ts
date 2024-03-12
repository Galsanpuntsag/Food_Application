import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import MyError from "../utils/myError";
import User from "../modal/user";
import { IReq } from "../utils/interface";

export const auth = async (req: IReq, res: Response, next: NextFunction) => {
  try {
    if (!req.headers.authorization) {
      throw new MyError(
        "Token байхгүй байна. Та token авахын тулд нэвтэрнэ үү",
        400
      );
    }
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      throw new MyError("Энэ үйлдлийг хийхийн тулд нэвтэрх ёстой", 400);
    }
    const { id } = jwt.verify(token!, process.env.JWT_PRIVATE_KEY!) as {
      id: string;
    };

    const findUser = await User.findById(id);
    req.user = findUser;
    next();
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};
