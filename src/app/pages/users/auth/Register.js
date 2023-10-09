// import React from "react";
// import {
//   Container,
//   Grid,
//   TextField,
//   Button,
//   Typography,
//   Box,
//   Paper,
// } from "@mui/material";
// // import car1 from '../../assests/images/car1guest.png';
// import Sedan from "../../../assests/images/car1guest.png";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import Colors from "../../../utils/colors";
// import { NavLink, Link } from "react-router-dom";

// function RegisterPage() {
//   const paperStyle = {
//     padding: "20px",
//     display: "flex",
//     flexDirection: "column",
//     borderRadius: 15,
//     // opacity: ".5",
//   };
//   const formStyle = {
//     position: "center",
//     color: Colors.palette.secondary.main,
//   };

//   const submitButtonStyle = {
//     marginTop: "20px",
//     marginBottom: "20px",
//     padding: "15px",
//     borderRadius: 5,
//     display: "flex",
//     textAlign: "center",
//     backgroundColor: Colors.palette.secondary.main,
//   };
//   const textFieldStyles = {
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": {
//         borderColor: "black",
//       },
//       "& input": {
//         color: "black",
//       },
//       "& input::placeholder": {
//         color: "darkblack",
//       },
//     },
//   };
//   const img = {
//     // backgroundImage: `url(${car1})`,
//     backgroundImage: `url(${Sedan})`,

//     backgroundPosition: "center",
//     backgroundSize: "contain",
//     backgroundRepeat: "no-repeat",
//     borderRadius: 50,
//     // height: "100%",
//   };

//   const validationSchema = Yup.object().shape({
//     firstName: Yup.string().required("First Name is required"),
//     lastName: Yup.string().required("Last Name is required"),
//     contactNumber: Yup.string()
//       .required("Contact Number is required")
//       .matches(/^\d{10}$/, "Invalid Contact Number"),
//     alternateNumber: Yup.string(),
//     email: Yup.string()
//       .required("Email Address is required")
//       .email("Invalid Email Address"),
//     address: Yup.string().required("Field is required"),
//   });

//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       contactNumber: "",
//       alternateNumber: "",
//       email: "",
//       address: "",
//     },
//     validationSchema,
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });

//   return (
//     <Box
//       sx={{
//         background:
//           "radial-gradient(circle at 100% 100%, #023159, #1F476A, #F5F5F5)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         display: "flex",
//         justifyContent: "center",
//         // alignItems: "center",
//       }}
//     >
//       <Box
//         sx={{
//           // bac
//           width: "170vh",
//           height: "50%",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Container
//           maxWidth="sm"
//           sx={{ mt: "8%", mb: "8%", ml: "20%", mr: "20%" }}
//         >
//           <Grid
//             container
//             style={{
//               // backgroundImage: `url(${car1})`,
//               // backgroundImage: `url(${Sedan})`,

