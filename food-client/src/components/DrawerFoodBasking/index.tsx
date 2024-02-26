"use client";
import { Box, Button, Divider, Drawer, Typography } from "@mui/material";
import { FaChevronLeft } from "react-icons/fa";
import { BasketContext } from "@/context/BasketProvider";

import React, { useContext } from "react";
import { DrawerCard } from "./DrawerCard";

interface IDrawerProps {
  open: boolean;
  closeDrawer: () => void;
}

const MyDrawer = ({ closeDrawer, open }: IDrawerProps) => {
  const { baskets } = useContext(BasketContext);
  console.log("basketsss", baskets);

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
            {baskets.map((basket: any) => {
              return <DrawerCard basket={basket} />;
            })}
          </Box>
        </Drawer>
      </React.Fragment>
    </>
  );
};

export default MyDrawer;
