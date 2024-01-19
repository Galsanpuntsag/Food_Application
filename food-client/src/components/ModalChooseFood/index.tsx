"use client";
import * as React from "react";
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
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalChooseFood() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        sx={{ boxShadow: 3, border: 1, color: "black" }}
        onClick={handleOpen}
      >
        Open modal
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
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
            <Grid xs={8}>
              <CardMedia
                component={"img"}
                height="300"
                image="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
                alt="green iguana"
              />
            </Grid>
            <Grid xs={4}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography fontSize={"25px"} fontWeight={900}>
                  Main Pizza
                </Typography>
                <Typography
                  display={"block"}
                  justifyContent={"flex-start"}
                  color={"green"}
                >
                  10800₮
                </Typography>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  
                >
                  <Typography fontSize={"17px"} fontWeight={700}>
                    Орц
                  </Typography>
                  <Typography
                    sx={{
                      background: "gray",
                      borderRadius: "10px",
                      textAlign: "center",
                      alignItems={"center"}
                    }}
                  >
                    улуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
                  </Typography>
                </Box>
                <ButtonGroup sx={{ display: "block", direction: "column" }}>
                  <Typography>Тоо</Typography>
                  <Box display={"flex"}>
                    <Button
                      sx={{
                        background: "green",
                        color: "black",
                      }}
                      size="small"
                    >
                      -
                    </Button>
                    <Typography>1</Typography>
                    <Button>+</Button>
                  </Box>
                  <Button sx={{ background: "green" }} variant="contained">
                    Contained
                  </Button>
                </ButtonGroup>
              </Box>
            </Grid>
          </Grid>
        </Fade>
      </Modal>
    </div>
  );
}
