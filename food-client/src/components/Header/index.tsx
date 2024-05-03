"use client";
import React, { useState, useContext } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  InputBase,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../../public/images";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { useRouter } from "next/navigation";

import { UserContext } from "@/context/userProvider";

import AtDrawer from "./AtDrawer";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const pages = [
  { text: "Нүүр", link: "home" },
  { text: "Хоолны цэс", link: "menu" },
  { text: "Хүргэлтийн бүс", link: "area" },
];

export const Header = () => {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [value, setValue] = React.useState(0);
  const { user } = useContext(UserContext);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const containerStyle = {
    display: "flex",
    justifyContext: "center",
    alignItems: "center",
    gap: "20px",
  };

  return (
    <AppBar position="static" sx={{ background: "#ffffff", boxShadow: "none" }}>
      <Container
        maxWidth="xl"
        sx={{ display: { xl: { maxWidth: "xl" } }, color: "black" }}
      >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 5,
              mt: 1,
              width: "30px",
            }}
          >
            <Logo />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                gap: 20,
                fontSize: 18,
                fontWeight: 550,
                color: "black",
              },
            }}
          >
            {pages.map((page) => (
              <Link href={"/" + page.link} color="black" underline="none">
                {page.text}
              </Link>
            ))}
          </Box>

          <Box sx={containerStyle}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>

              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                sx={{
                  border: 1,
                  borderColor: "text.primary",
                  borderRadius: "10px",
                }}
              />
            </Search>
            <AtDrawer />
            <Tooltip
              title="Open settings"
              onClick={() => router.replace("/user")}
            >
              <IconButton
                sx={{
                  p: 0,
                  color: "white",
                  display: { xs: "flex", md: "flex" },
                }}
              >
                <Avatar
                  sx={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: "black",
                    display: { xs: "flex", md: "flex" },
                  }}
                  alt={user?.name}
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>

            {user ? (
              <Typography
                color={"black"}
                sx={{ display: { xs: "none ", md: "flex" } }}
              >
                {user?.name}
              </Typography>
            ) : (
              <Button
                onClick={() => router.replace("/login")}
                sx={{ color: "black" }}
              >
                Нэвтрэх
              </Button>
            )}

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
