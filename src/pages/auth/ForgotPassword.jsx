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
const ForgotPassword = () => {
  const theme = useTheme();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(errors);

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
          px: "20px",
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
          Forgot password?
        </Typography>
        <Typography
          variant="body2"
          textAlign="center"
          sx={{
            color: theme.palette.grey[800],
          }}
        >
          To reset your password please send us your email
        </Typography>
        <Box noValidate autoComplete="off" sx={{ py: "20px" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("email", { required: true })}
              fullWidth
              id="email"
              type="email"
              label="Email"
              variant="outlined"
              error={errors.email ? true : false}
              helperText={errors.email && "This field is required"}
            />

            <Box sx={{ position: "relative", mt: "20px" }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  color: theme.palette.grey[900],
                  backgroundColor: theme.palette.light[400],
                  fontWeight: "bold",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: theme.palette.light[400],
                  },
                }}
                disabled={loading}
                fullWidth
              >
                Send rest password
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
        <Button variant="contained" fullWidth sx={{ my: "10px" }}>
          return to sign?
        </Button>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
