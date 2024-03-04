"use client";
import { Container, Grid } from "@mui/material";
import React, { useContext } from "react";
import Address from "@/components/Order/Address";
import { Food } from "@/components/Order/Food";
import { BasketContext } from "@/context/BasketProvider";

const Order = () => {
  const { foodsInBask } = useContext(BasketContext);

  return (
    <Container>
      <Grid
        container
        display={"flex"}
        justifyContent={"space-between"}
        spacing={10}
      >
        <Grid item xs={6}>
          <Address />
        </Grid>
        <Grid item xs={6}>
          <Food foods={foodsInBask} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Order;
