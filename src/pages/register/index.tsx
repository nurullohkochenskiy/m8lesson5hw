import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Controller, useForm } from "react-hook-form";

const defaultTheme = createTheme();

export default function Register() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h4">
            Ro'yxatdan o'tish
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="fullName"
                  control={control}
                  rules={{ required: "Ismingizni kiriting" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      autoComplete="off"
                      name="fullName"
                      required
                      fullWidth
                      id="fullName"
                      label="Ismingiz"
                      error={!!errors.fullName}
                      helperText={errors.fullName && errors.fullName.message}
                      autoFocus
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: "Telefon raqamingizni kiriting" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      autoComplete="off"
                      name="phone"
                      type="number"
                      required
                      fullWidth
                      id="phone"
                      label="Telefon raqamingiz"
                      error={!!errors.phone}
                      helperText={errors.phone && errors.phone.message}
                      autoFocus
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: "Emailni kiriting" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="email"
                      error={!!errors.email}
                      helperText={errors.email && errors.email.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: "Parol kiriting" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      required
                      fullWidth
                      name="password"
                      label="Parol"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      error={!!errors.password}
                      helperText={errors.password && errors.password.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="confirmpassword"
                  control={control}
                  rules={{ required: "Parolni tasdiqlang" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      required
                      fullWidth
                      name="confirmpassword"
                      label="Parolni tasdiqlash"
                      type="password"
                      id="confirmpassword"
                      autoComplete="new-password"
                      error={!!errors.confirmpassword}
                      helperText={errors.confirmpassword && errors.confirmpassword.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                {errors.group && (
                  <Typography color="red">{errors.group.message}</Typography>
                )}
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ height: 60, mt: 3, mb: 2 }}
            >
              Ro'yxatdan o'tish
            </Button>
            <Grid container justifyContent={"center"}>
              <Grid item>
                <Link href="#" variant="body2">
                  Ro'yxatdan o'tganmisiz? Tizimga kirish
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
