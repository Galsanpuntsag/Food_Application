"use client";

import React, { useState, useEffect, ChangeEvent } from "react";
import axios, { AxiosError } from "axios";
import { Stack, Button, Container, Grid, Typography } from "@mui/material";
import CategoryModal from "@/components/Modal/category";
import Iconify from "@/components/iconify";
import Swal from "sweetalert2";

import CategoryCard from "./category-card";
import CategorySort from "./category-sort";
import CategorySearch from "./category-search";

// ----------------------------------------------------------------------
import { faker } from "@faker-js/faker";

// ----------------------------------------------------------------------

const CATEGORY_TITLES = [
  "Whiteboard Templates",
  "Tesla Cybertruck-inspired",
  "Designify Agency",
  "✨What is Done is Done ✨",
  "Fresh Prince",
  "Six Socks Studio",
  "vincenzo de cotiis",
];

export const categories = [...Array(CATEGORY_TITLES.length)].map(
  (_, index) => ({
    id: faker.string.uuid(),
    cover: `/assets/images/covers/cover_${index + 1}.jpg`,
    title: CATEGORY_TITLES[index + 1],
    createdAt: faker.date.past(),
  })
);

// ----------------------------------------------------------------------

export default function CategoryView() {
  const [categories, setCategoris] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
  });
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
    setNewCategory({ ...newCategory, [name]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.currentTarget.files![0]);
  };
  // const getCategory = async () => {
  //   try {
  //     const {
  //       data: { categories },
  //     } = (await axios.get("http://localhost:8080/categories")) as {
  //       data: { categories: [] };
  //     };
  //     console.log("CAtegoryGEtAll", categories);
  //     setCategoris(categories);
  //   } catch (error: any) {
  //     alert("Add Error" + error.message);
  //   }
  // };
  // useEffect(() => {
  //   getCategory();
  // }, []);

  const createCategory = async () => {
    console.log("createCategoryWorking");
    try {
      const formData = new FormData();
      formData.set("image", file!);
      formData.set("name", newCategory.name);
      formData.set("description", newCategory.description);
      console.log("FormdatWork");
      const {
        data: { category },
      } = (await axios.post("http://localhost:8080/categories", formData)) as {
        data: { category: object };
      };
      // setNewCategory(category)
      alert("Successful category  added");
      setRefresh(true);
      console.log("Successful added category");
    } catch (error: any) {
      alert("CreateCategory" + error.message);
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

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 2 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          {/* <ProductFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          /> */}

          {/* <FoodSort /> */}
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        {categories.map((category: any) => (
          <Grid xs={12} sm={6} md={3}>
            <CategoryCard key={category._id} category={category} />
          </Grid>
        ))}
      </Grid>
      <CategoryModal
        open={open}
        handleClose={handleClose}
        newCategory={newCategory}
        handleChange={handleChange}
        handleFileChange={handleFileChange}
        createCategory={createCategory}
      />
    </Container>
  );
}
