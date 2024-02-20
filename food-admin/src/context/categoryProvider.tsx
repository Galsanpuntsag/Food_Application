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
}

export const CategoryContext = createContext<ICategoryContext>({
  categories: [],
});

export const CategoryProvider = ({ children }: PropsWithChildren) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
  });

  const getCategory = async () => {
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
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};
