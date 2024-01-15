"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var material_1 = require("@mui/material");
function Home() {
    return (<main>
      Home page
      <material_1.Grid container>
        <material_1.Grid item xs={12} md={8} sx={{ background: "teal" }}>
          <material_1.Typography variant="h1">Welcome Mui FrameWork</material_1.Typography>
        </material_1.Grid>
        <material_1.Grid item xs={12} md={4}>
          <material_1.Button variant="contained" sx={{ background: "red" }}>
            Containedaasa
          </material_1.Button>
        </material_1.Grid>
      </material_1.Grid>
    </main>);
}
exports.default = Home;
