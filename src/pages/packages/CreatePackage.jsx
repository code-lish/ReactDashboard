import {
  Grid,
  Container,
  Box,
  Typography,
  useTheme,
  TextField,
  FormControl,
  InputAdornment,
  IconButton,
  CircularProgress,
  Button,
  FormControlLabel,
  FormGroup,
  Checkbox,
  OutlinedInput,
  FormHelperText,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  FormLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import FlexBetween from "../../components/FlexBetween";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Select from "react-select";
const CreatePackage = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [province, setProvince] = useState("");
  const [duration, setDuration] = useState("");
  const [bandwidth, setbandwidth] = useState("");

  const provinceOptions = [
    { label: "هرات", value: "herat" },
    { label: "کابل", value: "kabul" },
    { label: "مزار شریف", value: "mezar-e-sharif" },
    { label: "بادغیس", value: "badghis" },
    { label: "جلال آباد", value: "jalal-aabad" },
  ];
  const durationOptions = [
    { label: "ماهوار", value: 30 },
    { label: "2 ماه", value: 60 },
    { label: "3 ماه", value: 90 },
    { label: "6 ماه", value: 180 },
    { label: "سالانه", value: 365 },
  ];
  const bandwidthSignOptions = [
    { label: "کی بی", value: "1" },
    { label: "ام بی", value: "1024" },
    { label: "جی بی", value: "1048576" },
  ];

  const [priority, setPriority] = useState(5);
  const [selectPackage, setSelectPackage] = useState("sm");

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  return (
    <Grid container sx={{ mt: "10px", mb: "20px" }} gap="20px">
      <Grid item xs={12} sm={7}>
        <form onSubmit={() => console.log("handle submit")}>
          <Box
            sx={{
              backgroundColor: theme.palette.bgColor[1000],
              width: "100%",
              filter: "drop-shadow(0px 2px 5px rgba(0,0,0,0.32))",
              borderRadius: "5px",
            }}
          >
            <Typography variant="body1" sx={{ pt: "10px", pl: "10px" }}>
              General INfo
            </Typography>
            <Box
              noValidate
              autoComplete="off"
              sx={{ p: "20px", width: "100%" }}
            >
              <FlexBetween>
                <TextField
                  {...register("packageName", { required: true })}
                  fullWidth
                  id="packageName"
                  label="package Name"
                  variant="outlined"
                  // error={errors.emailUsername ? true : false}
                  // helperText={errors.emailUsername?.message}
                  sx={{
                    mr: "10px",
                    "& .MuiFormLabel-root": {
                      "&.Mui-focused": {
                        color: theme.palette.grey[900],
                      },
                    },
                  }}
                />
                <FormControl
                  fullWidth
                  sx={{
                    ".selector__control": {
                      backgroundColor: theme.palette.bgColor[1000],
                      padding: "6px",
                      borderColor: "rgba(255, 255, 255, 0.3)",
                      "&:hover": {
                        borderColor: "rgba(255, 255, 255, 0.9)",
                      },
                    },

                    ".selector__menu": {
                      backgroundColor: theme.palette.bgColor.main,
                      "& > div": {
                        "& > div": {
                          backgroundColor: theme.palette.bgColor.main,
                          "&:hover": {
                            backgroundColor: theme.palette.primary[700],
                          },
                        },
                      },
                    },
                    ".selector__single-value": {
                      color: theme.palette.grey[900],
                    },
                  }}
                >
                  <Select
                    value={province}
                    onChange={setProvince}
                    options={provinceOptions}
                    classNamePrefix="selector"
                  />
                </FormControl>
              </FlexBetween>
              <TextField
                {...register("linke", { required: true })}
                fullWidth
                id="linke"
                label="Link"
                variant="outlined"
                // error={errors.emailUsername ? true : false}
                // helperText={errors.emailUsername?.message}
                sx={{
                  mt: "10px",
                  "& .MuiFormLabel-root": {
                    "&.Mui-focused": {
                      color: theme.palette.grey[900],
                    },
                  },
                }}
              />
              <TextField
                {...register("descriptions", { required: true })}
                fullWidth
                id="descriptions"
                label="Discriptions"
                variant="outlined"
                // error={errors.emailUsername ? true : false}
                // helperText={errors.emailUsername?.message}
                multiline
                sx={{
                  mt: "10px",
                  "& .MuiFormLabel-root": {
                    "&.Mui-focused": {
                      color: theme.palette.grey[900],
                    },
                  },
                }}
              />
              <TextField
                {...register("price", { required: true })}
                fullWidth
                id="price"
                label="Price"
                variant="outlined"
                // error={errors.emailUsername ? true : false}
                // helperText={errors.emailUsername?.message}
                multiline
                sx={{
                  mt: "10px",
                  "& .MuiFormLabel-root": {
                    "&.Mui-focused": {
                      color: theme.palette.grey[900],
                    },
                  },
                }}
              />
              <FlexBetween sx={{ mt: "15px" }}>
                <FormControl
                  fullWidth
                  sx={{
                    ".selector__control": {
                      backgroundColor: theme.palette.bgColor[1000],
                      padding: "6px",
                      borderColor: "rgba(255, 255, 255, 0.3)",
                      "&:hover": {
                        borderColor: "rgba(255, 255, 255, 0.9)",
                      },
                    },

                    ".selector__menu": {
                      backgroundColor: theme.palette.bgColor.main,

                      "& > div": {
                        "& > div": {
                          backgroundColor: theme.palette.bgColor.main,

                          "&:hover": {
                            backgroundColor: theme.palette.primary[700],
                          },
                        },
                      },
                    },
                    ".selector__single-value": {
                      color: theme.palette.grey[900],
                    },
                  }}
                >
                  <Select
                    value={duration}
                    onChange={setDuration}
                    options={durationOptions}
                    classNamePrefix="selector"
                  />
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="priority">priority</InputLabel>
                  <Select
                    labelId="priority"
                    id="priority-select"
                    value={priority}
                    label="Priority"
                    onChange={(e) => setPriority(e.target.value)}
                  >
                    <MenuItem value={5}>Herat</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </FlexBetween>
              <FlexBetween sx={{ mt: "15px" }}>
                <FormControl fullWidth sx={{ mr: "10px" }}>
                  <InputLabel id="selectPackage">select Package</InputLabel>
                  <Select
                    labelId="selectPackage"
                    id="selectPackage-select"
                    value={selectPackage}
                    label="Select package"
                    onChange={(e) => setSelectPackage(e.target.value)}
                  >
                    <MenuItem value={"sm"}>Herat</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  {...register("index", { required: true })}
                  fullWidth
                  id="index"
                  label="Index"
                  variant="outlined"
                  // error={errors.emailUsername ? true : false}
                  // helperText={errors.emailUsername?.message}
                  multiline
                  sx={{
                    "& .MuiFormLabel-root": {
                      "&.Mui-focused": {
                        color: theme.palette.grey[900],
                      },
                    },
                  }}
                />
              </FlexBetween>
            </Box>
            <Box
              sx={{
                p: "20px",
              }}
            >
              <Typography variant="body1" sx={{ pb: "10px", pl: "-10px" }}>
                Speed INfo
              </Typography>
              <FlexBetween>
                <TextField
                  {...register("daySpeed", { required: true })}
                  fullWidth
                  id="daySpeed"
                  label="Day Speed"
                  variant="outlined"
                  // error={errors.emailUsername ? true : false}
                  // helperText={errors.emailUsername?.message}
                  sx={{
                    mr: "10px",
                    "& .MuiFormLabel-root": {
                      "&.Mui-focused": {
                        color: theme.palette.grey[900],
                      },
                    },
                  }}
                />
                <TextField
                  {...register("night Speed", { required: true })}
                  fullWidth
                  id="night Speed"
                  label="night  Speed"
                  variant="outlined"
                  // error={errors.emailUsername ? true : false}
                  // helperText={errors.emailUsername?.message}
                  sx={{
                    mr: "10px",
                    "& .MuiFormLabel-root": {
                      "&.Mui-focused": {
                        color: theme.palette.grey[900],
                      },
                    },
                  }}
                />
              </FlexBetween>
              <Box display="flex" alignItems="center">
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
                    disabled={false}
                    fullWidth
                  >
                    {" "}
                    Submit
                    {
                      <CircularProgress
                        size={24}
                        sx={{
                          color: theme.palette.primary[400],
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%,-50%) !important",
                        }}
                      />
                    }
                  </Button>
                </Box>

                <Button
                  type="submit"
                  variant="outlined"
                  sx={{
                    mt: "20px",
                    ml: "10px",
                    color: theme.palette.light[100],
                    borderColor: theme.palette.primary.main,
                    fontWeight: "bold",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: theme.palette.primary[400],
                    },
                  }}
                >
                  Add
                </Button>
              </Box>
            </Box>
          </Box>
        </form>
      </Grid>
      <Grid item xs={12} sm={4.5}>
        <Box
          sx={{
            p: "20px",
            backgroundColor: theme.palette.bgColor[1000],
            width: "100%",

            filter: "drop-shadow(0px 2px 5px rgba(0,0,0,0.32))",
            borderRadius: "5px",
          }}
        >
          <Typography variant="body1" sx={{ pb: "10px", pl: "-10px" }}>
            Choices
          </Typography>

          <FormControl
            fullWidth
            sx={{
              ".selector__control": {
                backgroundColor: theme.palette.bgColor[1000],
                padding: "6px",
                borderColor: "rgba(255, 255, 255, 0.3)",
                "&:hover": {
                  borderColor: "rgba(255, 255, 255, 0.9)",
                },
              },

              ".selector__menu": {
                backgroundColor: theme.palette.bgColor.main,
                "& > div": {
                  "& > div": {
                    backgroundColor: theme.palette.bgColor.main,
                    "&:hover": {
                      backgroundColor: theme.palette.primary[700],
                    },
                  },
                },
              },
              ".selector__single-value": {
                color: theme.palette.grey[900],
              },
            }}
          >
            <Select
              value={bandwidth}
              onChange={setbandwidth}
              options={bandwidthSignOptions}
              classNamePrefix="selector"
            />
          </FormControl>

          <Box sx={{ mt: "10px" }}>
            <FormControl>
              <FormLabel id="type-of-bandwidth">Type of package</FormLabel>
              <RadioGroup
                row
                aria-labelledby="type-of-package"
                defaultValue="limited"
                name="package-type"
              >
                <FormControlLabel
                  value="limited"
                  control={<Radio />}
                  label="lmited"
                />
                <FormControlLabel
                  value="none-limited"
                  control={<Radio />}
                  label="none-limited"
                />
              </RadioGroup>
            </FormControl>
          </Box>

          <Box sx={{ mt: "10px" }}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Pluse package"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Combined package"
              />
            </FormGroup>
          </Box>
        </Box>

        <Box
          sx={{
            p: "20px",
            backgroundColor: theme.palette.bgColor[1000],
            width: "100%",

            filter: "drop-shadow(0px 2px 5px rgba(0,0,0,0.32))",
            borderRadius: "5px",
            position: "relative",
            mt: "10px",
          }}
        >
          <Typography variant="h5" mt="10px" mb="30px">
            Other properties
          </Typography>
          <Button
            type="submit"
            variant="outlined"
            sx={{
              color: theme.palette.light[100],
              borderColor: theme.palette.primary.main,
              fontWeight: "bold",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: theme.palette.primary[400],
              },
            }}
          >
            Add
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CreatePackage;
