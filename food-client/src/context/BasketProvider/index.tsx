"use client";

import myAxios from "../../../utils/axios";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { UserContext } from "../userProvider";
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
}

export const BasketContext = createContext<IBasketContext>(
  {} as IBasketContext
);

const BasketProvider = ({ children }: PropsWithChildren) => {
  const { user, token } = useContext(UserContext);
  const [foodsInBask, setFoodsInBask] = useState<{} | null>([]);

  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const addBasket = async (food: any, count: number) => {
    try {
      setLoading(true);

      const {
        data: { basket },
      } = await myAxios.post(
        "/basket",
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
      toast.error("Failed Food added");
    }
  };

  //updateBasketfood
  const updateByFoodId = async (food: any, totalPrice: any) => {
    try {
      const {
        data: { updateFood },
      } = await myAxios.put(
        "/basket",
        {
          foodId: food.foodId,
          count: food.count,
          totalPrice,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setFoodsInBask(updateFood);
      getFoodBasket();
    } catch (error) {
      toast.error("Failed Food updateByFoodId");
    }
  };

  const getFoodBasket = async () => {
    try {
      const {
        data: { basket },
      } = await myAxios.get("/basket", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFoodsInBask(basket.foods);
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
      } = await myAxios.delete("/basket/" + foodId, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFoodsInBask(basket);
      toast.success("Food deleted in bask");
      getFoodBasket();
    } catch (error: any) {
      console.log("err", error);
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
