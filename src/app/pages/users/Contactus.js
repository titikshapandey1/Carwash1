import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  TextField,
  Button,
  Card,
  useMediaQuery,
} from "@mui/material";
import ExploreIcon from "@mui/icons-material/Explore";
import CallIcon from "@mui/icons-material/Call";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import Footer from "../../partials/Footer";
import Nav from "../../partials/Nav";
import Guest1 from "../../components/Background";
import Ourplan from "./Ourplan";
import Question from "../../components/Question";
import Colors from "../../utils/colors";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const cardStyles = {
  my: 1,
  mx: 1,
  p: 2,
  marginBottom: "2%",
  borderRadius: "20px",
};

const mobileCardStyles = {
  width: "100%",
  my: 1,
  mx: 1,
  p: 2,
  marginBottom: "2%",
  borderRadius: "20px",
};

const boxStyle = {
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
};

const formStyle = {
  width: "100%",
  marginTop: "5%",
};

const buttonBoxStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const submitButtonStyle = {
  width: "auto",
  textTransform: "capitalize",
  fontSize: "16px",
  padding: "10px",
  margin: "20px 0",
  color: Colors.palette.primary.main,
  borderRadius: "10px",
  backgroundColor: Colors.palette.secondary.main,
};

const img = {
  backgroundPosition: "center",
  backgroundSize: "cover",
};

function ContactUs() {
  const isSmallScreen = useMediaQuery("(max-width: 960px)");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    alternateNumber: "",
    email: "",
    message: "",
    Address: "",
    District: "",
    city: "",
    State: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact Number is required";
    } else if (!/^\d{10}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Invalid Contact Number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)
    ) {
      newErrors.email = "Invalid Email";
    }
    if (!formData.Address.trim()) {
      newErrors.Address = "Field is required";
    }
    if (!formData.city.trim()) {
      newErrors.city = "Field is required";
    }
    if (!formData.State.trim()) {
      newErrors.State = "Field is required";
    }
    if (!formData.District.trim()) {
      newErrors.District = "Field is required";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // No errors, submit the form
      console.log(formData);
      // Reset form data
      setFormData({
        firstName: "",
        lastName: "",
        contactNumber: "",
        alternateNumber: "",
        email: "",
        message: "",
        District: "",
        city: "",
        State: "",
      });
    }
  };

  return (
    <>
      <Nav />
      <Guest1 />
      <Box
        sx={{
          backgroundColor: Colors.palette.secondary.cardBackground,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* ...other components ... */}
        <Box>
          <Ourplan />
          <Box sx={{ mt: 2 }}>
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{}}>
                    <Card
                      sx={{
                        width: "50%",
                        ...cardStyles,
                        ...(isSmallScreen && mobileCardStyles),
                      }}
                    >
                      <Grid container wrap="nowrap" spacing={6}>
                        <Grid item marginTop="5%">
                          <HourglassEmptyIcon />
                        </Grid>
                        <Grid item>
                          <Typography>
                            <b>Hours</b>
                            <br />
                            Mon-Fri : 9 AM - 7 PM
                            <br />
                            Sat : 9 AM - 2 PM
                          </Typography>
                        </Grid>
                      </Grid>
                    </Card>
                    <Card
                      sx={{
                        width: "60%",
                        ...cardStyles,
                        ...(isSmallScreen && mobileCardStyles),
                      }}
                    >
                      <Grid container wrap="nowrap" spacing={6}>
                        <Grid item marginTop="5%">
                          <CallIcon />
                        </Grid>
                        <Grid item xs>
                          <Typography>
                            <b>Contact:</b>
                            <br />
                            mifs@info.com
                            <br />
                            (303) 985-0105, (303) 355-0105
                          </Typography>
                        </Grid>
                      </Grid>
                    </Card>
                    <Card
                      sx={{
                        width: "70%",
                        ...cardStyles,
                        ...(isSmallScreen && mobileCardStyles),
                      }}
                    >
                      <Grid container wrap="nowrap" spacing={6}>
                        <Grid item marginTop="5%">
                          <ExploreIcon />
                        </Grid>
                        <Grid item xs>
                          <Typography>
                            <b>Address:</b>
                            <br />
                            2972 Westheimer Rd. Santa Ana,
                            <br /> Illinois 85486
                          </Typography>
                        </Grid>
                      </Grid>
                    </Card>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card>
                    <Container component="main" maxWidth="xs">
                      <Grid container style={img}>
                        <Box
                          style={{
                            ...boxStyle,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        >
                          <form
                            style={formStyle}
                            //   noValidate
                            onSubmit={handleSubmit}
                          >
                            <Grid container spacing={2}>
                              <Grid item xs={12} sm={6}>
                                <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  id="firstName"
                                  placeholder="First Name"
                                  name="firstName"
                                  onChange={handleChange}
                                  value={formData.firstName}
                                  error={errors.firstName ? true : false}
                                  helperText={errors.firstName}
                                />
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  id="lastName"
                                  placeholder="Last Name"
                                  name="lastName"
                                  onChange={handleChange}
                                  value={formData.lastName}
                                  error={errors.lastName ? true : false}
                                  helperText={errors.lastName}
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
                                  onChange={handleChange}
                                  value={formData.contactNumber}
                                  error={errors.contactNumber ? true : false}
                                  helperText={errors.contactNumber}
                                />
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <TextField
                                  variant="outlined"
                                  fullWidth
                                  id="alternateNumber"
                                  placeholder="Alternate Number"
                                  name="alternateNumber"
                                  onChange={handleChange}
                                  value={formData.alternateNumber}
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  id="email"
                                  placeholder="Email Address"
                                  name="email"
                                  onChange={handleChange}
                                  value={formData.email}
                                  error={errors.email ? true : false}
                                  helperText={errors.email}
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography variant="h5">
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
                                  onChange={handleChange}
                                  value={formData.Address}
                                  error={errors.email ? true : false}
                                  helperText={errors.Address}
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
                                  onChange={handleChange}
                                  // value={formData.city}
                                  error={errors.email ? true : false}
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
                                  onChange={handleChange}
                                  value={formData.District}
                                  error={errors.email ? true : false}
                                  helperText={errors.District}
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
                                  onChange={handleChange}
                                  value={formData.State}
                                  error={errors.email ? true : false}
                                  helperText={errors.State}
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
                                  onChange={handleChange}
                                  value={formData.pincode}
                                  error={errors.email ? true : false}
                                  helperText={errors.pincode}
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography variant="h5">
                                  Message
                                  <br />
                                </Typography>
                              </Grid>
                              <Grid item xs={12}>
                                <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  multiline
                                  rows={4}
                                  placeholder="Send us your queries and suggestions.."
                                  id="message"
                                  name="message"
                                  onChange={handleChange}
                                />
                              </Grid>
                              {/* ... Other form fields ... */}
                            </Grid>
                            <Box style={buttonBoxStyles}>
                              <Button
                                type="submit"
                                variant="contained"
                                style={submitButtonStyle}
                              >
                                Submit&nbsp;&nbsp;{" "}
                                <ArrowForwardIosIcon
                                  sx={{ fontSize: "16px" }}
                                />
                              </Button>
                            </Box>
                          </form>
                        </Box>
                      </Grid>
                    </Container>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Question />
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default ContactUs;
