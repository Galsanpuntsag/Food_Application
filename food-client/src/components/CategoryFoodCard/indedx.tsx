"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Button, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";

export default function CategoryFoodCard() {
  return (
    <Card
      sx={{
        maxWidth: 345,
      }}
    >
      <Grid
        position={"relative"}
        sx={{
          display: "block",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image="https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
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
            20%
          </Button>
        </CardMedia>
      </Grid>
      <CardContent>
        <Typography variant="h5" fontSize={20} component="div" sx={{}}>
          Өглөөний хоол
        </Typography>
        <Button size="large" sx={{ color: "#4caf50" }}>
          4800₮
        </Button>
        <Button
          size="large"
          sx={{ color: "black", textDecoration: "line-through" }}
        >
          6800₮
        </Button>
      </CardContent>
    </Card>
  );
}
