"use client";
import axios from "axios";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { UserContext } from "../userProvider";
import { FaBullseye } from "react-icons/fa";
import { userAgent } from "next/server";
import { toast } from "react-toastify";

interface IBasket {
  foodsInBask: [
    foods: {
      _id: string;
      name: string;
      description: string;
      price: string;
      discountPrice: string;
    }
  ];
}

interface IBasketContext {
  loading: boolean;
  foodsInBask: any;
  setFoodsInBask: Function;
  updateByFoodId: any;
  deleteFoodInBask: any;
  addBasket: (food: any, count: number) => Promise<void>;
  // deleteBasket: (food: any) => Promise<void>;
}

export const BasketContext = createContext<IBasketContext>(
  {} as IBasketContext
);

const BasketProvider = ({ children }: PropsWithChildren) => {
  const { user, token } = useContext(UserContext);
  console.log("USePROOruserDWAWER", user, token);

  const [foodsInBask, setFoodsInBask] = useState<{} | null>([]);

  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const addBasket = async (food: any, count: number) => {
    console.log("Addbasket", food, count);
    try {
      setLoading(true);

      const {
        data: { basket },
      } = await axios.post(
        "http://localhost:8080/basket",
        {
          foods: { food: food._id, quantity: count },
          totalPrice: food.price,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setFoodsInBask(basket);

      getFoodBasket();
      toast.success("Таны хоол амжилттай сагслагдсан.");
      setLoading(false);
    } catch (error: any) {
      console.log("ErrorAddBask", error);
    }
  };

  //updateBasketfood
  const updateByFoodId = async (food: any, totalPrice: any) => {
    console.log("TOTAL", totalPrice);
    console.log("FOODID___--", food);

    try {
      const {
        data: { updateFood },
      } = await axios.put(
        "http://localhost:8080/basket",
        {
          foodId: food.foodId,
          count: food.count,
          totalPrice,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("UpdateBasketFoodirlle", updateFood);
      setFoodsInBask(updateFood);
      getFoodBasket();
    } catch (error) {
      toast.error("Failed Food updateByFoodId");
    }
  };

  const getFoodBasket = async () => {
    console.log("GETBASKEt");
    try {
      const {
        data: { basket },
      } = await axios.get("http://localhost:8080/basket", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("TOKENN", token);
      console.log("RESSSSS", basket);
      setFoodsInBask(basket.foods);
      // toast.success(data.message);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    if (user) {
      getFoodBasket();
    } else {
      setFoodsInBask(null);
    }
  }, [!refresh, user]);

  const deleteFoodInBask = async (foodId: number) => {
    try {
      const {
        data: { basket },
      } = await axios.delete("http://localhost:8080/basket/" + foodId, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFoodsInBask(basket);
      toast.success("Food deleted in bask");
      getFoodBasket();
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <BasketContext.Provider
      value={{
        foodsInBask,
        setFoodsInBask,
        addBasket,
        loading,
        updateByFoodId,
        deleteFoodInBask,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
