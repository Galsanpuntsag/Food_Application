"use client";
import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  Button,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

const stateCards = [
  {
    topic: "Хүргэлтийн төлөв хянах ",
    icon: <ImportContactsIcon />,
    introduce: "Захиалга бэлтгэлийн явц хянах",
  },
  {
    topic: "Шуурхай хүргэлт",
    icon: <AccessTimeIcon />,
    introduce: "Захиалга бэлтгэлийн явц хянах",
  },
  {
    topic: "Эрүүл баталгаат орц ",
    icon: <DinnerDiningIcon />,
    introduce: "Захиалга бэлтгэлийн явц хянах",
  },
  {
    topic: "Хоолны өргөн сонголт ",
    icon: <AutoStoriesIcon />,
    introduce: "Захиалга бэлтгэлийн явц хянах",
  },
];

export default function FoodState() {
  return (
    <Grid
      container
      rowSpacing={3}
      columnSpacing={{ xs: 1, sm: 2, md: 2 }}
      sx={{
        maxWidth: "100%",
        p: 10,
        boxShadow: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      {stateCards.map((stateCard, i) => (
        <Grid item xs={12} sm={6} md={2} boxShadow={2} borderRadius={2} p={2}>
          <Typography sx={{ color: "green" }}>{stateCard.icon}</Typography>
          <Box>
            <Typography sx={{ fontWeight: 900, fontSize: 15 }}>
              {stateCard.topic}
            </Typography>
            <Typography sx={{ fontWeight: 400, fontSize: 12 }}>
              {stateCard.introduce}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

// <Grid item xs={6}>
//   <Item>1</Item>
// </Grid>
// <Grid item xs={6}>
//   <Item>2</Item>
// </Grid>
// <Grid item xs={6}>
//   <Item>3</Item>
// </Grid>
// <Grid item xs={6}>
//   <Item>4</Item>
// </Grid>
