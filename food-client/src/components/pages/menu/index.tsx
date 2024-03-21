"use client";
import React, { useContext, useEffect, useState } from "react";
import { Container, Grid, Button as MuiButton } from "@mui/material";
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
    <Container>
      <Grid
        container
        display={"flex"}
        direction="row"
        justifyContent={"center"}
        spacing={3}
        my={5}
      >
        {categories.map((cate) => {
          return (
            <Grid
              item
              display={"flex"}
              justifyContent={"center"}
              my={2}
              xs={12}
              sm={6}
              md={2}
            >
              <MuiButton
                variant="outlined"
                sx={{ borderColor: "#18ba51", color: "#18ba51", width: "100%" }}
                onClick={() => (setCategory(cate.name), getFilteredFoods())}
              >
                {cate.name}
              </MuiButton>
            </Grid>
          );
        })}
      </Grid>
      <Grid
        container
        display={"flex"}
        direction="row"
        justifyContent={"center"}
        spacing={3}
        my={5}
      >
        {filteredFoods.map((filteredFood: any) => {
          return (
            <Grid
              item
              display={"flex"}
              justifyContent={"center"}
              my={2}
              xs={12}
              sm={6}
              md={2}
            >
              <Food food={filteredFood} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Menu;

{
  /* <Container maxWidth={"xl"}>
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
          .map((food) => (
            <Grid
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
</Container> */
}
