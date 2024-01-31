"use client";
import React from "react";
import { AppBar, Container, Grid, Typography, Box, Link } from "@mui/material";
import WhiteIcon from "../../../public/images/WhiteIcon";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import FooterIcon from "../../../public/images/FooterIcon";
import { bottom } from "@popperjs/core";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const pages = [
  "Нүүр",
  "Холбоо барих",
  "Хоолны цэс",
  "Үйлчилгээний нөхцөл",
  "Хүргэлтийн бүс",
  "Нууцлалын бодлого",
];
const apps = [
  <FaFacebook style={{ width: "30px" }} />,
  <FaInstagram />,
  <FaSquareXTwitter />,
];
// const preventDefault = () => event.preventDefault();

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Footer = () => {
  const [value, setValue] = React.useState(0);
  return (
    <AppBar
      position="relative"
      sx={{
        width: "100%",
        height: "40vh",
        background: "#18ba51",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}
    >
      <FooterIcon />
      <Container
        sx={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          sx={{
            display: { xs: "flex", md: "flex", xl: "flex" },
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Stack
            spacing={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "stretch",
              gap: "10px",
              color: "white",
              borderBottom: 1,
              borderColor: "black",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                color: "white",
              }}
            >
              <WhiteIcon /> <Typography>Food Delivery</Typography>
            </Box>
            <Grid container>
              <Grid
                item
                gap={10}
                sx={{ display: { xs: 12, sm: 6, md: "flex" } }}
              >
                {pages.map((page) => (
                  <Link href="#" color="inherit">
                    <Typography
                      sx={{ display: "flex", justifyContent: "space-around" }}
                    >
                      {page}
                    </Typography>
                  </Link>
                ))}
              </Grid>
            </Grid>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "flex", xl: "flex" },
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
              // onClick={preventDefault}
            >
              {apps.map((app) => (
                <Link href="#" color="inherit">
                  {app}
                </Link>
              ))}
            </Box>
          </Stack>
          <Stack mt={8} sx={{ boxShadow: "none", color: "white" }}>
            <Typography>
              @2024 Pinecone Foods Deliver Application LLC
            </Typography>
            <Typography>Зохиогчийн эрх хуулиар хамгаалагдсанв</Typography>
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Footer;
