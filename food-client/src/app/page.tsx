import React from "react";
import { Grid, Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      Home page
      <Grid container>
        <Grid item xs={12} md={8} sx={{ background: "teal" }}>
          <Typography variant="h1">Welcome Mui FrameWork</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Button variant="contained" sx={{ background: "red" }}>
            Containedaasa
          </Button>
        </Grid>
      </Grid>
    </main>
  );
}
