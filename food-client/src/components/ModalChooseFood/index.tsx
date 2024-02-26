"use client";
import React, { useContext } from "react";
import { useState } from "react";
import {
  Grid,
  Backdrop,
  Box,
  Modal,
  Fade,
  Button,
  CardMedia,
  Typography,
  ButtonGroup,
  Stack,
} from "@mui/material";

import MyDrawer from "../DrawerFoodBasking";
import { Add, Remove } from "@mui/icons-material";
import { BasketContext } from "@/context/BasketProvider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
};

export default function ModalChooseFood({ open, handleCloseModal, food }: any) {
  const { addBasket, loading } = useContext(BasketContext);
  const [count, setCount] = React.useState(0);

  const sendFoodBasket = () => {
    addBasket(food, count);
    console.log("SGSG");
    handleCloseModal();
  };

  const min = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  const add = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleCloseModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Grid container xs={12} spacing={2} sx={style}>
            <Grid xs={7}>
              <CardMedia
                component={"img"}
                height="300"
                alt="green iguana"
                image={food?.image}
              />
            </Grid>
            <Grid
              xs={5}
              sx={{
                display: "flex",
                justifyContent: "center",
                p: "15px",
                boxShadow: "",
              }}
            >
              <Stack spacing={2} display={"flex"}>
                <Typography fontSize={"25px"} fontWeight={900}>
                  {food?.name}
                </Typography>
                <Typography sx={{ color: "green" }}>{food?.price}₮</Typography>
                <Box>
                  <Typography fontSize={"17px"} fontWeight={700}>
                    Орц
                  </Typography>
                  <Typography
                    sx={{
                      background: "#e1f5fe",
                      borderRadius: "10px",
                      textAlign: "center",
                    }}
                  >
                    {food?.description}
                  </Typography>
                </Box>

                <Typography variant="h6" fontWeight={900}>
                  Тоо
                </Typography>

                <div>
                  <Button onClick={min}>
                    <Remove
                      sx={{
                        bgcolor: "#18BA51",
                        color: "white",
                        width: "70%",
                        height: "30px",
                        borderRadius: 2,
                      }}
                    />
                  </Button>
                  <input
                    type="text"
                    value={count}
                    style={{
                      width: "60px",
                      border: "none",
                      textAlign: "center",
                      paddingTop: 4,
                      paddingBottom: 4,
                      fontWeight: 600,
                      fontSize: 16,
                    }}
                  />
                  <Button onClick={add}>
                    <Add
                      sx={{
                        bgcolor: "#18BA51",
                        color: "white",
                        width: "70%",
                        height: "30px",
                        borderRadius: 2,
                      }}
                    />
                  </Button>
                </div>
                <Button
                  sx={{ background: "green" }}
                  variant="contained"
                  onClick={sendFoodBasket}
                >
                  Contained
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Fade>
      </Modal>
    </div>
  );
}
