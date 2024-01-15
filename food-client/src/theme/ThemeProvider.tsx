"use client";

import React, { Children, PropsWithChildren } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { theme } from "./theme";
import CssBaseline from "@mui/material/CssBaseline";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <AppRouterCacheProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline>{children}</CssBaseline>
      </MuiThemeProvider>
    </AppRouterCacheProvider>
  );
};
