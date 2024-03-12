"use client";

import React, { ChangeEvent, useState } from "react";
import {
  FormLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface IInputProps {
  name?: string;
  label: string;
  value?: string;
  desc?: string;
  readOnly?: boolean;
  disabled?: boolean;
  errorText?: string | undefined;
  showPassword?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  label,
  showPassword = false,
  onChange,
  name,
  desc,
  readOnly,
  value,
  errorText,
  disabled,
}: IInputProps) => {
  const [isShowPassword, setIsShowPassword] = useState(showPassword);
  return (
    <>
      <FormControl sx={{ my: "1rem" }} variant="outlined" fullWidth>
        <FormLabel sx={{ my: "2px", color: "black" }}></FormLabel>
        <OutlinedInput
          sx={{ background: "#ECEDf0" }}
          name={name}
          value={value}
          readOnly={readOnly}
          disabled={disabled}
          onChange={onChange}
          placeholder={desc}
          type={isShowPassword ? "password" : "text"}
          endAdornment={
            showPassword && (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setIsShowPassword(!isShowPassword);
                  }}
                >
                  {isShowPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }
        />
        <FormHelperText error={errorText ? true : false}>
          {errorText}
        </FormHelperText>
      </FormControl>
    </>
  );
};
