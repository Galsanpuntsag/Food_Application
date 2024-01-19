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
  Stack,
} from "@mui/material";

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
            <Grid xs={7}>
              <CardMedia
                component={"img"}
                height="300"
                image="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
                alt="green iguana"
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
                  Main Pizza
                </Typography>
                <Typography sx={{ color: "green" }}>10800₮</Typography>
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
                    улуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
                  </Typography>
                </Box>
                <ButtonGroup
                  orientation="vertical"
                  aria-label="vertical contained button group"
                  sx={{ gap: 4 }}
                >
                  <Typography>Тоо</Typography>

                  <ButtonGroup
                    size="small"
                    aria-label="small button group"
                    sx={{ justifyContent: "space-around" }}
                  >
                    <Button>-</Button>
                    <Typography>1</Typography>
                    <Button>+</Button>
                  </ButtonGroup>

                  <Button sx={{ background: "green" }} variant="contained">
                    Contained
                  </Button>
                </ButtonGroup>
              </Stack>
            </Grid>
          </Grid>
        </Fade>
      </Modal>
    </div>
  );
}
