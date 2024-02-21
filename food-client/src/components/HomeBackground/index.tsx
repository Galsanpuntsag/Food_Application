import React from "react";
import { Grid, Container, Typography, Box } from "@mui/material";
import FooterIcon from "../../../public/images/FooterIcon";
import { relative } from "path";

const HomeBackground = () => {
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
        <Grid item></Grid>
        <Grid item>asda</Grid>
      </Grid>
    </Grid>
  );
};

export default HomeBackground;
