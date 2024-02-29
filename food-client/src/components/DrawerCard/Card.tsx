"use client";
import React, { useContext } from "react";
import {
  Box,
  Button as MuiButton,
  Typography,
  Modal,
  Grid,
  Divider,
  Stack,
} from "@mui/material";
import Image from "next/image";
import { Remove, Add, Close } from "@mui/icons-material";

export const Card = ({ selectedFood }: any) => {
  console.log("selectedFood", selectedFood);
  const [count, setCount] = React.useState(selectedFood.quantity);

  const min = () => {
    if (count === 0) {
    } else {
      setCount(count - 1);
    }
  };

  const add = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Stack width={"100%"} height={"100%"} direction={"row"}>
        <Image fill objectFit="cover" alt="" src={selectedFood.food.image} />
        <Grid
          item
          xs={5}
          display={"flex"}
          flexDirection={"row"}
          alignItems={"flex-start"}
        >
          <Grid display={"flex"} gap={1} flexDirection={"column"}>
            <Typography variant="h6" fontWeight={800}>
              {selectedFood.food.name}
            </Typography>
            <Typography
              fontSize={25}
              fontWeight={600}
              sx={{ color: "#18BA51" }}
            >
              {selectedFood.food.price}₮
            </Typography>

            <Typography
              color={"gray"}
              maxHeight={40}
              fontSize={18}
              fontWeight={600}
            >
              {selectedFood.food.description}
            </Typography>

            <div>
              <MuiButton onClick={min}>
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
              <MuiButton onClick={add}>
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
            <MuiButton>
              <Close />
            </MuiButton>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};
