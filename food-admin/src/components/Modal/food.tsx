"use client";
import React, { useState } from "react";
import {
  Box,
  Button as MuiButton,
  Typography,
  Modal,
  Grid,
  Stack,
  styled,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Image from "next/image";
import { Remove, Add, Close } from "@mui/icons-material";
import { Button, Input } from "../core";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

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
  handleChange,
  handleFileChange,
  createFood,
  categories,
}: any) {
  const [isChecked, setIsChecked] = useState(false);
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
            name="description"
            label="Description"
            desc="Write food Description"
            onChange={handleChange}
          />

          <Box>
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => {
                  setIsChecked((prev) => !prev);
                }}
              />
            </label>
            <Input
              disabled={!isChecked}
              name="discountPrice"
              label="discountPrice"
              desc="Write food discount price"
              onChange={handleChange}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={categories.name}
                label="Category"
                name="category"
                onChange={handleChange}
              >
                {isChecked ? (
                  <MenuItem key={categories[0]?._id} value={categories[0]?._id}>
                    {categories[0]?.name}
                  </MenuItem>
                ) : (
                  categories.map((e: any) => (
                    <MenuItem key={e._id} value={e._id}>
                      {e.name}
                    </MenuItem>
                  ))
                )}
              </Select>
            </FormControl>
          </Box>
          <MuiButton
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            fullWidth
            sx={{ my: "1rem", backgroundColor: "#18ba51" }}
          >
            Upload file
            <VisuallyHiddenInput
              type="file"
              name="image"
              onChange={handleFileChange}
            />
          </MuiButton>

          <Button label="нэмэх" onClick={createFood}></Button>
        </Box>
      </Modal>
    </div>
  );
}
