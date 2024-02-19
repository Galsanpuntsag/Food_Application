import * as React from "react";
import {
  Box,
  Button as MuiButton,
  Typography,
  Modal,
  Grid,
  Stack,
  styled,
} from "@mui/material";
import Image from "next/image";
import { Remove, Add, Close } from "@mui/icons-material";
import { Button, Input } from "../core";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CategoryOption from "./categoryOption";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 5,
  boxShadow: 22,
  p: 4,
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function FoodModal({
  handleClose,
  open,
  newFood,
  handleChange,
  handleFileChange,
  createFood,
}: any) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography variant="h3">Хоол нэмэх хэсэг</Typography>
            <MuiButton onClick={handleClose} sx={{ fontSize: 23 }}>
              X
            </MuiButton>
          </Stack>

          <Input
            name="name"
            label="Name"
            desc="Write food name"
            onChange={handleChange}
          />

          <Input
            name="price"
            label="price"
            desc="Write food price"
            onChange={handleChange}
          />
          <Input
            name="discountPrice"
            label="discountPrice"
            desc="Write food discount price"
            onChange={handleChange}
          />
          <Input
            name="description"
            label="Description"
            desc="Write food Description"
            onChange={handleChange}
          />
          <CategoryOption />
          <MuiButton
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            fullWidth
            sx={{ my: "1rem", backgroundColor: "#18ba51" }}
          >
            Upload file
            <VisuallyHiddenInput type="file" onChange={handleFileChange} />
          </MuiButton>

          <Button label="нэмэх" onClick={createFood}></Button>
        </Box>
      </Modal>
    </div>
  );
}
