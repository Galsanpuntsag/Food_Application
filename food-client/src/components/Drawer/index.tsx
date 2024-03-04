"use client";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { FaChevronLeft } from "react-icons/fa";
import { BasketContext } from "@/context/BasketProvider";
import Lottie from "lottie-react";

import emptyBasketData from "@/../../public/images/AnimationEmpty.json";

import React, { useContext } from "react";
import { DrawerCard } from "../DrawerCard";

interface IDrawerProps {
  open: boolean;
  closeDrawer: () => void;
}

const MyDrawer = ({ closeDrawer, open }: IDrawerProps) => {
  const { foodsInBask }: any = useContext(BasketContext);
  console.log("basketsssMYDARWAER", foodsInBask);

  return (
    <>
      <React.Fragment>
        <Drawer open={open} onClose={closeDrawer} anchor="right">
          <Box width={584} p={5}>
            <Box
              pb={5}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <FaChevronLeft />
              <Typography fontWeight={600}>Таны сагс</Typography>
              <Typography></Typography>
            </Box>
            <Divider />
            {!foodsInBask?.length ? (
              <Stack justifyContent={"center"} alignItems={"center"}>
                <Box
                  width={200}
                  height={200}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Lottie animationData={emptyBasketData} loop />
                </Box>
                <Typography variant="h6" align="center">
                  Хоосон байна
                </Typography>
              </Stack>
            ) : (
              <DrawerCard foodsInBask={foodsInBask} closeDrawer={closeDrawer} />
            )}
          </Box>
        </Drawer>
      </React.Fragment>
    </>
  );
};

export default MyDrawer;
