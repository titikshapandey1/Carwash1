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

function Profile() {
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
                color: Colors.palette.primary.darkBlue,
                fontWeight: "600",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              Edit
            </Box>
            <Box sx={{ marginBottom: "2rem" }}>

              <CircleIcon sx={{ fontSize: "200px", color: Colors.palette.secondary.lightGrey }} />
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
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="alternateNumber"
                    placeholder="Alternate Number"
                    name="alternateNumber"
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
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="h6">
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

export default Profile;
