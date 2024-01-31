"use client";
import React, { useContext } from "react";
import { Button, Input } from "@/components";
import { Box, Container, Stack, Typography } from "@mui/material";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import { UserContext, UserProvider } from "@/context/userProvider";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup.string().min(2).max(20).required("your name must have "),
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
  rePassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), "your password no match"]),
});

const SignUpPage = () => {
  const { user } = useContext(UserContext);
  console.log("USERSIGN", user.name);
  //formik
  const formik = useFormik({
    onSubmit: ({ name, email, password }) => {
      console.log("NAME", name);
      console.log("Email", email);
      console.log("Pass", password);
    },
    initialValues: {
      name: user.name,
      email: user.email,
      password: user.password,
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
  });
  //endformik
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
          <Input
            label="Нэрээ оруулна уу"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            errorText={formik.errors.name}
          />
          <Typography>И-мэйл</Typography>
          <Input
            label="И-мэйл хаягаа оруулна уу"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            errorText={formik.errors.email}
          />
          <Typography>Нууц үг</Typography>
          <Input
            label="Нууц үгээ оруулна уу"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            errorText={formik.errors.password}
            showPassword
          />
          <Typography>Нууц үг давтах</Typography>
          <Input
            label="Нууц үгээ оруулна уу"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            errorText={formik.errors.password}
            showPassword
          />
        </Stack>

        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Typography sx={{ fontSize: "18px", fontWeight: 500, mb: 3 }}>
            <FilterDramaIcon sx={{ mt: 5, mr: 4, ml: 2 }} />
            Үйлчилгээний нөхцөл зөвшөөрөх
          </Typography>
        </Stack>
        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Бүртгүүлэх" onClick={formik.handleSubmit} />
        </Stack>
      </Box>
    </Container>
  );
};

export default SignUpPage;
