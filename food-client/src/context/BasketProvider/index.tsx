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

interface IBasket {
  food: {
    name: string;
    _id: string;
    description: string;
    price: number;
  };
  count: number;
}

interface IBasketContext {
  loading: boolean;
  baskets: IBasket[];
  addBasket: (food: any, count: number) => Promise<void>;
  // deleteBasket: (food: any) => Promise<void>;
}

export const BasketContext = createContext<IBasketContext>(
  {} as IBasketContext
);

const BasketProvider = ({ children }: PropsWithChildren) => {
  const { user, token } = useContext(UserContext);

  const [baskets, setBaskets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(true);

  const addBasket = async (food: any, count: number) => {
    try {
      setLoading(true);
      if (user) {
        const {
          data: { basket },
        } = await axios.put("http://localhost:8080/basket", {
          foodId: food._id,
          count: count,
        });
        console.log("AdddBasket", basket);
        setLoading(false);
      }
    } catch (error: any) {
      alert("AddBasketErr" + error.message);
    }
  };

  console.log("TOOKENUSERATTT__Basket", token);

  const getBasket = async () => {
    console.log("GetBasketGEt");

    try {
      // console.log("TOOKENUSERATTT__Basket", token);
      const {
        data: { basket },
      } = await axios.get("http://localhost:8080/basket", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("BASSKETTTTTTT", basket);
      setBaskets(basket.foods);
    } catch (error: any) {
      console.log("AddBasket Error" + error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getBasket();
    }
  }, [token, refresh]);

  return (
    <BasketContext.Provider value={{ baskets, addBasket, loading }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
