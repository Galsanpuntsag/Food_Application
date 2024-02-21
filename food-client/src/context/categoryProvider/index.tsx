"use client";
import axios from "axios";
import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

interface ICategory {
  name: string;
  description: string;
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

  const getCategory = async () => {
    try {
      const {
        data: { categories },
      } = await axios.get("http://localhost:8080/categories");
      console.log("categoryIrlee", categories);
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
