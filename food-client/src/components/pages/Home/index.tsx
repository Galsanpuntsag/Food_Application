"use client";
import React from "react";
import { Grid, Button, Typography, Container } from "@mui/material";
import CategoryFoodCard from "@/components/CategoryFoodCard";
import FoodState from "@/components/FoodState";
import ModalChooseFood from "@/components/ModalChooseFood";
import DrawerFoodBasking from "@/components/DrawerFoodBasking";
import HomeBackground from "@/components/HomeBackground";

export const Home = () => {
  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
    >
      <HomeBackground />
      <FoodState />
      <CategoryFoodCard />
      <ModalChooseFood />
      <DrawerFoodBasking />
      {/*  <div className="wrapper">HELLO SASS</div> */}
    </Grid>
  );
};
