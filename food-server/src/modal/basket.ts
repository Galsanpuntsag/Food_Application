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
        unique: true,
        price: Number,
      },
      quantity: {
        type: Number,
      },
    },
  ],
  totalPrice: Number,
});

const Basket = model("Basket", foodBasketSchema);

export default Basket;
