"use client";
import React from "react";
import { Button, Input } from "@/components";
import {
  Box,
  Container,
  Stack,
  Typography,
  Link,
  Alert,
  Button as MuiButton,
} from "@mui/material";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import CheckIcon from "@mui/icons-material/Check";

interface State extends SnackbarOrigin {
  open: boolean;
}

const GetNewPass = () => {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto ",
          px: "2.1rem",
          maxWidth: "450px",
          height: "calc(100vh - 90px)",
        }}
      >
        <Box sx={{ width: 500 }}>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            message="I love snacks"
            key={vertical + horizontal}
            sx={{ border: 1, borderColor: "green", backgroundColor: "white" }}
          >
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
              Here is a gentle confirmation that your action was successful.
            </Alert>
          </Snackbar>
        </Box>

        <Typography
          align="center"
          gutterBottom
          sx={{ fontSize: "28px", fontWeight: "700" }}
        >
          Шинэ нууц үг зохиох
        </Typography>
        <Stack width="100%" sx={{ mb: "2rem" }}>
          <Typography> Нууц үг</Typography>
          <Input label="  Шинэ нууц үгээ оруулна уу" showPassword />

          <Typography> Нууц үг давтах</Typography>
          <Input label="  Шинэ нууц үгээ давтан оруулна уу" showPassword />
        </Stack>
        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button
            label="Үргэлжлүүлэх"
            onClick={handleClick({ vertical: "top", horizontal: "center" })}
            btnType="outlined"
          />
        </Stack>
      </Box>
    </Container>
  );
};

export default GetNewPass;
