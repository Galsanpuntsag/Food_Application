"use client";
import React from "react";
import { Grid, Container, Typography, Box } from "@mui/material";
import FooterIcon from "../../../public/images/FooterIcon";
import { relative } from "path";

type Props = {};

const HomeBackground = (props: Props) => {
  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"center"}
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
          <Typography variant={"h1"} color={"whitesmoke"}>
            Pinecone
          </Typography>
          <Typography
            variant={"h2"}
            color={"whitesmoke"}
            sx={{ borderBottom: 1, borderColor: "whitesmoke", mb: 5 }}
          >
            Food Delivery
          </Typography>
          <Typography variant={"h6"} color={"whitesmoke"} maxWidth={600}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio
            doloremque unde iure sapiente tempore earum pariatur quia deserunt?
          </Typography>
        </Grid>
        <Grid item>
          <img width={600} height={400} src="/images/Group 534.png" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeBackground;
