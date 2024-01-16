"use client";
import React from "react";
import { AppBar, Container, Typography, Box, Link } from "@mui/material";
import Logo from "../../../public/images/index";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import FooterIcon from "../../../public/images/FooterIcon";
import { bottom } from "@popperjs/core";
const pages = [
  "Нүүр",
  "Холбоо барих",
  "Хоолны цэс",
  "Үйлчилгээний нөхцөл",
  "Хүргэлтийн бүс",
  "Нууцлалын бодлого",
];
const apps = [<FaFacebook />, <FaInstagram />, <FaSquareXTwitter />];
const preventDefault = (event) => event.preventDefault();

const Footer = () => {
  const [value, setValue] = React.useState(0);
  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ background: "#4caf50" }}>
        <FooterIcon />
        <Typography
          variant="h1"
          component="b"
          sx={{
            text: "center",
          }}
        >
          <Logo /> <Typography>Food Delivery</Typography>
        </Typography>
        <Box
          sx={{
            typography: "body1",
            "& > :not(style) ~ :not(style)": {
              ml: 2,
            },
            flexGrow: 1,
            display: { xs: "flex", md: "flex" },
          }}
          onClick={preventDefault}
        >
          {pages.map((page) => (
            <Link href="#" color="inherit">
              {page}{" "}
            </Link>
          ))}
        </Box>
        <Box
          sx={{
            typography: "body1",
            "& > :not(style) ~ :not(style)": {
              ml: 2,
            },
            flexGrow: 1,
            display: { xs: "flex", md: "flex" },
          }}
          onClick={preventDefault}
        >
          {apps.map((app) => (
            <Link href="#" color="inherit">
              {app}
            </Link>
          ))}
        </Box>
        <Typography>@2024 Pinecone Foods Deliver Application LLC</Typography>
        <Typography>Зохиогчийн эрх хуулиар хамгаалагдсанв</Typography>
      </Container>
    </AppBar>
  );
};

export default Footer;
