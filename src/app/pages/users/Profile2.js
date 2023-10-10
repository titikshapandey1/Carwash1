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
import { useFormik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

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

const initialValues = {
  firstName: "",
  lastName: "",
  contactNumber: "",
  alternateNumber: "",
  email: "",
  locality: "",
  city: "",
  District: "",
  State: "",
  Pincode: "",
  

};

// Yup.addMethod(Yup.string, "Locality", function (message) {
//   return this.test("Locality", message, function (value) {
//     if (!value) return true;
//     return false;
//   });
// });
// Yup.addMethod(Yup.string, "City", function (message) {
//   return this.test("City", message, function (value) {
//     if (!value) return true;
//     return false;
//   });
// });
// Yup.addMethod(Yup.string, "District", function (message) {
//   return this.test("District", message, function (value) {
//     if (!value) return true;
//     return false;
//   });
// });
// Yup.addMethod(Yup.string, "State", function (message) {
//   return this.test("State", message, function (value) {
//     if (!value) return true;
//     return false;
//   });
// });
// Yup.addMethod(Yup.string, "Pincode", function (message) {
//   return this.test("Pincode", message, function (value) {
//     if (!value) return true;
//     return false;
//   });
// });

// hlo

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  surname: Yup.string().required("surname Name is required"),
  contactNumber: Yup.string()
    .required("Contact Number is required")
    .matches(/^[1-9]\d{9}$/, "Invalid Contact Number"),
    alternateNumber: Yup.string()
    .required("alternate Number is required")
    .matches(/^[1-9]\d{9}$/, "Invalid Contact Number"),
  email: Yup.string().email("Invalid email ").required("Email is required"),
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

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      surname: "",
      contactNumber: "",
      alternateNumber: "",
      email: "",
      locality: "",
      city: "",
      District: "",
      State: "",
      Pincode: "",
      


    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });


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
            <Box
              sx={{
                display: "flex",
                position: "relative",
                marginBottom: "2rem",
              }}
            >
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
            <form style={formStyle} onSubmit={handleSubmit}>
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
                      formik.touched.firstName && formik.errors.firstName
                    }
                    
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="surname"
                    placeholder="Surname"
                    name="surname"
                    // sx={{ border: "1px solid black" }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.surname}
                    error={
                      formik.touched.surname && Boolean(formik.errors.surname)
                    }
                    helperText={
                      formik.touched.surname && formik.errors.surname
                    }
                  />
                  {/* .... */}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="contactNumber"
                    placeholder="Contact Number"
                    name="contactNumber"
                    // sx={{ border: "1px solid black" }}
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
                    // sx={{ border: "1px solid black" }}
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
                    // sx={{ border: "1px solid black" }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: Colors.palette.primary.darkBlue,
                      fontWeight: "600",
                    }}
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
                    placeholder="Locality / Building / Street / Society"
                    name="locality"
                    // sx={{ border: "1px solid black" }}
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
                    placeholder="City / Town  District"
                    name="city"
                    // sx={{ border: "1px solid black" }}
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
                    id= "District"
                    placeholder = "District"
                    name= "District"
                    // sx={{ border: "1px solid black" }}
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
                    placeholder="State"
                    name="State"
                    // sx={{ border: "1px solid black" }}
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
                    placeholder=" Pincode"
                    name="Pincode"
                    // sx={{ border: "1px solid black" }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Pincode}
                    error={formik.touched.Pincode && Boolean(formik.errors.Pincode)}
                    helperText={formik.touched.Pincode && formik.errors.Pincode}
                  />
                </Grid>
              </Grid>
              <Box align="center">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{ ...submitButtonStyle }}
                  onClick={formik.handleSubmit}
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
