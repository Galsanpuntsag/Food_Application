"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  CardMedia,
  Grid,
  Button,
  CardContent,
  Typography,
  Card,
  Container,
} from "@mui/material";

interface IFood {
  name: string;
  description: string;
  price: string;
  image: string;
  discountPrice: string;
  category: { name: String };
}
const FoodCard = ({ food }: { food: IFood }) => {
  console.log("FOODIRLSLALA", food);
  return (
    <Card sx={{ mb: 3 }}>
      <Grid
        position={"relative"}
        sx={{
          display: "block",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardMedia
          sx={{ height: 150, borderRadius: "10px" }}
          image={food.image}
          title="green iguana"
        >
          <Button
            sx={{
              position: "absolute",
              background: "#4caf50",
              top: "10px",
              right: "20px",
              p: "0",
              m: "0",
              borderRadius: "20px",
            }}
            variant="contained"
          ></Button>
        </CardMedia>
      </Grid>
      <CardContent>
        <Typography
          variant="h1"
          fontSize={16}
          fontWeight={900}
          component="div"
          sx={{}}
        >
          {food?.name}
        </Typography>
        <Button size="large" sx={{ color: "#4caf50" }}>
          {food.price}₮
        </Button>
        <Button
          size="large"
          sx={{ color: "black", textDecoration: "line-through" }}
        >
          {food.discountPrice}₮
        </Button>
      </CardContent>
    </Card>
  );
};

export default FoodCard;

// name: string;
// price: string;
// disCountprice: string;
// description: string;
// image: string;
// category: {
//   name: String;
