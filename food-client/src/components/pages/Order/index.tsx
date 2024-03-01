import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  FormControl,
  Grid,
  InputLabel,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import Address from "@/components/Order/Address";
import { Food } from "@/components/Order/Food";

const Order = () => {
  return (
    <Container>
      <Grid
        container
        display={"flex"}
        justifyContent={"space-between"}
        spacing={10}
      >
        <Grid item xs={6}>
          <Address />
        </Grid>
        <Grid item xs={6}>
          <Food />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Order;
