import React from "react";
import { Grid, Container, Typography } from "@mui/material";
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
        position: "relative",
      }}
    >
      <FooterIcon />
      <Grid sx={{ position: "absolute", display: "flex" }}>
        <Grid xs={6}>
          <Grid xs={6}>
            <Typography>Pinecone Food Delivery</Typography>
          </Grid>
          <Grid xs={6}>
            {" "}
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
              impedit nemo alias deserunt beatae repudiandae velit, provident
              laborum, aliquid autem inventore necessitatibus. Voluptatum iusto
              voluptate pariatur dolore exercitationem fugiat natus.
            </Typography>
          </Grid>
        </Grid>
        <Grid xs={6}></Grid>
      </Grid>
    </Grid>
  );
};

export default HomeBackground;
