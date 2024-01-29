import React from "react";
import { Grid, Container } from "@mui/material";
import FooterIcon from "../../../public/images/FooterIcon";

const HomeBackground = () => {
  return (
    <Grid
      container
      display={"flex"}
      flexWrap={"nowrap"}
      justifyContent={"center"}
      alignItems={"center"}
      width="100%"
      height="50vh"
      sx={{
        background: "#18ba51",
        backgroundImage: `url(${"/images/home.png"})`,
      }}
    ></Grid>
  );
};

export default HomeBackground;
