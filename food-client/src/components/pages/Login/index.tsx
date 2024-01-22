"use client";
import React from "react";
import { Button, Input } from "@/components";
import { Box, Container, Stack, Typography, Link } from "@mui/material";

const LoginPage = () => {
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
        <Typography
          align="center"
          gutterBottom
          sx={{ fontSize: "28px", fontWeight: "700" }}
        >
          Нэвтрэх
        </Typography>
        <Stack width="100%" sx={{ mb: "2rem" }}>
          <Input label="Имэйл" />
          <Input label="Нууц үг" showPassword />
          <Link
            href={"/updatepass"}
            color="black"
            underline="none"
            variant="button"
            align="right"
          >
            Нууц үг сэргээх
          </Link>
        </Stack>

        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Нэвтрэх" />
        </Stack>
        <Stack sx={{ my: "2rem" }}>
          <Typography>Эсвэл</Typography>
        </Stack>
        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Бүртгүүлэх" btnType="outlined" />
        </Stack>
      </Box>
    </Container>
  );
};

export default LoginPage;
