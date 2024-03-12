"use client";

import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LoadingButton from "@mui/lab/LoadingButton";
import { alpha, useTheme } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";

import { useRouter } from "next/navigation";
import * as yup from "yup";

import { bgGradient } from "@/theme/css";

import Logo from "@/components/logo";
import Iconify from "@/components/iconify";
import { useFormik } from "formik";
import { AuthContext } from "@/context/authProvider";
import { Button, Divider } from "@mui/material";
import { Input } from "@/components/core";

// ----------------------------------------------------------------------

const validationSchema = yup.object({
  email: yup
    .string()
    .max(100, "your email address has too many character")
    .required("you must enter your email")
    .email("your email address must to be valid")
    .matches(/^[^@\s]+@[^@\s,]*/, "you only enter your email"),
  password: yup
    .string()
    .required("you must enter your password")
    .min(6, "your password must have at least 6 character!"),
});

export default function LoginView() {
  const { login } = useContext(AuthContext);
  const theme = useTheme();

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    router.push("/dashboard");
  };

  const formik = useFormik({
    onSubmit: ({ email, password }: { email: string; password: string }) => {
      login(email, password);
      console.log("Email", email, password);
    },
    initialValues: {
      email: "",
      password: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
  });

  const renderForm = (
    <>
      <Stack spacing={3}>
        <Input
          name="email"
          value={formik.values.email}
          label="Email address"
          errorText={formik.errors.email}
          onChange={formik.handleChange}
        />

        <Input
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          errorText={formik.errors.password}
          label="Нууц үг"
          showPassword
        />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        sx={{ my: 3 }}
      >
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={() => formik.handleSubmit}
      >
        Login
      </LoadingButton>
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: "/assets/background/overlay_4.jpg",
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: "fixed",
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4">Sign in to Minimal</Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            Don’t have an account?
            <Link variant="subtitle2" sx={{ ml: 0.5 }}>
              Get started
            </Link>
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:google-fill" color="#DF3E30" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:facebook-fill" color="#1877F2" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:twitter-fill" color="#1C9CEA" />
            </Button>
          </Stack>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              OR
            </Typography>
          </Divider>

          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
