"use client";
import React, { useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Button, Input } from "@/components";
import { Box, Container, Stack, Typography, Link } from "@mui/material";
import { UserContext } from "@/context/userProvider";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string()
    .max(100, "your email address has too many character")
    .required("you must enter your email")
    .email("your email address must to be valid")
    .matches(/^[^@\s]+@[^@\s,]*/, "you only enter your email"),
  password: yup
    .string()
    .required("you must enter your password")
    .min(6, "your password must have at least 6 character!"),
});

const LoginPage = () => {
  const { user, login } = useContext(UserContext);

  const formik = useFormik({
    onSubmit: ({ email, password }: { email: string; password: string }) => {
      login(email, password);
      console.log("EmailLLLLLL", user.password);
      console.log("EmailLLLLLLemail", user.email);
    },
    initialValues: {
      email: user.email,
      password: user.password as string,
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
  });
  //endformik
  // const sigin = async () => {
  //   try {
  //     const data = await axios.post("http://localhost:8080/auth/signin", {});
  //   } catch (error) {
  //     console.log("atlogin", error);
  //   }
  // };
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
          <Input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            errorText={formik.errors.email}
            label="Имэйл"
          />
          <Input
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            errorText={formik.errors.password}
            label="Нууц үг"
            showPassword
          />
          <Link
            href={"/updatepass"}
            color="red"
            underline="none"
            variant="button"
            align="right"
          >
            Нууц үг сэргээх
          </Link>
        </Stack>

        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Нэвтрэх" onClick={formik.handleSubmit} />
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
