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
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import PaymentOptions from "../../components/Paymentoption";
import Colors from "../../utils/colors";

const initialValues = {
  firstName: "",
  lastName: "",
  contactNumber: "",
  email: "",
  password: "",
  locality: "",
  District: "",
  city: "",
  State: "",
  Pincode: "",
  PickupLocality: "",
  PickupCity: "",
  PickupDistrict: "",
  PickupState: "",
  PickupPincode: "",

};

Yup.addMethod(Yup.string, "locality", function (message) {
  return this.test("locality", message, function (value) {
    if (!value) return true;
    return false;
  });
});
Yup.addMethod(Yup.string, "city", function (message) {
  return this.test("city", message, function (value) {
    if (!value) return true;
    return false;
  });
});
Yup.addMethod(Yup.string, "District", function (message) {
  return this.test("District", message, function (value) {
    if (!value) return true;
    return false;
  });
});
Yup.addMethod(Yup.string, "State", function (message) {
  return this.test("State", message, function (value) {
    if (!value) return true;
    return false;
  });
});
Yup.addMethod(Yup.string, "Pincode", function (message) {
  return this.test("Pincode", message, function (value) {
    if (!value) return true;
    return false;
  });
});
Yup.addMethod(Yup.string, "PickupLocality", function (message) {
  return this.test("PickupLocality", message, function (value) {
    if (!value) return true;
    return false;
  });
});
Yup.addMethod(Yup.string, "PickupCity", function (message) {
  return this.test("PickupCity", message, function (value) {
    if (!value) return true;
    return false;
  });
});
Yup.addMethod(Yup.string, "PickupDistrict", function (message) {
  return this.test("PickupDistrict", message, function (value) {
    if (!value) return true;
    return false;
  });
});
Yup.addMethod(Yup.string, "PickupState", function (message) {
  return this.test("PickupState", message, function (value) {
    if (!value) return true;
    return false;
  });
});
Yup.addMethod(Yup.string, "PickupPincode", function (message) {
  return this.test("PickupPincode", message, function (value) {
    if (!value) return true;
    return false;
  });
});


const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  contactNumber: Yup.string().required("Contact Number is required"),
  email: Yup.string().email("Invalid email ").required("Email is required"),
  locality: Yup.string().locality("Invalid address").required("Locality is required"),
  city: Yup.string().city("Invalid").required("city is required"),
  District: Yup.string().District("Invalid  ").required("District is required"),
  State: Yup.string().State("Invalid ").required("State is required"),
  Pincode: Yup.string().Pincode("Invalid  ").required("Pincode is required"),
  PickupLocality: Yup.string().PickupLocality("Invalid  ").required("PickupLocality is required"),
  PickupCity: Yup.string().PickupCity("Invalid  ").required("PickupCity is required"),
  PickupDistrict: Yup.string().PickupDistrict("Invalid  ").required("PickupDistrict is required"),
  PickupState: Yup.string().PickupState("Invalid  ").required("PickupState is required"),
  PickupPincode: Yup.string().PickupPincode("Invalid  ").required("PickupPincode is required"),
});

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
  };

  const formStyle = {
    width: "100%",
    marginTop: "3%",
  };

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      contactNumber: "",
      email: "",
      locality: "",
      city: "",
      District: "",
      State: "",
      Pincode: "",
      PickupLocality: "",
      PickupCity: "",
      PickupDistrict: "",
      PickupState: "",
      PickupPincode: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box
      sx={{
        background:
          "radial-gradient(circle at 100% 100%, #023159, #1F476A, #F5F5F5)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "25",
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
            <form style={formStyle} onSubmit={handleSubmit}>
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
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    error={
                      formik.touched.firstName &&
                      Boolean(formik.errors.firstName)
                    }
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
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
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
                    }
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
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
                    type="number"
                    name="contactNumber"
                    size="small"
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
                    type="email"
                    size="small"
                    sx={textFieldStyles}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>

                <Grid item xs={12} sm={4}>
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
                    id="locality"
                    label="Locality / Building / Street / Society"
                    name="address"
                    size="small"
                    sx={textFieldStyles}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.locality}
                    error={
                      formik.touched.locality && Boolean(formik.errors.locality)
                    }
                    helperText={
                      formik.touched.locality && formik.errors.locality
                    }
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="city"
                    label="City / Town  District"
                    name="city"
                    size="small"
                    sx={textFieldStyles}

                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="District"
                    label="District"
                    name="District"
                    size="small"
                    sx={textFieldStyles}

                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.District}
                    error={formik.touched.District && Boolean(formik.errors.District)}
                    helperText={formik.touched.District && formik.errors.District}
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

                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.State}
                    error={formik.touched.State && Boolean(formik.errors.State)}
                    helperText={formik.touched.State && formik.errors.State}
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

                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Pincode}
                    error={formik.touched.Pincode && Boolean(formik.errors.Pincode)}
                    helperText={formik.touched.Pincode && formik.errors.Pincode}
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
                    id="PickupLocality"
                    label="Locality / Building / Street / Society"
                    name=" Pickup Location/Locality / Building / Street / Society"
                    size="small"
                    sx={textFieldStyles}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.PickupLocality}
                    error={formik.touched.PickupLocality && Boolean(formik.errors.PickupLocality)}
                    helperText={formik.touched.PickupLocality && formik.errors.PickupLocality}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="PickupCity"
                    label="City / Town  District"
                    name="Pickup Location/city/Town"
                    size="small"
                    sx={textFieldStyles}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.PickupCity}
                    error={formik.touched.PickupCity && Boolean(formik.errors.PickupCity)}
                    helperText={formik.touched.PickupCity && formik.errors.PickupCity}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id=" PickupDistrict"
                    label=" District"
                    name=" Pickup Location/District"
                    size="small"
                    sx={textFieldStyles}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.PickupDistrict}
                    error={formik.touched.PickupDistrict && Boolean(formik.errors.PickupDistrict)}
                    helperText={formik.touched.PickupDistrict && formik.errors.PickupDistrict}
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="PickupState"
                    label="State"
                    name="Pickup Location/State"
                    size="small"
                    sx={textFieldStyles}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.PickupState}
                    error={formik.touched.PickupState && Boolean(formik.errors.PickupState)}
                    helperText={formik.touched.PickupState && formik.errors.PickupState}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="PickupPincode"
                    label=" Pincode"
                    name="Pickup Location/Pincode"
                    size="small"
                    sx={textFieldStyles}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.PickupPincode}
                    error={formik.touched.PickupPincode && Boolean(formik.errors.PickupPincode)}
                    helperText={formik.touched.PickupPincode && formik.errors.PickupPincode}
                  />
                </Grid>
              </Grid>
              <Box align="center">
                <Button
                  type="button"
                  variant="contained"
                  sx={{ ...submitButtonStyle }}
                  onClick={formik.handleSubmit}
                >
                  {/* <NavLink 
                    to="/home" 
                    style={{
                      textDecoration: "none",
                      color: Colors.palette.primary.main,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >  */}
                  Submit <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
                  {/* </NavLink> */}
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