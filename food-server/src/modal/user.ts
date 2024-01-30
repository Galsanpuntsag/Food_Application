import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Нэрээ оруулна уу"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "И-мэйл хаягаа оруулна уу"],
  },
  password: {
    type: String,
    void: Number,
    minLenght: 6,
    required: [true, " И-мэйл хаягаа оруулна уу"],
    select: false,
  },
  avatarUrl: {
    type: String,
  },
  address: {
    khoroo: { type: String },
    duureg: { type: String },
    buildingNo: { type: Number },
  },
  role: {
    type: String,
    enum: ["Admin", "User", "Moderator"],
    default: "User",
  },
  otp: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const User = model("User", userSchema);

export default User;
