"use client";
import React, { ChangeEvent } from "react";
import { Button, Input } from "@/components";
import { Box, Container, Stack, Typography, Link } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
interface IStepProps {
  email: string;
  otp: string;
  handleNext: () => void;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const StepTwo = ({ email, otp, handleNext, handleChangeInput }: IStepProps) => {
  const SendToOtp = async () => {
    try {
      const data = await axios.post("http://localhost:8080/verify/otp", {
        email,
        otp,
      });
      console.log("SENFOTPEMAil", email, otp);
      handleNext();
    } catch (error) {
      toast.error("OTP failed to");
    }
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
        <Typography
          align="center"
          gutterBottom
          sx={{ fontSize: "28px", fontWeight: "700" }}
        >
          Нууц үг сэргээх
        </Typography>
        <Stack width="100%" sx={{ mb: "2rem" }}>
          <Typography>
            Таны {email} хаяг руу сэргээх код илгээх болно.
          </Typography>
          <Typography> Нууц үг сэргээх код</Typography>
          <Input
            label="кодыг оруулна уу"
            name="otp"
            onChange={handleChangeInput}
            showPassword
          />
        </Stack>

        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Үргэлжлүүлэх" btnType="outlined" onClick={SendToOtp} />
        </Stack>
      </Box>
    </Container>
  );
};

export default StepTwo;
