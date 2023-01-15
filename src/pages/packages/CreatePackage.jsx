import React from 'react'
import {
    Container,
    Box,
    Typography,
    useTheme,
    Grid,
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
import { useForm } from "react-hook-form";
import { useNavigate, Link, Navigate } from 'react-router-dom'
import { useTranslation } from "react-i18next"
import { yupResolver } from "@hookform/resolvers/yup"
import { useDispatch, useSelector } from 'react-redux'
import PackageSchema from "../../utils/validationSchema/PackageSchema"
import { useLoginMutation } from "../../features/auth/authApiSlice";
import { toast } from 'react-toastify'


const CreatePackage = () => {
    const theme = useTheme()

    const { t } = useTranslation()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(PackageSchema),
    })

    const [login, { isLoading }] = useLoginMutation()

    const onSubmitHandler = async (data) => {
        try {
            // const userData = await login(data).unwrap()
            navigate('/')
            reset()

        } catch (rejectResp) {
            const { data } = rejectResp

            if (data?.errors) {
                data.errors.forEach(error => setError(error["param"], { type: "manual", message: error["msg"] }))
            } else {
                toast.error(data?.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });

            }
        }
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <Grid item xs={6}>
                        <TextField
                            {...register("emailUsername", { required: true })}
                            fullWidth
                            id="emailUsername"
                            label="Email"
                            variant="outlined"
                            error={errors.emailUsername ? true : false}
                            helperText={errors.emailUsername?.message}
                            sx={{
                                "& .MuiFormLabel-root": {
                                    "&.Mui-focused": {
                                        color: theme.palette.grey[900],
                                    },
                                },
                            }}
                        />
                        <Grid item xs={6}>
                            <TextField
                                {...register("emailUsername", { required: true })}
                                fullWidth
                                id="emailUsername"
                                label="Email"
                                variant="outlined"
                                error={errors.emailUsername ? true : false}
                                helperText={errors.emailUsername?.message}
                                sx={{
                                    "& .MuiFormLabel-root": {
                                        "&.Mui-focused": {
                                            color: theme.palette.grey[900],
                                        },
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>
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
                            disabled={isLoading}
                            fullWidth
                        >  Login
                            {isLoading && (
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
                            )}
                        </Button>
                    </Box>
                </form>
            </Grid>
            <Grid item xs={4}>
                4
            </Grid>
        </Grid>
    )
}

export default CreatePackage