"use client";
import React from "react";
import { Button, Input } from "@/components";
import { Box, Container, Stack, Typography, Link } from "@mui/material";

const NewPassword = () => {
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
          Нууц үг сэргээх
        </Typography>
        <Stack width="100%" sx={{ mb: "2rem" }}>
          <Typography>
            Таны example@pinecone.mn хаяг руу сэргээх код илгээх болно.
          </Typography>
          <Typography> Нууц үг сэргээх код</Typography>
          <Input label="кодыг оруулна уу" showPassword />
        </Stack>

        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Үргэлжлүүлэх" btnType="outlined" />
        </Stack>
      </Box>
    </Container>
  );
};

export default NewPassword;
