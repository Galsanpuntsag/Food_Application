import mongoose from "mongoose";
import color from "colors";

export const connectDB = async (uri: string) => {
  try {
    await mongoose.connect(uri);
    console.log(color.bgGreen("DataBase is connected"));
  } catch (error) {
    console.log(color.bgRed("DataBase is failed to connect"));
  }
};
