import React from "react";
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
import Ourplan from "../../components/Ourplan";
import Question from "../../components/Question";
import Colors from "../../utils/colors";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";


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

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  contactNumber: Yup.string()
    .required("Contact Number is required")
    .matches(/^[1-9]\d{9}$/, "Invalid Contact Number"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  locality: Yup.string().required("Locality is required"),
  city: Yup.string().required("City is required"),
  District: Yup.string().required("District is required"),
  State: Yup.string().required("State is required"),
  Pincode: Yup.string()
    .required("Pincode is required")
    .test(
      "valid-pincode",
      "Invalid Pincode",
      (value) => value && /^[1-9][0-9]{5}$/.test(value)
    ),
});

function ContactUs() {
  const isSmallScreen = useMediaQuery("(max-width: 960px)");

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("First Name is required")
      .matches(/^[A-Za-z]+$/, "Only letters are allowed in First Name"),
    lastName: Yup.string()
      .required("Last Name is required")
      .matches(/^[A-Za-z]+$/, "Only letters are allowed in First Name"),
    contactNumber: Yup.string()
      .required("Contact Number is required")
      .matches(/^[1-9]\d{9}$/, "Invalid Contact Number"),
    alternateNumber: Yup.string()
      .required("Alternate Number is required")
      .matches(/^[1-9]\d{9}$/, "Invalid Alternate Number"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    locality: Yup.string().required("Locality is required"),
    city: Yup.string()
      .required("City is required")
      .matches(/^[A-Za-z]+$/, "Only letters are allowed in City"),
    District: Yup.string()
      .required("District is required")
      .matches(/^[A-Za-z]+$/, "Only letters are allowed in District"),
    State: Yup.string()
      .required("State is required")
      .matches(/^[A-Za-z]+$/, "Only letters are allowed in State"),
    Pincode: Yup.string()
      .required("Pincode is required")
      .test(
        "valid-pincode",
        "Invalid Pincode",
        (value) => value && /^[1-9][0-9]{5}$/.test(value)
      ),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
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
      Pincode: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
                            onSubmit={formik.handleSubmit}
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
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.firstName}
                                  error={
                                    formik.touched.firstName &&
                                    Boolean(formik.errors.firstName)
                                  }
                                  helperText={
                                    formik.touched.firstName &&
                                    formik.errors.firstName
                                  }
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
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.lastName}
                                  error={
                                    formik.touched.lastName &&
                                    Boolean(formik.errors.lastName)
                                  }
                                  helperText={
                                    formik.touched.lastName &&
                                    formik.errors.lastName
                                  }
                                />
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  id="contactNumber"
                                  placeholder="Contact Number"
                                  type="tel"
                                  name="contactNumber"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.contactNumber}
                                  error={
                                    formik.touched.contactNumber &&
                                    Boolean(formik.errors.contactNumber)
                                  }
                                  helperText={
                                    formik.touched.contactNumber &&
                                    formik.errors.contactNumber
                                  }
                                />
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <TextField
                                  variant="outlined"
                                  fullWidth
                                  id="alternateNumber"
                                  placeholder="Alternate Number"
                                  name="alternateNumber"
                                  value={formik.values.alternateNumber}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  error={
                                    formik.touched.alternateNumber &&
                                    Boolean(formik.errors.alternateNumber)
                                  }
                                  helperText={
                                    formik.touched.alternateNumber &&
                                    formik.errors.alternateNumber
                                  }
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  id="email"
                                  placeholder="Email Address"
                                  type="email"
                                  name="email"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.email}
                                  error={
                                    formik.touched.email &&
                                    Boolean(formik.errors.email)
                                  }
                                  helperText={
                                    formik.touched.email && formik.errors.email
                                  }
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
                                  id="Address"
                                  placeholder="Locality / Building / Street / Society"
                                  name="Address"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.locality}
                                  error={
                                    formik.touched.locality &&
                                    Boolean(formik.errors.locality)
                                  }
                                  helperText={
                                    formik.touched.locality &&
                                    formik.errors.locality
                                  }
                                />
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  id="city"
                                  placeholder="City / Town  District"
                                  name="city"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.city}
                                  error={
                                    formik.touched.city &&
                                    Boolean(formik.errors.city)
                                  }
                                  helperText={
                                    formik.touched.city && formik.errors.city
                                  }
                                />
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  id="District"
                                  placeholder=" District"
                                  name="District"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.District}
                                  error={
                                    formik.touched.District &&
                                    Boolean(formik.errors.District)
                                  }
                                  helperText={
                                    formik.touched.District &&
                                    formik.errors.District
                                  }
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
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.State}
                                  error={
                                    formik.touched.State &&
                                    Boolean(formik.errors.State)
                                  }
                                  helperText={
                                    formik.touched.State && formik.errors.State
                                  }
                                />
                              </Grid>
                              <Grid item xs={12} sm={4}>
                                <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  id="Pincode"
                                  placeholder="Pincode"
                                  name="Pincode"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.Pincode}
                                  error={
                                    formik.touched.Pincode &&
                                    Boolean(formik.errors.Pincode)
                                  }
                                  helperText={
                                    formik.touched.Pincode &&
                                    formik.errors.Pincode
                                  }
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
                                  onChange={formik.handleChange}
                                  value={formik.values.message}
                                />
                              </Grid>
                            </Grid>
                            <Box style={buttonBoxStyles}>
                              <Button
                                type="submit"
                                variant="contained"
                                style={submitButtonStyle}
                              >
                                Submit &nbsp;
                                <ArrowForwardIosIcon
                                  sx={{ fontSize: "20px" }}
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
