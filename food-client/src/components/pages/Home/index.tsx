"use client";
import React from "react";
import { Grid, Button, Typography, Container, Stack } from "@mui/material";
import Foods from "@/components/Foods";
import FourState from "@/components/Home/FourState";
import ModalChooseFood from "@/components/Modal";
import BackgroundImg from "@/components/Home/BackgroundImg";

export const Home = () => {
  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <BackgroundImg />

      <FourState />

      <Foods />
      <ModalChooseFood />

      {/*  <div className="wrapper">HELLO SASS</div> */}
    </Grid>
  );
};
