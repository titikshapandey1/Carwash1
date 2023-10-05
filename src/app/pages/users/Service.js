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
import car1 from "../../assests/images/car1guest.png";
import PaymentOptions from "../../components/Paymentoption";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Colors from "../../utils/colors";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";

function ServiceLocation() {
  const submitButtonStyle = {
    marginTop: "20px",
    marginBottom: "20px",
    padding: "15px",
    borderRadius: 5,
    display: "flex",
    textAlign: "center",
    backgroundColor: Colors.palette.secondary.main,
  };

  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "& input": {
        color: "black",
      },
      "& input::placeholder": {
        color: "darkblack",
      },
    },
  };

  const paperStyle = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    borderRadius: 15,
    // opacity: ".6",
    // height:'25%'
  };

  const formStyle = {
    width: "100%", // Full width
    marginTop: "3%",
  };

  return (
    <Box
      sx={{
        // backgroundImage: 'url("${car1}")',
        // backgroundColor: ' #F5F5F5',
        background:
          "radial-gradient(circle at 100% 100%, #023159, #1F476A, #F5F5F5)",

        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "25",
        // mt:2,
      }}
    >
      <Container
        component="main"
        maxWidth="sm"
        sx={{ mt: "1%", mb: "1%", ml: "20%", mr: "20%" }}
      >
        <Grid container>
          <Paper elevation={10} style={paperStyle}>
            <Typography
              variant="h6"
              sx={{ color: Colors.palette.secondary.main }}
            >
              Enter your credentials here:
            </Typography>
            <form style={formStyle} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    size="small"
                    sx={textFieldStyles}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    size="small"
                    sx={textFieldStyles}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="contactNumber"
                    label="Contact Number"
                    name="contactNumber"
                    size="small"
                    sx={textFieldStyles}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="alternateNumber"
                    label="Alternate Number"
                    name="alternateNumber"
                    size="small"
                    sx={textFieldStyles}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    size="small"
                    sx={textFieldStyles}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  {/* <Typography variant='h6'>Payment mode:<br/></Typography> */}
                  <PaymentOptions />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    sx={{ color: Colors.palette.secondary.main }}
                  >
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
                    label="Locality / Building / Street / Society"
                    name="address"
                    size="small"
                    sx={textFieldStyles}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="city/Town"
                    label="City / Town  District"
                    name="city"
                    size="small"
                    sx={textFieldStyles}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id=" District"
                    label=" District"
                    name=" District"
                    size="small"
                    sx={textFieldStyles}
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="State"
                    label="State"
                    name="State"
                    size="small"
                    sx={textFieldStyles}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="Pincode"
                    label=" Pincode"
                    name="Pincode"
                    size="small"
                    sx={textFieldStyles}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography variant="h6">
                    Do you want the service at:
                    <br />
                  </Typography>
                  <FormControl component="fieldset">
                    <RadioGroup row aria-label="location" name="location">
                      <FormControlLabel
                        value="My place"
                        control={<Radio />}
                        label="My place"
                      />
                      <FormControlLabel
                        value="CarWash centre"
                        control={<Radio />}
                        label="CarWash centre"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    sx={{ color: Colors.palette.secondary.main }}
                  >
                    Pickup Location
                    <br />
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="Pickup Location/Locality / Building / Street / Society"
                    label="Locality / Building / Street / Society"
                    name=" Pickup Location/Locality / Building / Street / Society"
                    size="small"
                    sx={textFieldStyles}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="Pickup Location/city/Town"
                    label="City / Town  District"
                    name="Pickup Location/city/Town"
                    size="small"
                    sx={textFieldStyles}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id=" Pickup Location/District"
                    label=" District"
                    name=" Pickup Location/District"
                    size="small"
                    sx={textFieldStyles}
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="Pickup Location/State"
                    label="State"
                    name="Pickup Location/State"
                    size="small"
                    sx={textFieldStyles}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="Pickup Location/Pincode"
                    label=" Pincode"
                    name="Pickup Location/Pincode"
                    size="small"
                    sx={textFieldStyles}
                  />
                </Grid>
              </Grid>
              <Box align="center">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ ...submitButtonStyle }}
                >
                  <NavLink
                    to="/home"
                    style={{
                      textDecoration: "none",
                      color: Colors.palette.primary.main,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Submit <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
                  </NavLink>
                </Button>
              </Box>
            </form>
          </Paper>
        </Grid>
      </Container>
    </Box>
  );
}

export default ServiceLocation;
