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
  Select,
  MenuItem,
} from "@mui/material";
import { Visibility, VisibilityOff, PhotoCamera } from "@mui/icons-material";
import FlexBetween from "../../components/FlexBetween";
import { useForm } from "react-hook-form";
import { useState } from "react";
import React from "react";
const Register = () => {
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

  const [gender, setGender] = useState("");

  const handleChange = (e) => {
    setGender(e.target.value);
  };

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
          width: "100%",
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
          Register to Rahanet
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
        <Box noValidate autoComplete="off" sx={{ py: "20px" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FlexBetween>
              <TextField
                fullWidth
                {...register("fullName", { required: true })}
                id="fullName"
                label="FullName"
                variant="outlined"
                error={errors.fullName ? true : false}
                helperText={errors.fullName && "This field is required"}
              />
              <TextField
                {...register("username", { required: true })}
                id="username"
                fullWidth
                label="UserName"
                variant="outlined"
                error={errors.username ? true : false}
                helperText={errors.username && "This field is required"}
                sx={{ ml: "10px" }}
              />
            </FlexBetween>
            <TextField
              {...register("email", { required: true })}
              id="email"
              fullWidth
              label="Email"
              variant="outlined"
              error={errors.email ? true : false}
              helperText={errors.email && "This field is required"}
              sx={{ mt: "10px" }}
            />
            <FlexBetween sx={{ mt: "10px" }}>
              <FormControl
                error={errors.password ? true : false}
                variant="outlined"
                fullWidth
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
              <TextField
                {...register("confirmPassword", { required: true })}
                id="confirmPassword"
                type="password"
                fullWidth
                label="Confirm password"
                variant="outlined"
                error={errors.confirmPassword ? true : false}
                helperText={errors.confirmPassword && "This field is required"}
                sx={{ ml: "10px" }}
              />
            </FlexBetween>

            <FlexBetween sx={{ mt: "10px" }}>
              <FormControl
                error={errors.gender ? true : false}
                sx={{ minWidth: 90 }}
              >
                <InputLabel id="gender">Gender</InputLabel>
                <Select
                  {...register("gender", { required: true })}
                  labelId="gender"
                  id="gender"
                  value={gender}
                  onChange={handleChange}
                  autoWidth
                  label="Gender"
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
                <FormHelperText>
                  {errors.gender && "This field is required"}
                </FormHelperText>
              </FormControl>

              <FlexBetween>
                <Typography color={theme.palette.grey[800]}>
                  Your photo
                </Typography>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  <input hidden accept="image/*" type="file" />
                  <PhotoCamera />
                </IconButton>
              </FlexBetween>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Is Active"
                  sx={{ color: theme.palette.grey[800] }}
                />
              </FormGroup>
            </FlexBetween>

            <FlexBetween>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Is superAdmin"
                  sx={{ color: theme.palette.grey[800] }}
                />
              </FormGroup>
            </FlexBetween>
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
                Register
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
          Already have an account
        </Button>
      </Box>
    </Container>
  );
};

export default Register;
