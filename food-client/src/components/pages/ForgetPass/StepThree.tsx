"use client";
import React, { ChangeEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button, Input } from "@/components";
import { Box, Container, Stack, Typography } from "@mui/material";

import Swal from "sweetalert2";

interface IStepProps {
  email: string;
  password: string;
  handleNext: () => void;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const StepThree = ({ email, password, handleChangeInput }: IStepProps) => {
  const router = useRouter();
  const savePassword = async () => {
    console.log("WORKING");
  };
  const changePassword = async () => {
    try {
      const data = await axios.put(
        "http://localhost:8080/verify/changepassword",
        {
          email,
          password,
        }
      );
      console.log("CHANGESEND", data);
      await Swal.fire({
        title: "Таны нууц үг амжилттай солигдлоо",
        text: "та шинэ нууц үгээ ашиглана нэвтэрнэ үү",
        icon: "success",
      });

      router.replace("/login");
    } catch (error) {
      console.log("ERRCahnge", error);
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
          padding: "5rem 0",
        }}
      >
        <Typography
          align="center"
          gutterBottom
          sx={{ fontSize: "28px", fontWeight: "700" }}
        >
          Шинэ нууц үг cэргээх
        </Typography>

        <Stack width="100%" sx={{ mb: "2rem" }}>
          <Input
            label="Нууц үг"
            name="password"
            onChange={handleChangeInput}
            showPassword
          />
          {/* <Input
            label="Нууц үг давтах"
            name="repassword"
            onChange={handleChangeInput}
            showPassword
          /> */}
          <Button label={"Сэргээх"} onClick={changePassword} />
        </Stack>
      </Box>
    </Container>
  );
};

export default StepThree;
