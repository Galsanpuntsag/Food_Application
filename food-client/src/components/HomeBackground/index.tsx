import React from "react";
import Grid from "@mui/material/Grid";
import FooterIcon from "../../../public/images/FooterIcon";

const HomeBackground = () => {
  return (
    <Grid
      container
      wrap="wrap"
      sx={{
        width: "100%",
        height: "50vh",
        background: "#18ba51",
        backgroundImage: `url(${"/images/home.png"})`,
      }}
    ></Grid>
  );
};

export default HomeBackground;
