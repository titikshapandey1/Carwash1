import React from "react";
import {
    Container,
    Grid,
    Paper,
    TextField,
    Button,
    Typography,
    Box,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import Colors from "../../utils/colors";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const submitButtonStyle = {
    width: "80px",
    textTransform: "capitalize",
    fontSize: "16px",
    padding: "10px",
    margin: "20px 0",
    color: "white",
    borderRadius: "10px",
    backgroundColor: Colors.palette.secondary.main,
};

function Profile2() {
    const paperStyle = {
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        marginTop: "0.5%",
    };

    const formStyle = {
        width: "100%",
        marginTop: "3%",
    };

    return (
        <Box
            sx={{
                backgroundColor: " #F5F5F5",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Container component="main" maxWidth="sm">
                <Grid container sx={{ marginBlock: "20%" }}>
                    <Paper
                        elevation={10}
                        style={paperStyle}
                        sx={{ borderRadius: "30px" }}
                    >
                        <Box
                            sx={{
                                marginLeft: "80%",
                                background: Colors.palette.primary.main,
                                color: Colors.palette.primary.darkBlue,
                                borderRadius: "20px",
                                padding: "10px",
                                fontWeight: "600",
                                fontSize: "20px",
                                marginTop: "3%",
                                cursor: "pointer",
                            }}
                        >
                            Done
                        </Box>
                        <Box sx={{ display: "flex", position: "relative", marginBottom: "2rem" }}>
                            <CircleIcon
                                sx={{
                                    backgroundColor: Colors.palette.secondary.lightGrey,
                                    fontSize: "200px",
                                    color: "#D9D9D9",
                                    position: "relative",
                                    borderRadius: "60%",
                                    border: `2px solid ${Colors.palette.secondary.main}`,
                                }}
                            />

                            <PhotoCameraIcon
                                sx={{
                                    padding: "2px",
                                    color: Colors.palette.secondary.main,
                                    backgroundColor: Colors.palette.secondary.lightGrey,
                                    position: "absolute",
                                    bottom: 0,
                                    left: "80%",
                                    top: "80%",
                                    transform: "translateX(-50%)",
                                    borderRadius: "50%",
                                    border: `3px solid ${Colors.palette.secondary.main}`,
                                }}
                            />
                        </Box>
                        <form style={formStyle} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="firstName"
                                        placeholder="First Name"
                                        name="firstName"
                                        sx={{ border: "1px solid black" }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Surname"
                                        placeholder="Surname"
                                        name="Surname"
                                        sx={{ border: "1px solid black" }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="contactNumber"
                                        placeholder="Contact Number"
                                        name="contactNumber"
                                        sx={{ border: "1px solid black" }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        id="alternateNumber"
                                        placeholder="Alternate Number"
                                        name="alternateNumber"
                                        sx={{ border: "1px solid black" }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        placeholder="Email ID"
                                        name="email"
                                        sx={{ border: "1px solid black" }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="h6" sx={{ color: Colors.palette.primary.darkBlue, fontWeight: "600" }}>
                                        Address
                                        <br />
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Locality / Building / Street / Society"
                                        placeholder="Locality / Building / Street / Society"
                                        name="Locality / Building / Street / Society"
                                        sx={{ border: "1px solid black" }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="city/Town"
                                        placeholder="City / Town  District"
                                        name="city/Town"
                                        sx={{ border: "1px solid black" }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id=" District"
                                        placeholder=" District"
                                        name=" District"
                                        sx={{ border: "1px solid black" }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="State"
                                        placeholder="State"
                                        name="State"
                                        sx={{ border: "1px solid black" }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Pincode"
                                        placeholder=" Pincode"
                                        name="Pincode"
                                        sx={{ border: "1px solid black" }}
                                    />
                                </Grid>
                            </Grid>
                            <Box align="center">
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    style={{ ...submitButtonStyle }}
                                >
                                    Login
                                </Button>
                            </Box>
                        </form>
                    </Paper>
                </Grid>
            </Container>
        </Box>
    );
}

export default Profile2;
