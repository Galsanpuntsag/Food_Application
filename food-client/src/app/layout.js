"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./globals.css");
var theme_1 = require("../theme");
function RootLayout(_a) {
    var children = _a.children;
    return (<html lang="en">
      <body>
        <theme_1.ThemeProvider>{children}</theme_1.ThemeProvider>
      </body>
    </html>);
}
exports.default = RootLayout;
