import React, { useContext, useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  IconButton,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Colors from "../../../utils/colors";
import { NavLink } from "react-router-dom";
// import Axios from "../../../utils/Axios1";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
// import Loader from "../../../components/Loader";
import { AuthContext } from "../../../context/AuthContext";
import { LoadingButton } from "@mui/lab";

function RegisterPage() {
  const { userRegistration, VerifyLoading } = useContext(AuthContext);
  // const [otpFromAPI, setOtpFromAPI] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [errorDialogMessage, setErrorDialogMessage] = useState("");
  const navigate = useNavigate();

  const handleOpenErrorDialog = (message) => {
    setErrorDialogMessage(message);
    setErrorDialogOpen(true);
  };

  const handleCloseErrorDialog = () => {
    setErrorDialogOpen(false);
  };

  const paperStyle = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    borderRadius: 15,
    height: "auto",
  };

  const submitButtonStyle = {
    width: "50%",
    marginTop: 2,
    marginBottom: "5px",
    padding: "10px",
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
    userName: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        "Password should have one capital letter, one number, and one special character"
      )
      .min(6, "Password must be at least 6 characters in length"),
    locality: Yup.string().required("Locality is required"),
    city: Yup.string()
      .required("City is required")
      .matches(/^[A-Za-z]+$/, "Only letters are allowed in City"),
    district: Yup.string()
      .required("District is required")
      .matches(/^[A-Za-z]+$/, "Only letters are allowed in District"),
    state: Yup.string()
      .required("State is required")
      .matches(/^[A-Za-z ]+$/, "Only letters are allowed in State"),
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
      userName: "",
      password: "",
      locality: "",
      city: "",
      district: "",
      state: "",
      pincode: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const data = {
        firstname: values.firstName,
        lastname: values.surName,
        mobilenumber: values.mobileNumber,
        alternateNumber: values.alternateNumber,
        email: values.userName,
        password: values.password,
        address: {
          locality: values.locality,
          city: values.city,
          district: values.district,
          state: values.state,
          pincode: values.pincode,
        },
      };
      userRegistration(data, navigate);
    },
  });

  return (
    <>
      <Box
        sx={{
          background:
            "radial-gradient(circle at 100% 100%, #023159, #1F476A, #F5F5F5)",
          display: "flex",
          minHeight: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container maxWidth="sm" sx={{ mt: "1%", mb: "2%" }}>
            <Grid container>
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
                  align="center"
                  sx={{
                    mt: "5px",
                    mb: "10px",
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
                  <Grid container spacing={1}>
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
                        name="userName"
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
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        size="small"
                        id="password"
                        label="Password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        error={
                          formik.touched.password &&
                          Boolean(formik.errors.password)
                        }
                        helperText={
                          formik.touched.password && formik.errors.password
                        }
                        sx={textFieldStyles}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
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
                        error={
                          formik.touched.city && Boolean(formik.errors.city)
                        }
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
                          formik.touched.pincode &&
                          Boolean(formik.errors.pincode)
                        }
                        helperText={
                          formik.touched.pincode && formik.errors.pincode
                        }
                        sx={textFieldStyles}
                      />
                    </Grid>
                  </Grid>
                  {/* <Box
                    sx={{
                      mt: 2,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {loading ? (
                      <Loader />
                    ) : (
                      <Button
                        type="submit"
                        variant="contained"
                        sx={submitButtonStyle}
                        onClick={RegiterUser}
                      >
                        Submit <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
                      </Button>
                    )}
                  </Box> */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <LoadingButton
                      type="submit"
                      variant="contained"
                      sx={submitButtonStyle}
                      // onClick={sendOTP}
                      loading={VerifyLoading ? true : false}
                    >
                      Submit <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
                    </LoadingButton>
                  </Box>
                </form>
              </Paper>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Dialog
        open={errorDialogOpen}
        onClose={handleCloseErrorDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          elevation: 5,
          style: {
            borderRadius: 20,
            backgroundColor: Colors.palette.error.main,
          },
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            borderBottom: "2px solid #fff",
            color: "#fff",
            textAlign: "center",
            fontWeight: "600",
          }}
        >
          {"ERROR OCCURRED"}
        </DialogTitle>
        <DialogContent sx={{ color: "#fff", paddingTop: "20px" }}>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ color: "#fff", mt: 2 }}
          >
            {errorDialogMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseErrorDialog}
            variant="contained"
            sx={{ backgroundColor: "#fff", color: Colors.palette.error.main }}
            autoFocus
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default RegisterPage;

// import React, { useContext, useState } from "react";
// import {
//   Container,
//   Grid,
//   TextField,
//   Button,
//   Typography,
//   Box,
//   Paper,
//   IconButton,
//   InputAdornment,
// } from "@mui/material";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import Colors from "../../../utils/colors";
// import { NavLink } from "react-router-dom";
// // import Axios from "../../../utils/Axios1";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../../context/AuthContext";
// // import axios from "axios";
// // import { baseurl } from "../../../utils/Variable";

// import { LoadingButton } from "@mui/lab";

// function RegisterPage() {
//   const { userLogin, userRegistration, Loading, UserInfo } = useContext(AuthContext);

//   const [otpFromAPI, setOtpFromAPI] = useState(null);
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const paperStyle = {
//     padding: "20px",
//     display: "flex",
//     flexDirection: "column",
//     borderRadius: 15,
//     height: "auto",
//   };

//   const submitButtonStyle = {
//     marginTop: "10px",
//     marginBottom: "5px",
//     padding: "10px",
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

//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       surName: "",
//       mobileNumber: "",
//       alternateNumber: "",
//       userName: "",
//       password: "",
//       locality: "",
//       city: "",
//       district: "",
//       state: "",
//       pincode: "",
//     },

//     onSubmit: (values) => {
//       const data = {
//         firstname: values.firstName,
//         lastname: values.surName,
//         mobilenumber: values.mobileNumber,
//         alternateNumber: values.alternateNumber,
//         email: values.userName,
//         password: values.password,
//         address: {
//           locality: values.locality,
//           city: values.city,
//           district: values.district,
//           state: values.state,
//           pincode: values.pincode,
//         },
//       };
//       userRegistration(data, navigate);
//     },
//   });

//   return (
//     <>
//       <Box
//         sx={{
//           background:
//             "radial-gradient(circle at 100% 100%, #023159, #1F476A, #F5F5F5)",
//           display: "flex",
//           minHeight: "100vh",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Box
//           sx={{
//             width: "100%",
//             height: "100%",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Container maxWidth="sm" sx={{ mt: "1%", mb: "2%" }}>
//             <Grid container>
//               <Paper elevation={10} style={paperStyle}>
//                 <Box
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "left",
//                   }}
//                 >
//                   {/* <Button onClick={onLoginHandler}>Login</Button> */}
//                   <Button>
//                     <NavLink
//                       to="/login"
//                       style={{
//                         textDecoration: "none",
//                         color: Colors.palette.secondary.main,
//                         display: "flex",
//                         alignItems: "center",
//                       }}
//                     >
//                       <ArrowBackIosIcon />
//                       Login
//                     </NavLink>
//                   </Button>
//                 </Box>
//                 <Typography
//                   variant="h6"
//                   align="center"
//                   sx={{
//                     mt: "5px",
//                     mb: "10px",
//                     justifyContent: "center",
//                     color: Colors.palette.secondary.main,
//                   }}
//                 >
//                   Enter your credentials here:
//                 </Typography>
//                 <form
//                   style={{ color: Colors.palette.secondary.main }}
//                   onSubmit={formik.handleSubmit}
//                 >
//                   <Grid container spacing={1}>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         variant="outlined"
//                         required
//                         fullWidth
//                         size="small"
//                         id="firstName"
//                         label="First Name"
//                         name="firstName"
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         value={formik.values.firstName}
//                         error={
//                           formik.touched.firstName &&
//                           Boolean(formik.errors.firstName)
//                         }
//                         helperText={
//                           formik.touched.firstName && formik.errors.firstName
//                         }
//                         sx={textFieldStyles}
//                       />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         variant="outlined"
//                         required
//                         fullWidth
//                         size="small"
//                         id="surName"
//                         label="Last Name"
//                         name="surName"
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         value={formik.values.surName}
//                         error={
//                           formik.touched.surName &&
//                           Boolean(formik.errors.surName)
//                         }
//                         helperText={
//                           formik.touched.surName && formik.errors.surName
//                         }
//                         sx={textFieldStyles}
//                       />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         variant="outlined"
//                         required
//                         fullWidth
//                         size="small"
//                         id="mobileNumber"
//                         label="Contact Number"
//                         // type="Mobile"
//                         name="mobileNumber"
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         value={formik.values.mobileNumber}
//                         error={
//                           formik.touched.mobileNumber &&
//                           Boolean(formik.errors.mobileNumber)
//                         }
//                         helperText={
//                           formik.touched.mobileNumber &&
//                           formik.errors.mobileNumber
//                         }
//                         sx={textFieldStyles}
//                       />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         variant="outlined"
//                         fullWidth
//                         size="small"
//                         id="alternateNumber"
//                         label="Alternate Number"
//                         name="alternateNumber"
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         value={formik.values.alternateNumber}
//                         error={
//                           formik.touched.alternateNumber &&
//                           Boolean(formik.errors.alternateNumber)
//                         }
//                         helperText={
//                           formik.touched.alternateNumber &&
//                           formik.errors.alternateNumber
//                         }
//                         sx={textFieldStyles}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         variant="outlined"
//                         required
//                         fullWidth
//                         size="small"
//                         id="email"
//                         type="email"
//                         label="Email Address"
//                         name="userName"
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         value={formik.values.email}
//                         error={
//                           formik.touched.email && Boolean(formik.errors.email)
//                         }
//                         helperText={formik.touched.email && formik.errors.email}
//                         sx={textFieldStyles}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         variant="outlined"
//                         required
//                         fullWidth
//                         size="small"
//                         id="password"
//                         label="Password"
//                         name="password"
//                         type={showPassword ? "text" : "password"}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         value={formik.values.password}
//                         error={
//                           formik.touched.password &&
//                           Boolean(formik.errors.password)
//                         }
//                         helperText={
//                           formik.touched.password && formik.errors.password
//                         }
//                         sx={textFieldStyles}
//                         InputProps={{
//                           endAdornment: (
//                             <InputAdornment position="end">
//                               <IconButton
//                                 onClick={() => setShowPassword(!showPassword)}
//                               >
//                                 {showPassword ? (
//                                   <Visibility />
//                                 ) : (
//                                   <VisibilityOff />
//                                 )}
//                               </IconButton>
//                             </InputAdornment>
//                           ),
//                         }}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <Typography
//                         variant="h6"
//                         sx={{ color: Colors.palette.secondary.main }}
//                       >
//                         Address
//                       </Typography>
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         variant="outlined"
//                         size="small"
//                         required
//                         fullWidth
//                         id="locality"
//                         label="Locality / Building / Street / Society"
//                         name="locality"
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         value={formik.values.locality}
//                         error={
//                           formik.touched.locality &&
//                           Boolean(formik.errors.locality)
//                         }
//                         helperText={
//                           formik.touched.locality && formik.errors.locality
//                         }
//                         sx={textFieldStyles}
//                       />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         variant="outlined"
//                         required
//                         fullWidth
//                         size="small"
//                         id="city"
//                         label="City / Town  District"
//                         name="city"
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         error={
//                           formik.touched.city && Boolean(formik.errors.city)
//                         }
//                         helperText={formik.touched.city && formik.errors.city}
//                         sx={textFieldStyles}
//                       />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         variant="outlined"
//                         required
//                         fullWidth
//                         size="small"
//                         id="district"
//                         label="District"
//                         name="district"
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         error={
//                           formik.touched.district &&
//                           Boolean(formik.errors.district)
//                         }
//                         helperText={
//                           formik.touched.district && formik.errors.district
//                         }
//                         sx={textFieldStyles}
//                       />
//                     </Grid>
//                     <Grid item xs={12} sm={8}>
//                       <TextField
//                         variant="outlined"
//                         required
//                         fullWidth
//                         size="small"
//                         id="state"
//                         label="State"
//                         name="state"
//                         onChange={formik.handleChange}
//                         s
//                         onBlur={formik.handleBlur}
//                         value={formik.values.state}
//                         error={
//                           formik.touched.state && Boolean(formik.errors.state)
//                         }
//                         helperText={formik.touched.state && formik.errors.state}
//                         sx={textFieldStyles}
//                       />
//                     </Grid>
//                     <Grid item xs={12} sm={4}>
//                       <TextField
//                         variant="outlined"
//                         required
//                         fullWidth
//                         size="small"
//                         id="pincode"
//                         label="Pincode"
//                         name="pincode"
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         value={formik.values.pincode}
//                         error={
//                           formik.touched.pincode &&
//                           Boolean(formik.errors.pincode)
//                         }
//                         helperText={
//                           formik.touched.pincode && formik.errors.pincode
//                         }
//                         sx={textFieldStyles}
//                       />
//                     </Grid>
//                   </Grid>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",
//                     }}
//                   >
//                     <LoadingButton
//                       type="submit"
//                       variant="contained"
//                       sx={submitButtonStyle}
//                       // onClick={sendOTP}
//                       // loading={UserLoading ? true : false}
//                     >
//                       Submit <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
//                     </LoadingButton>
//                   </Box>
//                 </form>
//               </Paper>
//             </Grid>
//           </Container>
//         </Box>
//       </Box>
//     </>
//   );
// }

// export default RegisterPage;
