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

  const sendToEmail = async () => {
    try {
      const data = await axios.post("http://localhost:8080/verify/email", {
        email: user.email,
      });
      handleNext();
      console.log("datadat", data);
    } catch (error) {
      console.log("ERRRRRR", error);
      toast.error("Email илгэээхэд алдаа гарлаа.");
    }
  };

  const handleNext = async () => {
    setActiveStep((prev) => prev + 1);
    console.log("step", activeStep);
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
          handleNext={sendToEmail}
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
      {activeStep === 3 && (
        <StepThree
          email={user.email}
          password={user.password}
          handleChangeInput={handleChangeInput}
          handleNext={handleNext}
        />
      )}
    </Box>
  );
};

export default ForgetPass;
