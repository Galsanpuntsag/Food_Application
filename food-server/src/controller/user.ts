import { Request, Response } from "express";
import User from "../modal/user";

export const signup = async (req: Request, res: Response) => {
  const newUser = {
    name: "admin",
    email: "admin@gmail.com",
    password: "123456",
  };
  //USer modal
  const user = await User.create(newUser);
};
