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
import ModalChooseFood from "@/components/Modal";
import { BasketContext } from "@/context/BasketProvider";
import { IoBasketSharp } from "react-icons/io5";
import { UserContext } from "@/context/userProvider";

const Food = ({ food }: any) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Card onClick={handleOpenModal} sx={{ mb: 3 }}>
      <Grid
        position={"relative"}
        sx={{
          display: "block",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardMedia
          sx={{ height: 180, width: 300, borderRadius: "10px" }}
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
        <Typography>
          {Math.floor(100 - (food.price * 100) / food.discountPrice)}%
        </Typography>
      </CardContent>
      <ModalChooseFood
        food={food}
        open={openModal}
        handleCloseModal={handleCloseModal}
      />
    </Card>
  );
};

export default Food;

// name: string;
// price: string;
// disCountprice: string;
// description: string;
// image: string;
// category: {
//   name: String;