//               backgroundPosition: "center",
//               backgroundSize: "contain",
//               backgroundRepeat: "no-repeat",
//               // borderRadius: 50,
//               height: "100%",
//             }}
//           >
//             <Paper elevation={10} style={paperStyle}>
//               <Box
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "left",
//                 }}
//               >
//                 <Button>
//                   <NavLink
//                     to="/login"
//                     style={{
//                       textDecoration: "none",
//                       color: Colors.palette.secondary.main,
//                       display: "flex",
//                       alignItems: "center",
//                     }}
//                   >
//                     <ArrowBackIosIcon />
//                     Login
//                   </NavLink>
//                 </Button>
//               </Box>
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mt: "35px",
//                   mb: "30px",
//                   justifyContent: "center",
//                   color: Colors.palette.secondary.main,
//                 }}
//               >
//                 Enter your credentials here:
//               </Typography>
//               <form
//                 style={formStyle}
//                 // noValidates
//                 onSubmit={formik.handleSubmit}
//               >
//                 <Grid container spacing={2}>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       variant="outlined"
//                       required
//                       fullWidth
//                       size="small"
//                       id="firstName"
//                       placeholder="First Name"
//                       name="firstName"
//                       onChange={formik.handleChange}
//                       value={formik.values.firstName}
//                       error={
//                         formik.touched.firstName &&
//                         Boolean(formik.errors.firstName)
//                       }
//                       helperText={
//                         formik.touched.firstName && formik.errors.firstName
//                       }
//                       sx={textFieldStyles}
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       variant="outlined"
//                       required
//                       fullWidth
//                       size="small"
//                       id="lastName"
//                       placeholder="Last Name"
//                       name="lastName"
//                       onChange={formik.handleChange}
//                       value={formik.values.lastName}
//                       error={
//                         formik.touched.lastName &&
//                         Boolean(formik.errors.lastName)
//                       }
//                       helperText={
//                         formik.touched.lastName && formik.errors.lastName
//                       }
//                       sx={textFieldStyles}
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       variant="outlined"
//                       required
//                       fullWidth
//                       size="small"
//                       id="contactNumber"
//                       placeholder="Contact Number"
//                       name="contactNumber"
//                       onChange={formik.handleChange}
//                       value={formik.values.contactNumber}
//                       error={
//                         formik.touched.contactNumber &&
//                         Boolean(formik.errors.contactNumber)
//                       }
//                       helperText={
//                         formik.touched.contactNumber &&
//                         formik.errors.contactNumber
//                       }
//                       sx={textFieldStyles}
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       variant="outlined"
//                       required
//                       fullWidth
//                       size="small"
//                       id="alternateNumber"
//                       placeholder="Alternate Number"
//                       name="alternateNumber"
//                       onChange={formik.handleChange}
//                       value={formik.values.alternateNumber}
//                       sx={textFieldStyles}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       variant="outlined"
//                       required
//                       fullWidth
//                       size="small"
//                       id="email"
//                       placeholder="Email Address"
//                       name="email"
//                       onChange={formik.handleChange}
//                       value={formik.values.email}
//                       error={
//                         formik.touched.email && Boolean(formik.errors.email)
//                       }
//                       helperText={formik.touched.email && formik.errors.email}
//                       sx={textFieldStyles}
//                     />
//                   </Grid>

//                   <Grid item xs={12}>
//                     <Typography
//                       variant="h6"
//                       sx={{ color: Colors.palette.secondary.main }}
//                     >
//                       Address
//                     </Typography>
//                   </Grid>

//                   <Grid item xs={12}>
//                     <TextField
//                       variant="outlined"
//                       size="small"
//                       required
//                       fullWidth
//                       id="Locality / Building / Street / Society"
//                       placeholder="Locality / Building / Street / Society"
//                       name="Locality / Building / Street / Society"
//                       onChange={formik.handleChange}
//                       value={formik.values.address}
//                       error={
//                         formik.touched.address && Boolean(formik.errors.address)
//                       }
//                       helperText={
//                         formik.touched.address && formik.errors.address
//                       }
//                       sx={textFieldStyles}
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       variant="outlined"
//                       required
//                       fullWidth
//                       size="small"
//                       id="city/Town"
//                       placeholder="City / Town  District"
//                       name="city/Town"
//                       onChange={formik.handleChange}
//                       error={
//                         formik.touched.address && Boolean(formik.errors.address)
//                       }
//                       helperText={
//                         formik.touched.address && formik.errors.address
//                       }
//                       sx={textFieldStyles}
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       variant="outlined"
//                       required
//                       fullWidth
//                       size="small"
//                       id=" District"
//                       placeholder=" District"
//                       name=" District"
//                       onChange={formik.handleChange}
//                       error={
//                         formik.touched.District &&
//                         Boolean(formik.errors.District)
//                       }
//                       helperText={
//                         formik.touched.District && formik.errors.District
//                       }
//                       sx={textFieldStyles}
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={8}>
//                     <TextField
//                       variant="outlined"
//                       required
//                       fullWidth
//                       size="small"
//                       id="State"
//                       placeholder="State"
//                       name="State"
//                       onChange={formik.handleChange}
//                       error={
//                         formik.touched.District &&
//                         Boolean(formik.errors.District)
//                       }
//                       helperText={
//                         formik.touched.District && formik.errors.District
//                       }
//                       sx={textFieldStyles}
//                     />
//                   </Grid>

