import React, { ChangeEvent } from "react";
import { Button, Input } from "@/components";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

interface IStepProps {
  pasword: string;
  handleNext: () => void;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const StepThree = ({ handleChangeInput }: IStepProps) => {
  const router = useRouter();
  const savePassword = async () => {
    await Swal.fire({
      title: "Таны нууц үг амжилттай солигдлоо",
      text: "та шинэ нууц үгээ ашиглан нэвтэрнэ үү",
      icon: "success",
    });
    router.replace("/login");
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto ",
          px: "2.1rem",
          maxWidth: "450px",
          padding: "5rem 0",
        }}
      >
        <Typography
          align="center"
          gutterBottom
          sx={{ fontSize: "28px", fontWeight: "700" }}
        >
          Шинэ нууц үг cэргээх
        </Typography>

        <Stack width="100%" sx={{ mb: "2rem" }}>
          <Input label="Нууц үг" onChange={handleChangeInput} showPassword />
          <Input
            label="Нууц үг давтах"
            onChange={handleChangeInput}
            showPassword
          />
          <Button label={"Сэргээх"} onClick={savePassword} />
        </Stack>
      </Box>
    </Container>
  );
};

export default StepThree;
