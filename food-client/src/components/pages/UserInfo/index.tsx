"use client";
import React, { useContext } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import DrawIcon from "@mui/icons-material/Draw";
import Input from "@mui/material/Input";
import { useFormik } from "formik";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import RestoreIcon from "@mui/icons-material/Restore";
import LogoutIcon from "@mui/icons-material/Logout";

import { UserContext } from "@/context/userProvider";

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
  const { logout } = useContext(UserContext);

  const formik = useFormik({
    onSubmit: ({
      image,
      name,
      email,
      phone,
    }: {
      image: string;
      name: string;
      email: string;
      phone: string;
    }) => {},
    initialValues: {
      image: "",
      name: "",
      email: "",
      phone: "",
    },
  });
  return (
    <Container>
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        my={10}
      >
        <Box maxWidth={500}>
          {" "}
          <Stack
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box position={"relative"}>
              <Avatar
                sx={{ width: 100, height: 100, position: "relative" }}
                src="/broken-image.jpg"
              />
              <Button
                sx={{
                  position: "absolute",
                  p: 0,
                  borderRadius: "100%",
                  color: "black",
                  left: 45,
                  bottom: 8,
                }}
              >
                <DrawIcon />
                <VisuallyHiddenInput type="file" />
              </Button>
            </Box>
          </Stack>
          <Box
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
            width={450}
            maxWidth={700}
            border={1}
            sx={{ backgroundColor: "whitesmoke" }}
            borderRadius={5}
            mt={10}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <AccountCircleIcon sx={{ width: 50 }} />
              <Box>
                <Typography mt={1} fontSize={"12px"}>
                  Таний нэр
                </Typography>
                <Input
                  sx={{ mb: 1 }}
                  name="name"
                  value={formik.values?.name}
                  onChange={formik.handleChange}
                />
              </Box>
            </Box>
            <DriveFileRenameOutlineIcon />
          </Box>
          <Box
            mt={5}
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
            width={450}
            maxWidth={700}
            border={1}
            sx={{ backgroundColor: "whitesmoke" }}
            borderRadius={5}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <PhoneEnabledIcon sx={{ width: 50 }} />
              <Box>
                <Typography mt={1} fontSize={"12px"}>
                  Утасны дугаар
                </Typography>
                <Input
                  sx={{ mb: 1 }}
                  name="phone"
                  value={formik.values?.phone}
                  onChange={formik.handleChange}
                />
              </Box>
            </Box>
            <DriveFileRenameOutlineIcon />
          </Box>
          <Box
            mt={5}
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
            width={450}
            maxWidth={700}
            border={1}
            sx={{ backgroundColor: "whitesmoke" }}
            borderRadius={5}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <ForwardToInboxIcon sx={{ width: 50 }} />
              <Box>
                <Typography mt={1} fontSize={"12px"}>
                  И-мэйл хаяг
                </Typography>
                <Input
                  sx={{ mb: 1 }}
                  name="email"
                  value={formik.values?.email}
                  onChange={formik.handleChange}
                />
              </Box>
            </Box>
            <DriveFileRenameOutlineIcon />
          </Box>
          <Box
            mt={5}
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
            width={450}
            maxWidth={700}
            border={1}
            sx={{ backgroundColor: "whitesmoke" }}
            borderRadius={5}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <RestoreIcon sx={{ width: 50 }} />

              <Typography mt={1} fontSize={"12px"}>
                Захиалгийн түүх
              </Typography>
            </Box>
          </Box>
          <Box
            mt={5}
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
            width={450}
            maxWidth={700}
            border={1}
            sx={{ backgroundColor: "whitesmoke" }}
            borderRadius={5}
          >
            <Button onClick={logout}>
              <LogoutIcon sx={{ width: 50, color: "black" }} />

              <Typography mt={1} color={"black"} fontSize={"12px"}>
                Гарах
              </Typography>
            </Button>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
};

export default UserInfo;
