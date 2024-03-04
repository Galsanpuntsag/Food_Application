"use client";
import React, { useContext, useState } from "react";
import {
  Button as MuiButton,
  Typography,
  Grid,
  CardMedia,
} from "@mui/material";
import { Remove, Add, Close } from "@mui/icons-material";
import { BasketContext } from "@/context/BasketProvider";

export const Card = ({ foods }: any) => {
  const { updateByFoodId, deleteFoodInBask } = useContext(BasketContext);
  console.log("selectedFood", typeof foods);
  const [count, setCount] = useState(foods.quantity);
  // const [price, setPrice] = useState(foods.food.price);

  // console.log("Price_______", typeof price);

  // // const totalPrice = () => {
  // //   return Object.values(price).reduce((acc: any, cur: any) => acc + cur, 0);
  // // };

  // console.log("TOTALPRICEreduce__map", totalPrice());
  const handleDelete = () => {
    console.log("WorkingDeletFood");
    return deleteFoodInBask({ foodId: foods?.food?._id });
  };

  const handleCount = (operation: string, foodId: string) => {
    if (operation === "PLUS") {
      if (count < 20) {
        setCount(count + 1);
        // setPrice(price * 2);
      }
    } else {
      if (count !== 1) {
        setCount(count - 1);
        // setPrice(price / 2);
      }
    }
    updateByFoodId({
      foodId: foods.food._id,
      // foodPrice: price,
      count: operation === "PLUS" ? count + 1 : count - 1,
      totalPrice: 45678,
    });
  };

  return (
    <>
      <Grid container justifyContent={"space-evenly"} direction={"row"} my={3}>
        <Grid item xs={5}>
          <CardMedia
            sx={{ height: 150 }}
            image={foods?.food?.image}
            title="green iguana"
          />
        </Grid>
        <Grid item xs={6} display={"flex"} flexDirection={"row"}>
          <Grid display={"flex"} flexDirection={"column"}>
            <Typography ml={5} fontSize={20} fontWeight={800}>
              {foods?.food?.name}
            </Typography>
            <Typography
              fontSize={25}
              ml={5}
              fontWeight={600}
              sx={{ color: "#18BA51" }}
            >
              {foods?.food?.price}
            </Typography>

            <Typography
              color={"gray"}
              ml={5}
              maxHeight={40}
              fontSize={12}
              fontWeight={600}
            >
              {foods?.food?.description}
            </Typography>

            <div>
              <MuiButton onClick={() => handleCount("MINUS", foods?.food?._id)}>
                <Remove
                  sx={{
                    bgcolor: "#18BA51",
                    color: "white",
                    width: "70%",
                    height: "30px",
                    borderRadius: 2,
                  }}
                />
              </MuiButton>
              <input
                type="text"
                value={count}
                style={{
                  width: "60px",
                  border: "none",
                  textAlign: "center",
                  paddingTop: 4,
                  paddingBottom: 4,
                  fontWeight: 600,
                  fontSize: 16,
                }}
              />
              <MuiButton onClick={() => handleCount("PLUS", foods?.food?._id)}>
                <Add
                  sx={{
                    bgcolor: "#18BA51",
                    color: "white",
                    width: "70%",
                    height: "30px",
                    borderRadius: 2,
                  }}
                />
              </MuiButton>
            </div>
          </Grid>
          <Grid item xs={1}>
            <MuiButton
              onClick={() => {
                handleDelete();
              }}
            >
              <Close />
            </MuiButton>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
