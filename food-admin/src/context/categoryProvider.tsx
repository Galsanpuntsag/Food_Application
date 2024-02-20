"use client";

import React, {
  useEffect,
  useState,
  createContext,
  PropsWithChildren,
} from "react";
import axios from "axios";

interface ICategory {
  name: string;
  description: string;
  image: string;
}

interface ICategoryContext {
  categories: ICategory[];
  getCategory: () => void;
}

export const CategoryContext = createContext<ICategoryContext>(
  {} as ICategoryContext
);

export const CategoryProvider = ({ children }: PropsWithChildren) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [refresh, setRefresh] = useState(false);

  const getCategory = async () => {
    console.log("WorkingGEtcateguory");
    try {
      const {
        data: { categories },
      } = (await axios.get("http://localhost:8080/categories")) as {
        data: { categories: ICategory[] };
      };
      console.log("CAtegoryGEtAll", categories);
      setCategories(categories);
    } catch (error: any) {
      alert("Add Error" + error.message);
    }
  };
  useEffect(() => {
    getCategory();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, getCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