//                   <Grid item xs={12} sm={4}>
//                     <TextField
//                       variant="outlined"
//                       required
//                       fullWidth
//                       size="small"
//                       id="Pincode"
//                       placeholder=" Pincode"
//                       name="Pincode"
//                       onChange={formik.handleChange}
//                       error={
//                         formik.touched.Pincode && Boolean(formik.errors.Pincode)
//                       }
//                       helperText={
//                         formik.touched.Pincode && formik.errors.Pincode
//                       }
//                       sx={textFieldStyles}
//                     />
//                   </Grid>
//                 </Grid>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     sx={{ ...submitButtonStyle }}
//                   >
//                     <NavLink
//                       to="/login"
//                       style={{
//                         textDecoration: "none",
//                         color: Colors.palette.primary.main,
//                         display: "flex",
//                         alignItems: "center",
//                       }}
//                     >
//                       Submit <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
//                     </NavLink>
//                   </Button>
//                 </Box>
//               </form>
//               {/* </card> */}
//             </Paper>
//           </Grid>
//         </Container>
//       </Box>
//     </Box>
//   );
// }

// export default RegisterPage;



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

function RegisterPage() {
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
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    contactNumber: Yup.string()
      .required("Contact Number is required")
      .matches(/^[0-9]+$/, "Contact Number should only contain digits"),
    alternateNumber: Yup.string(),
    email: Yup.string()
      .required("Email Address is required")
      .email("Invalid Email Address"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City/Town is required"),
    district: Yup.string().required("District is required"),
    state: Yup.string().required("State is required"),
    pincode: Yup.string()
      .required("Pincode is required")
      .matches(/^[0-9]+$/, "Pincode should only contain digits"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      contactNumber: "",
      alternateNumber: "",
      email: "",
      address: "",
      city: "",
      district: "",
      state: "",
      pincode: "",
    },
    validationSchema,
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
              <form style={{ color: Colors.palette.secondary.main }} onSubmit={formik.handleSubmit}>
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
                      value={formik.values.firstName}
                      error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                      helperText={formik.touched.firstName && formik.errors.firstName}
                      sx={textFieldStyles}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      size="small"
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                      error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                      helperText={formik.touched.lastName && formik.errors.lastName}
                      sx={textFieldStyles}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      size="small"
                      id="contactNumber"
                      label="Contact Number"
                      // type="Mobile"
                      name="contactNumber"
                      onChange={formik.handleChange}
                      value={formik.values.contactNumber}
                      error={formik.touched.contactNumber && Boolean(formik.errors.contactNumber)}
                      helperText={formik.touched.contactNumber && formik.errors.contactNumber}
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
                      value={formik.values.alternateNumber}
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
                      value={formik.values.email}
                      error={formik.touched.email && Boolean(formik.errors.email)}
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
                      id="address"
                      label="Locality / Building / Street / Society"
                      name="address"
                      onChange={formik.handleChange}
                      value={formik.values.address}
                      error={formik.touched.address && Boolean(formik.errors.address)}
                      helperText={formik.touched.address && formik.errors.address}
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
                      error={formik.touched.district && Boolean(formik.errors.district)}
                      helperText={formik.touched.district && formik.errors.district}
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
                      error={formik.touched.state && Boolean(formik.errors.state)}
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
                      error={formik.touched.pincode && Boolean(formik.errors.pincode)}
                      helperText={formik.touched.pincode && formik.errors.pincode}
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
                  >
                    <NavLink
                      to="/login"
                      style={{
                        textDecoration: "none",
                        color: Colors.palette.primary.main,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Submit{" "}
                      <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
                    </NavLink>
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
