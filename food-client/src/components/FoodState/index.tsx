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
    <Box
      sx={{
        width: "100%",
        gap: 15,
        display: "flex",
        justifyContent: "center ",
        alignItems: "center",
        p: "20px",
      }}
    >
      {stateCards.map((stateCard, i) => (
        <Box sx={{ gap: 30, p: "15px", boxShadow: 3, borderRadius: "10px" }}>
          <Typography sx={{ color: "green" }}>{stateCard.icon}</Typography>
          <Box>
            <Typography sx={{ fontWeight: 900, fontSize: 18 }}>
              {stateCard.topic}
            </Typography>
            <Typography sx={{ fontWeight: 400, fontSize: 12 }}>
              {stateCard.introduce}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
