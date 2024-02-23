import { ObjectId, Schema, model } from "mongoose";

const foodBasketSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: "User",
    required: true,
  },
  foods: [
    {
      food: {
        type: Schema.ObjectId,
        ref: "Food",
      },
      count: Number,
    },
  ],
});

const Basket = model("Basket", foodBasketSchema);

export default Basket;
