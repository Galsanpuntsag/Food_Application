"use client";
import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Button, Container, Grid, Stack } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { FoodContext } from "@/context/foodProvider";
import { CategoryContext } from "@/context/categoryProvider";
import FoodCard from "./FoodCard";

export default function CategoryFoodCard() {
  const { foods } = useContext(FoodContext);
  const { categories } = useContext(CategoryContext);

  return (
    <Container maxWidth={"xl"}>
      {categories?.map((category) => (
        <Grid container direction={"column"}>
          <Grid container spacing={2}>
            <Grid item xs={11} display={"flex"} direction={"row"}>
              <img width={35} height={35} src="/images/Star.png" />

              <Typography variant="h6" ml={3} sx={{ fontWeight: 900 }}>
                {category.name}
              </Typography>
            </Grid>

            <Grid item xs={1}>
              <Typography color={"#18ba51"} sx={{ mt: 2 }}>
                Бүгдийг харах
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={6}
            rowSpacing={3}
            sx={{
              boxShadow: "none",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              my: 3,

              // background: "green",
            }}
          >
            {foods
              ?.filter((el) => el.category.name === category.name)
              .map((food) => (
                <Grid xs={12} sm={6} md={3}>
                  <FoodCard food={food} />
                </Grid>
              ))}
          </Grid>
        </Grid>
      ))}
    </Container>
  );
}
