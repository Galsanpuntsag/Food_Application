import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Header />
        </Grid>
        <Grid item xs={12} md={12}>
          <Footer />
        </Grid>
      </Grid>
    </main>
  );
}
