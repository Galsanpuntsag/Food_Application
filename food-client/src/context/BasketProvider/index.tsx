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

interface IBasket {
  basket: [
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
  basket: any;
  addBasket: (food: any, count: number) => Promise<void>;
  // deleteBasket: (food: any) => Promise<void>;
}

export const BasketContext = createContext<IBasketContext>(
  {} as IBasketContext
);

const BasketProvider = ({ children }: PropsWithChildren) => {
  const { user, token } = useContext(UserContext);
  console.log("USePROOruserDWAWER", user, token);

  const [basket, setBaskets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const addBasket = async (food: any, count: number) => {
    try {
      setLoading(true);
      console.log("Addbasket");
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
      console.log("AdddBasket", basket);
      setBaskets({ ...basket });
      console.log("AdddBasketBASKETBYRSLaa", basket);
      setLoading(false);
    } catch (error: any) {
      alert("AddBasketErr" + error.message);
    }
  };

  useEffect(() => {}, []);

  console.log("TOOKENUSERATTT__Basket", token);

  // const getBasket = async () => {
  //   console.log("GetBasketGEt");

  //   try {
  //     // console.log("TOOKENUSERATTT__Basket", token);
  //     const {
  //       data: { basket },
  //     } = await axios.get("http://localhost:8080/basket", {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     console.log("getgetBASSKETTTTTTT", basket);
  //     setBaskets(basket.foods);
  //   } catch (error: any) {
  //     console.log("AddBasket Error" + error.message);
  //   }
  // };

  // useEffect(() => {
  //   if (token) {
  //     getBasket();
  //     console.log("UseEFfect");
  //   }
  // }, [token, !refresh]);

  return (
    <BasketContext.Provider value={{ basket, addBasket, loading }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
