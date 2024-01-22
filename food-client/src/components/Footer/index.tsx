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
        height: "35vh",
        background: "#18ba51",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${"/images/home.png"})`,
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
          spacing={4}
          sx={{
            display: { xs: "flex", md: "flex", xl: "flex" },
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            mt: "50px",
          }}
        >
          <Stack
            spacing={2}
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
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 3, sm: 2, md: 4 }}
            >
              <Grid>
                {pages.map((page) => (
                  <Link href="#" color="inherit">
                    <Typography
                      sx={{ display: "flex", justifyContent: "space-around" }}
                    >
                      {pages}
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
          <Box sx={{ boxShadow: "none", color: "white" }}>
            <Typography>
              @2024 Pinecone Foods Deliver Application LLC
            </Typography>
            <Typography>Зохиогчийн эрх хуулиар хамгаалагдсанв</Typography>
          </Box>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Footer;
