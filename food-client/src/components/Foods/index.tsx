"use client";
import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Container, Grid, Stack } from "@mui/material";
import { FoodContext } from "@/context/foodProvider";
import { CategoryContext } from "@/context/categoryProvider";
import Food from "./Food";
import { FaChevronRight } from "react-icons/fa";

export default function Foods() {
  const { foods } = useContext(FoodContext);
  const { categories } = useContext(CategoryContext);

  return (
    <Container maxWidth={"xl"}>
      <>
        {categories?.map((category) => (
          <Grid container spacing={2} color={"black"}>
            <Grid container spacing={2} justifyContent={"center"}>
              <Grid
                item
                xs={9}
                display={"flex"}
                sx={{ marginLeft: 5 }}
                direction={"row"}
                my={5}
              >
                <img width={30} height={30} src="/images/Star.png" />

                <Typography variant="h6" ml={3} sx={{ fontWeight: 900 }}>
                  {category.name}
                </Typography>
              </Grid>

              <Grid
                item
                xs={2}
                display={"flex"}
                marginLeft={6}
                justifyContent={"end"}
              >
                <Button sx={{ mt: 2, gap: 2, color: "#18ba51" }}>
                  Бүгдийг харах <FaChevronRight />
                </Button>
              </Grid>
            </Grid>
            <Grid container>
              {foods
                ?.filter((el) => el.category.name === category.name)
                .map((food, index) => (
                  <Grid
                    key={index}
                    container
                    display={"flex"}
                    justifyContent={"center"}
                    alignContent={"center"}
                    xs={12}
                    sm={6}
                    md={3}
                  >
                    <Food food={food} />
                  </Grid>
                ))}
            </Grid>
          </Grid>
        ))}
      </>
    </Container>
  );
}
