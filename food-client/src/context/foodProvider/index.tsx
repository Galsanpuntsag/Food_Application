"use client";
import axios from "axios";
import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import myAxios from "../../../utils/axios";

interface IFood {
  name: string;
  price: string;
  disCountprice: string;
  description: string;
  image: string;
  category: {
    name: String;
  };
}

interface IFoodContext {
  foods: IFood[];
  getFood: () => void;
  filteredFoods: any;
  setFilteredFoods: any;
}

export const FoodContext = createContext<IFoodContext>({} as IFoodContext);

export const FoodProvider = ({ children }: PropsWithChildren) => {
  const [foods, setFoods] = useState<IFood[]>([]);

  const getFood = async () => {
    try {
      const {
        data: { foods },
      } = await myAxios.get("/foods");
      setFoods(foods);
    } catch (error: any) {
      alert("Add Error" + error.message);
    }
  };

  useEffect(() => {
    getFood();
  }, []);

  const [filteredFoods, setFilteredFoods] = useState([]);

  return (
    <FoodContext.Provider
      value={{ foods, getFood, filteredFoods, setFilteredFoods }}
    >
      {children}
    </FoodContext.Provider>
  );
};
