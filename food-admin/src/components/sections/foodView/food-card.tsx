import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// import { faEllipsisV } from "@fortawesome/free-solid-svg-icons/faEllipsisV";
// import { faInfo } from "@fortawesome/free-solid-svg-icons/faInfo";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SendIcon from "@mui/icons-material/Send";

import { fCurrency } from "@/utils/format-number";

import Label from "@/components/label";
import {
  Button,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

// ----------------------------------------------------------------------

export default function FoodCard({ food }: any) {
  const {
    name,
    price,
    discountPrice,
    description,
    image,
    category,
    createdAt,
  } = food;
  // const renderStatus = (
  //   <Label
  //     variant="filled"
  //     color={(product.status === "sale" && "error") || "info"}
  //     sx={{
  //       zIndex: 9,
  //       top: 16,
  //       right: 16,
  //       position: "absolute",
  //       textTransform: "uppercase",
  //     }}
  //   >
  //     {product.status}
  //   </Label>
  // );

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

  const renderPrice = (
    <Typography variant="subtitle1">
      <Typography
        component="span"
        variant="body1"
        sx={{
          color: "text.disabled",
          textDecoration: "line-through",
        }}
      >
        {food.priceSale && fCurrency(food.priceSale)}
      </Typography>
      &nbsp;
      {fCurrency(food.price)}
    </Typography>
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

      <Stack spacing={2} sx={{ p: 3 }}>
        <Grid display={"flex"} justifyContent={"space-between"}>
          <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
            {name}
          </Link>
          <Select sx={{ width: 40, height: 20 }}>
            <MenuItem>
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
          {renderPrice}
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
