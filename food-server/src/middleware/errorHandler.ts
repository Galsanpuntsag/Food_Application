import { Request, Response, NextFunction } from "express";

interface IErrorProps extends Error {
  statusCode: number;
}

const errorHandler = (
  err: IErrorProps,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("ERRROR MIDLEWARE", err.stack?.red.underline);
  res.status(500).json({ message: err.message || "internal serbver error" });
};

export default errorHandler;
