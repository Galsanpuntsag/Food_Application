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
      <Grid
        container
        display={"flex"}
        direction="row"
        justifyContent={"center"}
        my={5}
      >
        {categories.map((cate) => {
          {
            console.log("CATEGORIESMAPP", categories);
          }
          return (
            <Grid
              item
              display={"flex"}
              justifyContent={"center"}
              xs={12}
              sm={6}
              md={2}
            >
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
            </Grid>
          );
        })}
      </Grid>
      <Grid container spacing={2}>
        {filteredFoods.map((filteredFood: any) => {
          return (
            <Grid xs={12} sm={6} md={3}>
              <FoodCard food={filteredFood} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Menu;
