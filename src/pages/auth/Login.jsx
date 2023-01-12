import {
  Container,
  Box,
  Typography,
  useTheme,
  TextField,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  CircularProgress,
  Button,
  FormControlLabel,
  FormGroup,
  Checkbox,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import FlexBetween from "../../components/FlexBetween";
import { useForm } from "react-hook-form";
import { useState } from "react";
import React from "react";
const Login = () => {
  const theme = useTheme();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [loading, setLoading] = useState(false);

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.bgColor[1000],
          width: "70%",
          overflow: "hidden",
          filter: "drop-shadow(0px 2px 5px rgba(0,0,0,0.32))",
          borderRadius: "5px",
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          p={2}
          sx={{
            color: theme.palette.grey[900],
            fontWeight: "bold",
          }}
        >
          Sign In Rahanet
        </Typography>
        <Typography
          variant="h5"
          textAlign="left"
          px="20px"
          sx={{
            color: theme.palette.grey[900],
          }}
        >
          Welcome to Rahanet management system
        </Typography>
        <Box noValidate autoComplete="off" sx={{ p: "20px" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("username", { required: true })}
              fullWidth
              id="username"
              label="UserName"
              variant="outlined"
              error={errors.username ? true : false}
              helperText={errors.username && "This field is required"}
              sx={{
                "& .MuiFormLabel-root": {
                  "&.Mui-focused": {
                    color: theme.palette.grey[900],
                  },
                },
              }}
            />

            <FormControl
              error={errors.password ? true : false}
              variant="outlined"
              fullWidth
              sx={{
                mt: "20px",
                ".MuiFormLabel-root": {
                  "&.Mui-focused": {
                    color: theme.palette.grey[900],
                  },
                },
              }}
            >
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                {...register("password", { required: true })}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              <FormHelperText>
                {errors.password && "This field is required"}
              </FormHelperText>
            </FormControl>
            <FlexBetween>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Keep me logged in"
                  sx={{ color: theme.palette.grey[900] }}
                />
              </FormGroup>
              <Button
                variant="text"
                size="small"
                sx={{ color: theme.palette.grey[900] }}
              >
                Forgot Password?
              </Button>
            </FlexBetween>
            <Box sx={{ position: "relative", mt: "20px" }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  color: theme.palette.light[100],
                  backgroundColor: theme.palette.primary.main,
                  fontWeight: "bold",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: theme.palette.primary[400],
                  },
                }}
                disabled={loading}
                fullWidth
              >
                Login
              </Button>
              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: theme.palette.greenAccent[500],
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%) !important",
                  }}
                />
              )}
            </Box>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
