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
import { Rowing } from "@mui/icons-material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { UserContext } from "@/context/userProvider";

import MyDrawer from "../DrawerFoodBasking";

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
    // vertical padding + font size from searchIcon
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
const settings = ["Бүртгэл", "Захиалга", "Хаяг", "Гарах"];

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [value, setValue] = React.useState(0);
  const { user } = useContext(UserContext);
  console.log("USER", user);

  const handleOpenNavMenu = () => {
    // setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = () => {
    // setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [drawer, setDrawer] = useState(false);

  const handleOpenDrawer = () => {
    return setDrawer(true);
  };
  const handleCloseDrawer = () => {
    return setDrawer(false);
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
            <Button
              variant="text"
              sx={{ color: "white" }}
              onClick={handleOpenDrawer}
            >
              <AddShoppingCartIcon sx={{ color: "black" }} />
              <Typography color={"black"}> Сагс</Typography>
            </Button>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{
                  p: 0,
                  color: "white",
                  display: { xs: "none", md: "flex" },
                  gap: "10px",
                }}
              >
                <Avatar
                  sx={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: "black",
                  }}
                  alt={user.name}
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
            {user ? (
              <Typography color={"black"}>{user.name}</Typography>
            ) : (
              <Typography color={"black"}>Нэвтрэх</Typography>
            )}

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
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
      <MyDrawer open={drawer} closeDrawer={handleCloseDrawer} />
    </AppBar>
  );
};
export default Header;
