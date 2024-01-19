"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Button, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";

const CtgryFoods = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Өглөөний хоол",
    price: "7000₮",
    sale: "7800₮",
    procent: "10%",
  },
  {
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Өглөөний хоол",
    price: "4000₮",
    sale: "6800₮",
    procent: "20%",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Өглөөний хоол",
    price: "8800₮",
    sale: "9000₮",
    procent: "30%",
  },
];

export default function CategoryFoodCard() {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        p: 10,
        boxShadow: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      {CtgryFoods.map((food, i) => (
        <Box width={200} boxShadow={3} borderRadius={"10px"}>
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
              >
                {food.procent}
              </Button>
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
              {food.category}
            </Typography>
            <Button size="large" sx={{ color: "#4caf50" }}>
              {food.price}
            </Button>
            <Button
              size="large"
              sx={{ color: "black", textDecoration: "line-through" }}
            >
              {food.sale}
            </Button>
          </CardContent>
        </Box>
      ))}
    </Card>
  );
}
