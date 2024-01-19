"use client";
import * as React from "react";
import {
  Card,
  Box,
  ButtonGroup,
  Grid,
  CardMedia,
  Stack,
  Drawer,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const style = {
  position: "absolute",
  top: "22%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 1,
  borderRadius: "20px",
};

export default function DrawerFoodBasking() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 500 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box display={"flex"}>
        <Button>
          <ArrowBackIosIcon />
        </Button>
        <Typography fontSize={20} mt={1} fontWeight={900}>
          Таний сагс
        </Typography>
      </Box>

      <Grid container xs={12} spacing={2} sx={style}>
        <Grid xs={6}>
          <CardMedia
            component={"img"}
            height="200"
            sx={{ borderRadius: "10px" }}
            image="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
            alt="green iguana"
          />
        </Grid>
        <Grid
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            p: "3px",
          }}
        >
          <Stack display={"flex"}>
            <Typography fontSize={"18px"} fontWeight={600}>
              Main Pizza
            </Typography>
            <Typography sx={{ color: "green" }}>10800₮</Typography>
            <Box>
              <Typography fontSize={"15px"} fontWeight={600}>
                Орц
              </Typography>
              <Typography
                sx={{
                  background: "#e1f5fe",
                  borderRadius: "10px",
                  textAlign: "center",
                  fontSize: "12px",
                }}
              >
                улуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
              </Typography>
            </Box>
            <ButtonGroup
              orientation="vertical"
              aria-label="vertical contained button group"
              sx={{ gap: "3px" }}
            >
              <Typography fontSize={"15px"} fontWeight={600}>
                Тоо
              </Typography>

              <ButtonGroup
                variant="outlined"
                aria-label="outlined button group"
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

      <Divider />
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
