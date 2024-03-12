"use client";

import { ChangeEvent, useEffect, useState, useContext } from "react";
import { Stack, Button } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import FoodCard from "./food-card";
import FoodSort from "./food-sort";
import FoodModal from "@/components/Modal/food";

// ----------------------------------------------------------------------
import { sample } from "lodash";
import { faker } from "@faker-js/faker";
import axios from "axios";
// ----------------------------------------------------------------------

import { CategoryContext } from "@/context/categoryProvider";

// const FOOD_COLOR = [
//   "#00AB55",
//   "#000000",
//   "#FFFFFF",
//   "#FFC0CB",
//   "#FF4842",
//   "#1890FF",
//   "#94D82D",
//   "#FFC107",
// ];

interface IFood {
  _id: string;
  name: string;
  category: { name: string };
  description: string;
  price: string;
}

export default function FoodView() {
  const { categories } = useContext(CategoryContext);

  const [foods, setFoods] = useState<IFood[]>([]);
  const [newFood, setNewFood] = useState({
    name: "",
    price: "",
    discountPrice: "",
    description: "",
    category: "",
  });
  const [refresh, setRefresh] = useState(false);

  const [file, setFile] = useState<File | null>(null);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewFood({ ...newFood, [name]: value });
    console.log("newFood", newFood);
    console.log("newName", name);
    console.log("newValue", value);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.currentTarget.files![0]);
    console.log("File");
  };

  const getFood = async () => {
    try {
      const {
        data: { foods },
      } = (await axios.get("http://localhost:8080/foods")) as {
        data: { foods: [] };
      };
      console.log("GEtDataFoods", foods);
      setFoods(foods);
    } catch (error: any) {
      alert("error" + error.message);
    }
  };

  useEffect(() => {
    getFood();
  }, [!refresh]);

  const createFood = async () => {
    try {
      const formData = new FormData();
      console.log("CreateWorking");
      formData.set("image", file!);
      formData.set("name", newFood.name);
      formData.set("price", newFood.price);
      formData.set("discountPrice", newFood.discountPrice);
      formData.set("description", newFood.description);
      formData.set("category", newFood.category);
      console.log("FSWorking", newFood);

      const {
        data: { foods },
      } = await axios.post("http://localhost:8080/foods", formData);
      console.log("FOoods", foods);
      handleClose();
      getFood();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4" sx={{ mb: 5 }}>
          Хоолны жагсаалт
        </Typography>
        <Button variant="contained" color="inherit" onClick={handleOpen}>
          Хоол нэмэх
        </Button>
      </Stack>

      <Stack sx={{ mb: 2 }}>
        <>
          {categories.map((cate) => {
            return (
              <Container>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                  my={3}
                >
                  <Typography variant="h5">{cate.name}</Typography>
                  <FoodSort />
                </Grid>
                <Grid container spacing={1} justifyContent={"space-around"}>
                  {foods
                    .filter((el) => el.category.name === cate.name)
                    .map((food) => (
                      <Grid container xs={12} sm={6} md={3} key={food._id}>
                        <FoodCard
                          getFood={getFood}
                          handleOpen={handleOpen}
                          food={food}
                        />
                      </Grid>
                    ))}
                </Grid>
              </Container>
            );
          })}
        </>
      </Stack>

      <FoodModal
        open={open}
        handleClose={handleClose}
        createFood={createFood}
        handleChange={handleChange}
        handleFileChange={handleFileChange}
        categories={categories}
      />
      {/* <ProductCartWidget /> */}
    </Container>
  );
}
