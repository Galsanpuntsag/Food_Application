import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SendIcon from "@mui/icons-material/Send";

import { fCurrency } from "@/utils/format-number";

import Label from "@/components/label";
import { Grid, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

// ----------------------------------------------------------------------

export default function FoodCard({ food, getFood }: any) {
  const {
    _id,
    name,
    price,
    discountPrice,
    description,
    image,
    category,
    createdAt,
  } = food;

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

  //deleteFood
  const [refresh, setRefresh] = useState(false);

  const deleteFood = async () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
    try {
      const {
        data: { food },
      } = await axios.delete("http://localhost:8080/foods/" + _id);
      console.log("DELETEDFood successful");
      !refresh;
      getFood();

      console.log("REFEREF");
    } catch (error: any) {
      alert("DaleteError" + error.message);
    }
  };

  return (
    <Card
      sx={{
        ":hover": {
          cursor: "pointer",
        },

        width: 240,
      }}
    >
      <Box sx={{ pt: "100%", position: "relative" }}>{renderImg}</Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Grid display={"flex"} justifyContent={"space-between"}>
          <Link
            color="inherit"
            sx={{ fontSize: 20 }}
            underline="hover"
            variant="subtitle2"
            noWrap
          >
            {name}
          </Link>
          <Select sx={{ width: 40, height: 20 }}>
            <MenuItem onClick={deleteFood}>
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
          fontSize={"20px"}
          fontWeight={700}
          justifyContent="space-between"
        >
          {food.price}₮
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          height={30}
          justifyContent="space-between"
        >
          {description}
        </Stack>
      </Stack>
    </Card>
  );
}
