import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import CategoryFoodCard from "@/components/CategoryFoodCard/indedx";

export default function Home() {
  return (
    <main>
      <Grid container>
        <Grid
          item
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <CategoryFoodCard />
        </Grid>
      </Grid>
    </main>
  );
}
