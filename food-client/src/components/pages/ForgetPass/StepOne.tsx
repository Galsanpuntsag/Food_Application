"use client";
import React, { ChangeEvent } from "react";
import axios from "axios";
import { Button, Input } from "@/components";
import { Box, Container, Stack, Typography, Link } from "@mui/material";

interface IStepProps {
  email: string;
  handleNext: () => void;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const StepOne = ({ email, handleNext, handleChangeInput }: IStepProps) => {
  console.log("EMAILLSADF", email);
  //   const handleNext = async() => {
  //    try{ const data = axios.post("http://localhost:8080/verify/sendemail", {
  //     email: user.email,
  //   });
  //   setSelected(handleNext)
  // }
  //    catch(){

  //    }
  //   }
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
          <Typography>И-мэйл</Typography>
          <Input
            label="И-мэйл хаягаа оруулна уу"
            onChange={handleChangeInput}
            name="email"
          />
        </Stack>

        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button
            label="Үргэлжлүүлэх"
            btnType="outlined"
            onClick={handleNext}
          />
        </Stack>
      </Box>
    </Container>
  );
};

export default StepOne;
