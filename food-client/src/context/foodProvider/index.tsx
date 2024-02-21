"use client";
import axios from "axios";
import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

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
}

export const FoodContext = createContext<IFoodContext>({} as IFoodContext);

export const FoodProvider = ({ children }: PropsWithChildren) => {
  const [foods, setFoods] = useState<IFood[]>([]);

  const getFood = async () => {
    console.log("Working");
    try {
      const {
        data: { foods },
      } = await axios.get("http://localhost:8080/foods");
      console.log("FoodIrle", foods);
      setFoods(foods);
    } catch (error: any) {
      alert("Add Error" + error.message);
    }
  };

  useEffect(() => {
    getFood();
  }, []);

  return (
    <FoodContext.Provider value={{ foods, getFood }}>
      {children}
    </FoodContext.Provider>
  );
};
