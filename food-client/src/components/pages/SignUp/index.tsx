"use client";
import React, { useContext } from "react";
import { Button, Input } from "@/components";
import { Box, Container, Stack, Typography } from "@mui/material";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import { UserContext } from "@/context/userProvider";
import { useFormik } from "formik";
import * as yup from "yup";

const SignUpPage = () => {
  const { login, user } = useContext(UserContext);
  const validationSchema = yup.object({
    name: yup
      .string()
      .min(2, "Таний нэр 2-оос их үсэгтэй байна. ")
      .max(26, "Таний нэр 26-аас бага үсэгтэй байна.")
      .required("Та  нэрээ бөглөнө үү "),
    email: yup
      .string()
      .max(100, "Таний и-мэйл 100-аас бага үсэгтэй байна.")
      .required("Та и-мэйл хаягаа оруулна уу")
      .email("Хүчинтэй и-мэйл хаяг байх ёстой."),
    address: yup.string().required("Хаягийг заавал бөглөнө үү."),
    password: yup
      .string()
      .required("Та пасвортаа бөглөнө үү")
      .min(6, "Таний пасвортийн тэмдэгдүүт багадаа 6 байна."),
    rePassword: yup
      .string()
      .required("Та пасвортаа давтан бөглөнө үү ")
      .oneOf([
        yup.ref("password"),
        "Таний пасвортууд хоорондоо тохирохгүй байнй.",
      ]),
  });
  //formik
  const formik = useFormik({
    onSubmit: ({ email, password, name }) => {
      // login(email, password);
      console.log("NAme", name);
      console.log("NAme", email);
      console.log("NAme", password);
    },

    initialValues: {
      name: user.name,
      email: user.email,
      address: user.address,
      password: user.password,
      rePassword: user.rePassword,
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
  });
  //endformik
  return (
    <Container sx={{ my: "5rem" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto ",
          maxWidth: "450px",
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
          <Typography>Хаяг</Typography>
          <Input
            label="Хаягаа оруулна уу"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            errorText={formik.errors.address}
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
            name="rePassword"
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            errorText={formik.errors.rePassword}
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
          <Button
            label="Бүртгүүлэх"
            btnType="outlined"
            onClick={formik.handleSubmit}
          />
        </Stack>
      </Box>
    </Container>
  );
};

export default SignUpPage;
