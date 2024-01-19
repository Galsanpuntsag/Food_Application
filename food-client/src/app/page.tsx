import React from "react";
import { Grid, Button, Typography, Container } from "@mui/material";
// import CategoryFoodCard from "@/components/CategoryFoodCard/indedx";
// import FoodState from "@/components/FoodState";
import ModalChooseFood from "@/components/ModalChooseFood";

export default function Home() {
  return (
    <main>
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
      >
        {/* <FoodState />
        <CategoryFoodCard /> */}
        <ModalChooseFood />
      </Grid>
    </main>
  );
}
