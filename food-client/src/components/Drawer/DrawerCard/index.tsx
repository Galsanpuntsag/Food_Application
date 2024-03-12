import * as React from "react";
import { useRouter } from "next/navigation";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { Card } from "@/components/Drawer/DrawerCard/Card";
import { Button } from "../..";
import { relative } from "path";
import Order from "../../pages/Order";
import { toast } from "react-toastify";

export const DrawerCard = ({ foodsInBask, closeDrawer }: any) => {
  console.log("!!!!!!!", foodsInBask);
  const router = useRouter();
  const [initial, setInitial] = React.useState(0);
  const goToOrder = () => {
    if (!foodsInBask?.length) {
      toast.error("Сагсанд хоол байхгүй байна.");
    } else {
      closeDrawer();
      router.replace("/order");
      console.log("hoolnuud", foodsInBask);
    }
  };

  return (
    <Grid container justifyContent={"space-between"}>
      <Grid container justifyContent={"center"}>
        {foodsInBask?.map((foods: any) => (
          <Card key={foods._id} foods={foods} />
        ))}
      </Grid>
      <Divider />
      <Grid
        width={"100%"}
        container
        position={"absolute"}
        bottom={0}
        left={0}
        boxShadow={3}
        bgcolor={"white"}
        py={5}
        px={5}
        mt={5}
      >
        <Grid
          item
          xs={6}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          pl={5}
        >
          <Typography variant="body1">Нийт төлөх дүн</Typography>
          <Typography variant="h6" fontWeight={600}>
            {/* {basket?.totalPrice.toLocaleString()}₮ */}
            {foodsInBask
              ?.map((food: any) => food.food?.price * food?.quantity)
              ?.reduce((sum: any, une: any) => sum + une, initial)}
            ₮
          </Typography>
        </Grid>
        <Grid item sx={{ color: "#18ba51" }} xs={6}>
          <Button
            label={"Захиалах"}
            onClick={() => {
              goToOrder();
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
