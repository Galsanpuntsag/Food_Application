import * as React from "react";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { Card } from "@/components/DrawerCard/Card";
import { Button } from "..";

export const DrawerCard = ({ basket }: any) => {
  return (
    <Grid
      container
      direction={"column"}
      height={"100%"}
      width={"100%"}
      justifyContent={"space-between"}
    >
      <Grid item>
        <Box alignSelf={"center"} width={"100%"} overflow={"auto"}>
          {basket?.foods?.map((food: any) => (
            <Card key={food._id} selectedFood={food} />
          ))}
        </Box>
        <Divider />
      </Grid>
      <Grid
        width={"100%"}
        container
        bottom={0}
        boxShadow={3}
        bgcolor={"white"}
        py={10}
        px={5}
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
          </Typography>
        </Grid>
        <Grid item sx={{ backgroundColor: "#18ba51" }} xs={6}>
          <Button label={"Захиалах"} onClick={() => {}} />
        </Grid>
      </Grid>
    </Grid>
  );
};
