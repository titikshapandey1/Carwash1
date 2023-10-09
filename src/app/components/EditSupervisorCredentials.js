import React from "react";
import {
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";

import PaymentOptions from "../components/Paymentoption";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Colors from "../utils/colors";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";

function ServiceLocation() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
  };

  const formStyle = {
    width: "100%",
    marginTop: "3%",
  };

  return (
    <Box
      sx={{
        height: "auto",
        borderRadius: "25",
      }}
    >
      <Container maxWidth="md">
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
                <Grid item xs={12} sm={6}>
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
                <Grid item xs={12} sm={6}>
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

                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    sx={{ color: Colors.palette.secondary.main }}
                  >
                    Services
                    <br />
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth size="small" sx={textFieldStyles}>
                    <InputLabel id="demo-simple-select-label">
                      Select Service Type
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Select Service Type"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Routine Clean</MenuItem>
                      <MenuItem value={20}>Dry Clean</MenuItem>
                      <MenuItem value={30}>Deep Clean</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="price"
                    label="Price (in Rupee)"
                    name="price"
                    size="small"
                    sx={textFieldStyles}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    sx={{ color: Colors.palette.secondary.main }}
                  >
                    Generate Id
                    <br />
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="createusername"
                    label="Create Username"
                    name="price"
                    size="small"
                    sx={textFieldStyles}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    name="price"
                    size="small"
                    sx={textFieldStyles}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="confirmpass"
                    label="Confirm Password"
                    type="password"
                    autoComplete="current-password"
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
                  Submit <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
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
