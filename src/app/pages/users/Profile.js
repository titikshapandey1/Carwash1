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
  password: "",
  Locality: "",
  City: "",
  District: "",
  State: "",
  Pincode: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required").matches(/^[A-Za-z]+$/, "Only letters are allowed in First Name"),
  surname: Yup.string().required("Surname Name is required").matches(/^[A-Za-z]+$/, "Only letters are allowed in SurName"),
  contactNumber: Yup.string()
    .required("Contact Number is required")
    .matches(/^[1-9]\d{9}$/, "Invalid Contact Number"),
  alternateNumber: Yup.string()
    .required("Alternate Number is required")
    .matches(/^[1-9]\d{9}$/, "Invalid Alternate Number"),
  email: Yup.string().email("Invalid email ").required("Email is required"),
  Locality: Yup.string().required("Locality is required"),
  City: Yup.string().required("City is required").matches(/^[A-Za-z]+$/, "Only letters are allowed in City"),
  District: Yup.string().required("District is required").matches(/^[A-Za-z]+$/, "Only letters are allowed in District"),
  State: Yup.string().required("State is required").matches(/^[A-Za-z]+$/, "Only letters are allowed in State"),
  Pincode: Yup.string()
    .required("Pincode is required")
    .matches(/^[1-9]\d{5}$/, "Invalid Pincode"),
});

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
      Locality: "",
      City: "",
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
                color: Colors.palette.primary.darkBlue,
                fontWeight: "600",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              Edit
            </Box>
            <Box sx={{ marginBottom: "2rem" }}>
              <CircleIcon
                sx={{
                  fontSize: "200px",
                  color: Colors.palette.secondary.lightGrey,
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
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.surname}
                    error={
                      formik.touched.surname && Boolean(formik.errors.surname)
                    }
                    helperText={formik.touched.surname && formik.errors.surname}
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
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
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
                    id="Locality"
                    placeholder="Locality / Building / Street / Society"
                    name="Locality"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Locality}
                    error={
                      formik.touched.Locality && Boolean(formik.errors.Locality)
                    }
                    helperText={
                      formik.touched.Locality && formik.errors.Locality
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="City"
                    placeholder="City / Town  District"
                    name="City"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.City}
                    error={formik.touched.City && Boolean(formik.errors.City)}
                    helperText={formik.touched.City && formik.errors.City}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="District"
                    placeholder="District"
                    name="District"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.District}
                    error={
                      formik.touched.District && Boolean(formik.errors.District)
                    }
                    helperText={
                      formik.touched.District && formik.errors.District
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
                    placeholder="Pincode"
                    name="Pincode"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Pincode}
                    error={
                      formik.touched.Pincode && Boolean(formik.errors.Pincode)
                    }
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

export default Profile;