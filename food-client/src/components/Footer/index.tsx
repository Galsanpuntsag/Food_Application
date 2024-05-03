"use client";
import React from "react";
import { AppBar, Container, Grid, Typography, Box, Link } from "@mui/material";
import WhiteIcon from "../../../public/images/WhiteIcon";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Stack from "@mui/material/Stack";

const pages = [
  "Нүүр",
  "Холбоо барих",
  "Хоолны цэс",
  "Үйлчилгээний нөхцөл",
  "Хүргэлтийн бүс",
  "Нууцлалын бодлого",
];
const apps = [
  <FaFacebook key="facebook" style={{ width: "30px" }} />,
  <FaInstagram key="instagram" />,
  <FaTwitter key="twitter" />,
];

const Footer = () => {
  return (
    <AppBar
      position="relative"
      sx={{
        width: "100%",
        height: "60vh",
        background: "#18ba51",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}
    >
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
                  <Link key={page} href="#" color="inherit">
                    <Typography>{page}</Typography>
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
            >
              {apps.map((app) => (
                <Link key={app.key} href="#" color="inherit">
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
