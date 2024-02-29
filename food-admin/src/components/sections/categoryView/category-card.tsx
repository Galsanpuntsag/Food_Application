import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { fDate } from "@/utils/format-time";
import { MenuItem, Select, Stack, TextField } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import axios from "axios";

// ----------------------------------------------------------------------
export default function CategoryCard({ category, getCategory }: any) {
  const { _id, image, name, description, createdAt } = category;

  const renderImg = (
    <Box
      component="img"
      alt={name}
      src={image}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: "cover",
        position: "absolute",
      }}
    />
  );

  const [refresh, setRefresh] = useState(false);

  const deleteCategory = async () => {
    try {
      const {
        data: { food },
      } = await axios.delete("http://localhost:8080/categories/" + _id);
      console.log("DELETEDFood successful");
      !refresh;
      getCategory();

      console.log("REFEREF");
    } catch (error: any) {
      alert("DaleteError" + error.message);
    }
  };

  const renderTitle = (
    <Link
      color="inherit"
      variant="subtitle1"
      sx={{
        fontSize: 20,
        height: 44,
        overflow: "hidden",
        WebkitLineClamp: 2,
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
      }}
    >
      {name}
    </Link>
  );

  const renderDesc = (
    <TextField
      id="outlined-multiline-static"
      label="Орц"
      multiline
      sx={{ height: 10 }}
      rows={4}
      defaultValue={description}
    />
  );

  return (
    <Card
      sx={{
        ":hover": {
          cursor: "pointer",
        },
      }}
    >
      <Box sx={{ pt: "100%", position: "relative" }}>
        {/* {product.status && renderStatus} */}

        {renderImg}
      </Box>

      <Stack spacing={1} sx={{ p: 3 }}>
        <Grid display={"flex"} justifyContent={"space-between"}>
          <Link
            color="inherit"
            underline="hover"
            fontSize={20}
            variant="subtitle2"
            noWrap
          >
            {name}
          </Link>
          <Select sx={{ width: 40, height: 20 }}>
            <MenuItem onClick={deleteCategory}>
              <DeleteIcon color={"error"} />
            </MenuItem>
            <MenuItem value={30}>
              <EditIcon />
            </MenuItem>
            <MenuItem value={30} color={"success"}>
              <SendIcon />
            </MenuItem>
          </Select>
        </Grid>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {/* {renderPrice} */}
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <TextField
            id="outlined-multiline-static"
            label="Орц"
            multiline
            rows={4}
            defaultValue={description}
          />
        </Stack>
      </Stack>
    </Card>
  );
}
