"use client";
import React from "react";
import { Grid, Typography } from "@mui/material";

type Props = {};

const BackgroundImg = (props: Props) => {
  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"center"}
      overflow={"hidden"}
      alignItems={"center"}
      sx={{
        background: "#18ba51",
        width: "100%",
        height: 500,
        backgroundImage: `url(${"/images/bg-footer.png"})`,
      }}
    >
      <Grid container display={"flex"} justifyContent={"space-evenly"}>
        <Grid item>
          <Typography
            variant="h1"
            style={{
              background:
                "-webkit-linear-gradient(95deg, #263238 30%, #FF8E53 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Pinecone
          </Typography>
          <Typography
            variant="h2"
            style={{
              background:
                "-webkit-linear-gradient(85deg, #263238 40%, #21CBF3 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              borderBottom: "1px solid #263238",
              marginBottom: 5,
            }}
          >
            Food Delivery
          </Typography>
          <Typography
            variant="h6"
            style={{
              background:
                "-webkit-linear-gradient(75deg, #263238 40%, #8BC34A 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              maxWidth: 600,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio
            doloremque unde iure sapiente tempore earum pariatur quia deserunt?
          </Typography>
        </Grid>

        <Grid item maxWidth={600} minWidth={200}>
          <img width={600} height={400} src="/images/Group 534.png" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BackgroundImg;
