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
import VerificationInput from "react-verification-input";
const ResetPassword = () => {
  const theme = useTheme();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const onChange = (code) => setOTPCode(code);
  const [otpCode, setOTPCode] = useState(null);
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
          Reset password
        </Typography>
        <Typography
          variant="h5"
          textAlign="left"
          px="20px"
          sx={{
            color: theme.palette.grey[900],
          }}
        >
          Enter the code that you recive on your mobile
        </Typography>
        <Box noValidate autoComplete="off" sx={{ p: "20px" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <VerificationInput
                classNames={{
                  container: "container",
                  character: "character",
                  characterInactive: "character--inactive",
                  characterSelected: "character--selected",
                }}
                validChars="0-9"
                placeholder="_"
                length={6}
                autoFocus={true}
                onChange={onChange}
              />
            </Box>

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
                Submit
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

export default ResetPassword;
