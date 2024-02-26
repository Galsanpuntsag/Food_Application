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

interface IBasketContext {
  baskets: any;
}

export const BasketContext = createContext<IBasketContext>(
  {} as IBasketContext
);

const BasketProvider = ({ children }: PropsWithChildren) => {
  const { user, token } = useContext(UserContext);
  console.log("TOOKENUSER", user, token);
  const [baskets, setBaskets] = useState([]);
  // const [refresh, setRefresh] = useState();

  const getBasket = async () => {
    console.log("GetBasketGEt");
    try {
      if (token) {
        const {
          data: { basket },
        } = await axios.get("http://localhost:8080/basket", {
          headers: { Authorization: `Bearer  ${token}` },
        });
        console.log("BASSKETTTTTTT", basket);
        setBaskets(basket.foods);
      }
    } catch (error: any) {
      "AddBasket Error" + error.message;
    }
  };
  useEffect(() => {
    getBasket();
  }, []);

  return (
    <BasketContext.Provider value={{ baskets }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
