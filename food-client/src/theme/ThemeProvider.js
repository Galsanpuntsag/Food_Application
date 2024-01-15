"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = void 0;
var react_1 = require("react");
var material_1 = require("@mui/material");
var v13_appRouter_1 = require("@mui/material-nextjs/v13-appRouter");
var theme_1 = require("./theme");
var CssBaseline_1 = require("@mui/material/CssBaseline");
var ThemeProvider = function (_a) {
    var children = _a.children;
    return (<v13_appRouter_1.AppRouterCacheProvider>
      <material_1.ThemeProvider theme={theme_1.theme}>
        <CssBaseline_1.default>{children}</CssBaseline_1.default>
      </material_1.ThemeProvider>
    </v13_appRouter_1.AppRouterCacheProvider>);
};
exports.ThemeProvider = ThemeProvider;
