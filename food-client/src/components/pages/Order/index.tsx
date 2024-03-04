"use client";
import { Container, Grid } from "@mui/material";
import React, { useContext } from "react";
import Address from "@/components/Order/Address";
import { Food } from "@/components/Order/Food";
import { BasketContext } from "@/context/BasketProvider";
import { useFormik } from "formik";
import { UserContext } from "@/context/userProvider";

const Order = () => {
  const { order } = useContext(UserContext);
  const { foodsInBask } = useContext(BasketContext);
  const formik = useFormik({
    onSubmit: ({
      duureg,
      khoroo,
      street,
      info,
      phone,
    }: {
      duureg: string;
      khoroo: string;
      street: string;
      info: string;
      phone: string;
    }) => {
      order(duureg, khoroo, street, info, phone);
    },
    initialValues: { duureg: "", khoroo: "", street: "", info: "", phone: "" },
  });

  return (
    <Container>
      <Grid
        container
        display={"flex"}
        justifyContent={"space-between"}
        spacing={10}
      >
        <Grid item xs={6}>
          <Address formik={formik} />
        </Grid>
        <Grid item xs={6}>
          <Food foods={foodsInBask} formik={formik} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Order;
