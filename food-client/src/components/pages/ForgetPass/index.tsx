"use client";
import React from "react";
import { ChangeEvent, useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import { toast } from "react-toastify";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const ForgetPass = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [user, setUser] = useState({
    email: "",
    password: "",
    otp: "",
  });

  const handleNext = async () => {
    try {
      const data = await axios.post("http://localhost:8080/verify/sendemail", {
        email: user.email,
      });
      console.log("email", data);
      setActiveStep((prev) => prev + 1);
    } catch (error) {
      console.log("ERRRRRR", error);
      toast.error("Email илгэээхэд алдаа гарлаа.");
    }
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log("state", e.target.name, e.target.value);
  };

  return (
    <Box>
      {activeStep === 1 && (
        <StepOne
          email={user.email}
          handleNext={handleNext}
          handleChangeInput={handleChangeInput}
        />
      )}
      {activeStep === 2 && (
        <StepTwo
          email={user.email}
          otp={user.otp}
          handleNext={handleNext}
          handleChangeInput={handleChangeInput}
        />
      )}
      {activeStep === 3 && <StepThree />}
    </Box>
  );
};

export default ForgetPass;
