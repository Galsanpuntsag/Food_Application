import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const orderSchema = new Schema({
  orderNo: String,
  product: [],
  payment: {
    amount: Number,
    status: {
      type: String,
      enum: ["paid", "unpaid"],
      default: "unpaid",
    },
    paidDate: {
      type: Date,
      default: Date.now,
    },
    createAt: {
      type: Date,
      default: Date.now,
    },
  },
  address: {
    duureg: { type: String },
    khoroo: { type: String },
    buildingNo: { type: String },
    info: String,
  },
  delivery: {
    status: {
      type: String,
      enum: ["Pending", "Progressing", "Delivered"],
      default: "Pending",
    },
    deliveredAt: {
      type: Date,
      default: Date.now,
    },
    phoneNumber: {
      type: String,
    },
  },
});

const userSchema = new Schema(
  {
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
    role: {
      type: String,
      enum: ["Admin", "User", "Moderator"],
      default: "User",
    },
    otp: {
      type: String,
      default: "",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
    phone: String,
    orders: [orderSchema],
  },
  { timestamps: true }
);

userSchema.pre("save", async function async(next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

const User = model("User", userSchema);

export default User;
