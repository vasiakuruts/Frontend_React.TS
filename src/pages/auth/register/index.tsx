import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { IPropsRegister } from "../../../common/types/auth";
import styled from "./style.module.css";

const RegisterPage: React.FC<IPropsRegister> = (
  props: IPropsRegister
): JSX.Element => {
  const { navigate, register, errors } = props;
  return (
    <>
      <Typography variant="h2" fontSize={32} textAlign="center">
        Реєстрація
      </Typography>
      <Typography
        variant="body1"
        marginBottom={3}
        fontFamily="Poppins"
        textAlign="center"
      >
        Введіть данні для реєстрації
      </Typography>
      <Box className={styled.form}>
      <TextField
        error={!!errors.name}
        fullWidth={true}
        margin="normal"
        label="Ім'я"
        variant="outlined"
        placeholder="Введіть свое ім'я"
        helperText={errors.name ? `${errors.name.message}` : ""}
        {...register("name")}
      />
      <TextField
        error={!!errors.username}
        fullWidth={true}
        margin="normal"
        label="Username"
        variant="outlined"
        placeholder="Введіть свій username"
        helperText={errors.username ? `${errors.username.message}` : ""}
        {...register("username")}
      />
      <TextField
        error={!!errors.email}
        fullWidth={true}
        margin="normal"
        type="email"
        label="Email"
        variant="outlined"
        placeholder="Введіть свій emeil"
        helperText={errors.email ? `${errors.email.message}` : ""}
        {...register("email")}
      />
      <TextField
        error={!!errors.password}
        fullWidth={true}
        margin="normal"
        type="password"
        label="Password"
        variant="outlined"
        placeholder="Введіть свій password"
        helperText={errors.password ? `${errors.password.message}` : ""}
        {...register("password")}
      />
      <TextField
        error={!!errors.confirmPassword}
        fullWidth={true}
        margin="normal"
        type="password"
        label="Password"
        variant="outlined"
        placeholder="Повторіть свій password"
        helperText={
          errors.confirmPassword ? `${errors.confirmPassword.message}` : ""
        }
        {...register("confirmPassword")}
      />
      </Box>
      <Button
        className={styled.incitingButton}
        type="submit"
        variant="contained"
      >
        Реєстрація
      </Button>
      
      <Box>
        <Typography variant="body1" >
          У вас є акаунт?
          <span
            className={styled.incitingText}
            onClick={() => navigate("/login")}
          >
            Авторизація
          </span>
        </Typography>
      </Box>
    </>
  );
};

export default RegisterPage;