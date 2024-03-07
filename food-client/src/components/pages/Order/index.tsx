"use client";
import { Container, Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import { BasketContext } from "@/context/BasketProvider";
import { useFormik } from "formik";
import * as yup from "yup";
import { UserContext } from "@/context/userProvider";
import axios from "axios";
import { toast } from "react-toastify";
import Address from "@/components/Order/Address";
import { Food } from "@/components/Order/Food";

const validationSchema = yup.object({
  duureg: yup.string().required("Zaaval buglunu"),
});

const Order = () => {
  const { token } = useContext(UserContext);
  const { foodsInBask } = useContext(BasketContext);

  console.log("foodsInBask___", foodsInBask);

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
    validationSchema,
  });

  const [initial, setInitial] = useState(0);

  const totalPrice = foodsInBask
    ?.map((foods: any) => foods.food.price * foods.quantity)
    ?.reduce((sum: any, une: any) => sum + une, initial);
  console.log("TOTOTO", totalPrice);

  const order = async (
    duureg: string,
    khoroo: string,
    street: string,
    info: string,
    phone: string
  ) => {
    console.log("suureg", duureg);
    console.log("suureg", foodsInBask);
    try {
      const data = await axios.post(
        "http://localhost:8080/order",
        {
          basket: { foodsInBask, totalPrice },
          address: { duureg, khoroo, street, info, phone },
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Хоол амжилттай захиалсан.");
    } catch (error) {}
  };

  return (
    <Container>
      <Grid
        container
        display={"flex"}
        justifyContent={"space-between"}
        spacing={10}
      >
        <Grid item xs={6}>
          <Address
            values={formik.values}
            errors={formik.errors}
            handleChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Food foods={foodsInBask} totalPrice={totalPrice} formik={formik} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Order;
