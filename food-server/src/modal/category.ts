import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    require: [true, "Катего"],
    unique: true,
    maxlength: [50, "ff"],
  },
  description: {
    type: String,
    require: [true, "disudhaujajsadf"],
  },
  image: {
    type: String,
    default: "no-category-photo",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Category = model("Category", categorySchema);

export default Category;
