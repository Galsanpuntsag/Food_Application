import React, { useEffect, useState, PropsWithChildren } from "react";
import axios from "axios";
import { createContext } from "vm";

interface IGetCategory {
  name: string;
  description: string;
}

interface ICategoryContext {}

export const CategoryContext = createContext({});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [categories, setCategoris] = useState([]);
};

const [newCategory, setNewCategory] = useState({
  name: "",
  description: "",
});

const getCategory = async () => {
  try {
    const {
      data: { categories },
    } = (await axios.get("http://localhost:8080/categories")) as {
      data: { categories: [] };
    };
    console.log("CAtegoryGEtAll", categories);
    setCategoris(categories);
  } catch (error: any) {
    alert("Add Error" + error.message);
  }
};
useEffect(() => {
  getCategory();
}, []);
