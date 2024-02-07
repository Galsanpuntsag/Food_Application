"use client";
import React, { ChangeEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button, Input } from "@/components";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import { object, string, ref } from "yup";

import Swal from "sweetalert2";

interface IStepProps {
  email: string;
  password: string;
  handleNext: () => void;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const validationSchema = object({
  password: string()
    .min(8, "Хамгийн багадаа 8 тэмдэгтээс тогтоно")
    .required("Нууц үгийг заавал оруулна уу"),
  rePassword: string()
    .oneOf([ref("password"), "Нууц үг хоорондоо таарахгүй байна"])
    .min(8, "Хамгийн багадаа 8 тэмдэгтээс тогтоно")
    .required("Нууц үгийг заавал оруулна уу"),
});

const StepThree = ({ email, password, handleChangeInput }: IStepProps) => {
  const router = useRouter();

  const formik = useFormik({
    onSubmit: ({ password, rePassword }) => {
      console.log("PAss", password);
      console.log("RePAss", rePassword);
    },
    initialValues: { password: "test", rePassword: "retest" },
    validateOnChange: false,
    validationSchema,
    validateOnBlur: false,
  });

  const savePassword = async () => {
    console.log("WORKING");
    await Swal.fire({
      title: "Таны нууц үг амжилттай солигдлоо",
      text: "та шинэ нууц үгээ ашиглана нэвтэрнэ үү",
      icon: "success",
    });
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
      savePassword();
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
          <Input
            label="Нууц үг давтах"
            name="repassword"
            onChange={handleChangeInput}
            showPassword
          />
          <Button label={"Сэргээх"} onClick={changePassword} />
        </Stack>
      </Box>
    </Container>
  );
};

export default StepThree;
