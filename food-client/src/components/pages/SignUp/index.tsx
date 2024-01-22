"use client";
import React from "react";
import { Button, Input } from "@/components";
import { Box, Container, Stack, Typography } from "@mui/material";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";

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
          Бүртгүүлэх
        </Typography>
        <Stack width="100%">
          <Typography>Нэр</Typography>
          <Input label="Нэрээ оруулна уу" />
          <Typography>И-мэйл</Typography>
          <Input label="И-мэйл хаягаа оруулна уу" />
          <Typography>Нууц үг</Typography>
          <Input label="Нууц үгээ оруулна уу" showPassword />
          <Typography>Нууц үг давтах</Typography>
          <Input label="Нууц үгээ оруулна уу" showPassword />
        </Stack>

        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Typography sx={{ fontSize: "18px", fontWeight: 500, mb: 3 }}>
            <FilterDramaIcon sx={{ mt: 5, mr: 4, ml: 2 }} />
            Үйлчилгээний нөхцөл зөвшөөрөх
          </Typography>
        </Stack>
        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Бүртгүүлэх" btnType="outlined" />
        </Stack>
      </Box>
    </Container>
  );
};

export default LoginPage;
