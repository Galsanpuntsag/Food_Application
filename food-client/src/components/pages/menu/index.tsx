"use client";
import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Input } from "@/components";
import {
  Box,
  Container,
  Stack,
  Typography,
  Link,
  Grid,
  Button as MuiButton,
} from "@mui/material";
import { UserContext } from "@/context/userProvider";
import { useFormik } from "formik";
import * as yup from "yup";
import { CategoryContext } from "@/context/categoryProvider";
import { FoodContext } from "@/context/foodProvider";
import FoodCard from "@/components/CategoryFoodCard/FoodCard";

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

const Menu = () => {
  const { categories } = useContext(CategoryContext);
  const { foods, setFilteredFoods, filteredFoods } = useContext(FoodContext);
  const [refresh, setRefresh] = useState<any>(false);

  const getFilteredFoods = (cate: any) => {
    console.log("CATEGGEGE", cate);
    setFilteredFoods(
      foods.filter((food) => {
        return food.category.name === cate;
      })
    );
  };

  console.log("Cate", categories);
  return (
    <>
      <Stack
        spacing={2}
        direction="row"
        justifyContent={"center"}
        width={"100%"}
        my={5}
      >
        {categories.map((cate) => {
          {
            console.log("CATEGORIESMAPP", categories);
          }
          return (
            <MuiButton
              variant="outlined"
              sx={{ borderColor: "#18ba51", color: "#18ba51" }}
              onClick={() => {
                getFilteredFoods(cate.name);
              }}
            >
              {" "}
              {cate.name}
            </MuiButton>
          );
        })}
      </Stack>
      <Stack>
        {filteredFoods.map((filteredFood: any) => {
          return <FoodCard food={filteredFood} />;
        })}
      </Stack>
    </>
  );
};

export default Menu;
