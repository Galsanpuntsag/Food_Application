"use client";
import * as React from "react";
import { ReactNode } from "react";
import { Button as MuiButton, Stack } from "@mui/material";

interface IButtonProps {
  label?: ReactNode;
  disabled?: boolean;
  btnType?: "contained" | "outlined" | "text";
  onClick?: () => void;
}

export const Button = ({
  label,
  disabled = false,
  btnType = "contained",
  onClick,
}: IButtonProps) => {
  return (
    <Stack direction="row">
      <MuiButton
        onClick={onClick}
        color="primary"
        variant={btnType}
        sx={{
          p: 2,
          fontSize: "1rem",
          fontWeight: 600,
          width: 1000,
          color:
            btnType === "outlined" || btnType === "text" ? "#18ba51" : "white",
          border: btnType === "outlined" ? 1 : 0,
          borderColor: btnType === "outlined" ? "#18ba51" : "",
        }}
        disabled={disabled}
        size="medium"
      >
        {label}
      </MuiButton>
    </Stack>
  );
};