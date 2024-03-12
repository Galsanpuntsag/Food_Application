"use client";
import React, { useContext, useEffect, useState } from "react";
import { Grid, Button as MuiButton } from "@mui/material";
import { UserContext } from "@/context/userProvider";
import { CategoryContext } from "@/context/categoryProvider";
import { FoodContext } from "@/context/foodProvider";
import Food from "@/components/Foods/Food";

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
  const [category, setCategory] = useState<string>("Хаямдралтай");

  const getFilteredFoods = () => {
    const filtered = foods.filter((food) => food.category.name === category);
    setFilteredFoods(filtered);
  };

  useEffect(() => {
    getFilteredFoods();
  }, [category, foods]); // Run the effect when category or foods change

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
                onClick={() => (setCategory(cate.name), getFilteredFoods())}
              >
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
              <Food food={filteredFood} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Menu;
