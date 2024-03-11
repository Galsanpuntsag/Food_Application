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

export default function FourState() {
  return (
 <Container>
     <Grid container margin={3}>
      {stateCards.map((cards) => (
        <Grid
          item
          // display={"flex"}
          // alignItems={"center"}
          // justifyContent="space-between"
          xs={12}
          sm={6}
          md={3}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="self-start"
            pl={5}
            flexDirection={"column"}
            width="83%"
            height="100px"
            boxShadow={2}
            borderRadius={2}
            m={2} // add margin for spacing between boxes
          >
            <Typography sx={{ color: "green" }}>{cards.icon}</Typography>

            <Box>
              <Typography sx={{ fontWeight: 900, fontSize: 15 }}>
                {cards.topic}
              </Typography>
              <Typography sx={{ fontWeight: 400, fontSize: 12 }}>
                {cards.introduce}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
 </Container>
  );
}
