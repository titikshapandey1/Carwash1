import React from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import Sedan from "../../../assests/images/car1guest.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Colors from "../../../utils/colors";
import { NavLink } from "react-router-dom";
import Axios from "../../../utils/Axios";
import axios from "axios";

function RegisterPage() {

  const RegiterUser = async() =>{
    const data={
      firstName: formik.values.firstName,
      surName: formik.values.surName,
      mobileNumber: formik.values.mobileNumber,
      alternateNumber: formik.values.alternateNumber,
      email: formik.values.email,
      
      address: {
        locality: formik.values.locality,
        city: formik.values.city,
        district: formik.values.district,
        state: formik.values.state,
        pincode: formik.values.pincode,
      },
      age: formik.values.age,
      price: formik.values.price,
      createusername: formik.values.createusername,
      password: formik.values.password,
    };
    try{
      const response=await Axios.post("/src/routes/createData" ,data);
       console.log("API Response",response.data);
      
    }
    catch(error){
      console.log(error)
    }
  }



  const paperStyle = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    borderRadius: 15,
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

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First Name is required")
      .matches(/^[A-Za-z]+$/, "Only letters are allowed in First Name"),
      surName: Yup.string()
      .required("Last Name is required")
      .matches(/^[A-Za-z]+$/, "Only letters are allowed in Last Name"),
      mobileNumber: Yup.string()
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
    district: Yup.string()
      .required("District is required")
      .matches(/^[A-Za-z]+$/, "Only letters are allowed in District"),
    state: Yup.string()
      .required("State is required")
      .matches(/^[A-Za-z]+$/, "Only letters are allowed in State"),
    pincode: Yup.string()
      .required("Pincode is required")
      .test(
        "valid-pincode",
        "Invalid Pincode",
        (value) => value && /^[1-9][0-9]{5}$/.test(value)
      ),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      surName: "",
      mobileNumber: "",
      alternateNumber: "",

      email: "",
      locality: "",
      city: "",
      district: "",
      state: "",
      pincode: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("On Submit Values: ", values);
      formik.resetForm();
    },
  });

  return (
    <Box
      sx={{
        background:
          "radial-gradient(circle at 100% 100%, #023159, #1F476A, #F5F5F5)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "170vh",
          height: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          maxWidth="sm"
          sx={{ mt: "8%", mb: "8%", ml: "20%", mr: "20%" }}
        >
          <Grid
            container
            style={{
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              height: "100%",
            }}
          >
            <Paper elevation={10} style={paperStyle}>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                }}
              >
                <Button>
                  <NavLink
                    to="/login"
                    style={{
                      textDecoration: "none",
                      color: Colors.palette.secondary.main,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ArrowBackIosIcon />
                    Login
                  </NavLink>
                </Button>
              </Box>
              <Typography
                variant="h6"
                sx={{
                  mt: "35px",
                  mb: "30px",
                  justifyContent: "center",
                  color: Colors.palette.secondary.main,
                }}
              >
                Enter your credentials here:
              </Typography>
              <form
                style={{ color: Colors.palette.secondary.main }}
                onSubmit={formik.handleSubmit}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      size="small"
                      id="firstName"
                      label="First Name"
                      name="firstName"
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
                      size="small"
                      id="surName"
                      label="Last Name"
                      name="surName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.surName}
                      error={
                        formik.touched.surName &&
                        Boolean(formik.errors.surName)
                      }
                      helperText={
                        formik.touched.surName && formik.errors.surName
                      }
                      sx={textFieldStyles}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      size="small"
                      id="mobileNumber"
                      label="Contact Number"
                      // type="Mobile"
                      name="mobileNumber"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.mobileNumber}
                      error={
                        formik.touched.mobileNumber &&
                        Boolean(formik.errors.mobileNumber)
                      }
                      helperText={
                        formik.touched.mobileNumber &&
                        formik.errors.mobileNumber
                      }
                      sx={textFieldStyles}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      size="small"
                      id="alternateNumber"
                      label="Alternate Number"
                      name="alternateNumber"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.alternateNumber}
                      error={
                        formik.touched.alternateNumber &&
                        Boolean(formik.errors.alternateNumber)
                      }
                      helperText={
                        formik.touched.alternateNumber &&
                        formik.errors.alternateNumber
                      }
                      sx={textFieldStyles}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      size="small"
                      id="email"
                      type="email"
                      label="Email Address"
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                      sx={textFieldStyles}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="h6"
                      sx={{ color: Colors.palette.secondary.main }}
                    >
                      Address
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      size="small"
                      required
                      fullWidth
                      id="locality"
                      label="Locality / Building / Street / Society"
                      name="locality"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.locality}
                      error={
                        formik.touched.locality &&
                        Boolean(formik.errors.locality)
                      }
                      helperText={
                        formik.touched.locality && formik.errors.locality
                      }
                      sx={textFieldStyles}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      size="small"
                      id="city"
                      label="City / Town  District"
                      name="city"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.city && Boolean(formik.errors.city)}
                      helperText={formik.touched.city && formik.errors.city}
                      sx={textFieldStyles}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      size="small"
                      id="district"
                      label="District"
                      name="district"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.district &&
                        Boolean(formik.errors.district)
                      }
                      helperText={
                        formik.touched.district && formik.errors.district
                      }
                      sx={textFieldStyles}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      size="small"
                      id="state"
                      label="State"
                      name="state"
                      onChange={formik.handleChange}
                      s
                      onBlur={formik.handleBlur}
                      value={formik.values.state}
                      error={
                        formik.touched.state && Boolean(formik.errors.state)
                      }
                      helperText={formik.touched.state && formik.errors.state}
                      sx={textFieldStyles}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      size="small"
                      id="pincode"
                      label="Pincode"
                      name="pincode"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.pincode}
                      error={
                        formik.touched.pincode && Boolean(formik.errors.pincode)
                      }
                      helperText={
                        formik.touched.pincode && formik.errors.pincode
                      }
                      sx={textFieldStyles}
                    />
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    sx={submitButtonStyle}
                    onClick={RegiterUser}
                  >
                    {/* <NavLink
                      to="/login"
                      style={{
                        textDecoration: "none",
                        color: Colors.palette.primary.main,
                        display: "flex",
                        alignItems: "center",
                      }}
                    > */}
                    Submit <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
                    {/* </NavLink> */}
                  </Button>
                </Box>
              </form>
            </Paper>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default RegisterPage;
