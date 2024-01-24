import { Schema, model } from "mongoose";

const userSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  email: String,
  password: String,
});

const User = model("User", userSchema);

export default User;
