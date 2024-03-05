"use client";
import React from "react";
import { Avatar, Button, Container, Grid, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import DrawIcon from "@mui/icons-material/Draw";
import { Input } from "@/components";
import { useFormik } from "formik";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const UserInfo = () => {
  const formik = useFormik({
    onSubmit:( {
      image,
      name,
      email,
      phone,
    }: { 
      image: string
      name: string
      email: string
      phone: string}) => {},
      initialValues: { 
         image: "",
        name: "",
        email: "",
        phone: "",}
  });
  return (
    <Container>
      <Grid display={"flex"} justifyContent={"center"}>
        {" "}
        <Stack position={"relative"}>
          <Avatar sx={{ width: 100, height: 100 }} src="/broken-image.jpg" />
          <Button
            sx={{
              position: "absolute",
              p: 0,
              borderRadius: "100%",
              color: "#18ba51",
              left: 45,
              bottom: 8,
            }}
          >
            <DrawIcon />
            <VisuallyHiddenInput type="file" />
          </Button>
        </Stack>
        <Stack>
          <Input
            label="Нэмэлт мэдээлэл"
            name="info"
            value={formik.values?.info}
            onChange={formik.handleChange}
          />
        </Stack>
        <Stack>
          <Input
            label="Нэмэлт мэдээлэл"
            name="info"
            value={formik.values?.info}
            onChange={formik.handleChange}
          />
        </Stack>
        <Stack>
          <Input
            label="Нэмэлт мэдээлэл"
            name="info"
            value={formik.values?.info}
            onChange={formik.handleChange}
          />
        </Stack>
        <Stack>
          <Input
            label="Нэмэлт мэдээлэл"
            name="info"
            value={formik.values?.info}
            onChange={formik.handleChange}
          />
        </Stack>
      </Grid>
    </Container>
  );
};

export default UserInfo;
