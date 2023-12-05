// import React, { useState } from "react";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import {
//   Container,
//   TextField,
//   Button,
//   Box,
//   Paper,
//   Grid,
//   Typography,
// } from "@mui/material";
// import { NavLink, useNavigate, useLocation } from "react-router-dom";
// import Colors from "../../../utils/colors";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import Axios from "../../../utils/Axios";
// import Loader from "../../../components/Loader";

// function Email() {
//   const [otpFromAPI, setOtpFromAPI] = useState(null);
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const EmailOTP = async () => {
//     setLoading(true);
//     const data = {
//       userName: formik.values.userName,
//     };

//     try {
//       const response = await Axios.post("/forget-password", data);
//       const otp = response.data.otp;
//       setOtpFromAPI(otp);
//       console.log("OTP sent:", response.data);
//       console.log(otp);
//       alert("OTP Sent To Email");
//       navigate("/otp", {
//         state: { formData: data, otp, formType: "forgetPassword" },
//       });
//     } catch (error) {
//       console.error("Login failed:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const paperStyle = {
//     padding: "20px",
//     display: "flex",
//     flexDirection: "column",
//     borderRadius: 25,
//   };

//   const formStyle = {
//     width: "100%",
//     marginTop: "10%",
//     textAlign: "center",
//   };

//   const submitButtonStyle = {
//     marginTop: "20px",
//     marginBottom: "10px",
//     padding: "15px",
//     borderRadius: 5,
//     display: "flex",
//     textAlign: "center",
//     backgroundColor: Colors.palette.secondary.main,
//   };

//   const validationSchema = yup.object({
//     userName: yup
//       .string()
//       .email("Invalid Email")
//       .required("Username/Email is required"),
//   });

//   const formik = useFormik({
//     initialValues: {
//       userName: "",
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       console.log("On Submit: ", values);
//     },
//   });

//   return (
//     <>
//       <Box
//         sx={{
//           background:
//             "radial-gradient(circle at 100% 100%, #023159, #1F476A, #F5F5F5)",
//           height: "100vh",
//           width: "100vw",
//           display: "flex",
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
//           <Container maxWidth="sm">
//             <Grid container>
//               <Paper
//                 elevation={3}
//                 style={paperStyle}
//                 sx={{
//                   width: "100%",
//                   background: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))`,
//                 }}
//               >
//                 <Box style={{ display: "flex" }}>
//                   <Button
//                     sx={{
//                       color: Colors.palette.secondary.main,
//                       justifyContent: "flex-start",
//                     }}
//                   >
//                     <NavLink
//                       to="/login"
//                       style={{
//                         textDecoration: "none",
//                         color: Colors.palette.secondary.main,
//                         display: "flex",
//                         alignItems: "center",
//                       }}
//                     >
//                       <ArrowBackIosIcon sx={{ fontSize: "20px" }} />
//                     </NavLink>
//                   </Button>
//                 </Box>
//                 <form
//                   style={formStyle}
//                   noValidate
//                   onSubmit={formik.handleSubmit}
//                 >
//                   <Typography
//                     variant="h5"
//                     sx={{
//                       color: Colors.palette.secondary.main,
//                       flex: 0.8,
//                       textAlign: "center",
//                       mb: 5,
//                     }}
//                   >
//                     Enter Email Address
//                   </Typography>
//                   <TextField
//                     variant="outlined"
//                     placeholder="Username/Email"
//                     id="userName"
//                     name="userName"
//                     fullWidth
//                     size="small"
//                     type="email"
//                     value={formik.values.userName}
//                     onChange={formik.handleChange}
//                     error={
//                       formik.touched.userName && Boolean(formik.errors.userName)
//                     }
//                     helperText={
//                       formik.touched.userName && formik.errors.userName
//                     }
//                     sx={{ marginBottom: "20px" }}
//                   />

//                   <Box
//                     sx={{
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",
//                     }}
//                   >
//                     {" "}
//                     {loading ? (
//                       <Loader />
//                     ) : (
//                       <Button
//                         type="submit"
//                         variant="contained"
//                         sx={{ ...submitButtonStyle }}
//                         onClick={() => EmailOTP()}
//                       >
//                         Submit <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
//                       </Button>
//                     )}
//                   </Box>
//                 </form>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: "row",
//                     marginTop: "16px",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     color: Colors.palette.secondary.main,
//                   }}
//                 >
//                   <h5>Already have an account?&nbsp;&nbsp;</h5>
//                   <NavLink
//                     to="/login"
//                     style={{
//                       textDecoration: "none",
//                       color: Colors.palette.secondary.main,
//                       display: "flex",
//                       alignItems: "center",
//                     }}
//                   >
//                     <h5>Login</h5>
//                   </NavLink>
//                 </Box>
//               </Paper>
//             </Grid>
//           </Container>
//         </Box>
//       </Box>
//     </>
//   );
// }

// export default Email;

import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Container,
  TextField,
  Button,
  Box,
  Paper,
  Grid,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Colors from "../../../utils/colors";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Axios from "../../../utils/Axios";
import Loader from "../../../components/Loader";

function Email() {
  const [otpFromAPI, setOtpFromAPI] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [errorDialogMessage, setErrorDialogMessage] = useState("");

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleErrorDialogClose = () => {
    setErrorDialogOpen(false);
  };
  const EmailOTP = async () => {
    setLoading(true);
    const data = {
      userName: formik.values.userName,
    };

    try {
      const response = await Axios.post("/forget-password", data);
      const otp = response.data.otp;
      setOtpFromAPI(otp);
      console.log("OTP sent:", response.data);
      console.log(otp);
      setDialogMessage("OTP Sent To Email");
      setDialogOpen(true);
      navigate("/otp", {
        state: { formData: data, otp, formType: "forgetPassword" },
      });
    } catch (error) {
      console.error("Login failed:", error);
      setErrorDialogMessage("Error sending OTP. Please try again.");
      setErrorDialogOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const paperStyle = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    borderRadius: 25,
  };

  const formStyle = {
    width: "100%",
    marginTop: "10%",
    textAlign: "center",
  };

  const submitButtonStyle = {
    marginTop: "20px",
    marginBottom: "10px",
    padding: "15px",
    borderRadius: 5,
    display: "flex",
    textAlign: "center",
    backgroundColor: Colors.palette.secondary.main,
  };

  const validationSchema = yup.object({
    userName: yup
      .string()
      .email("Invalid Email")
      .required("Username/Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("On Submit: ", values);
    },
  });

  return (
    <>
      <Box
        sx={{
          background:
            "radial-gradient(circle at 100% 100%, #023159, #1F476A, #F5F5F5)",
          height: "100vh",
          width: "100vw",
          display: "flex",
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
          <Container maxWidth="sm">
            <Grid container>
              <Paper
                elevation={3}
                style={paperStyle}
                sx={{
                  width: "100%",
                  background: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))`,
                }}
              >
                <Box style={{ display: "flex" }}>
                  <Button
                    sx={{
                      color: Colors.palette.secondary.main,
                      justifyContent: "flex-start",
                    }}
                  >
                    <NavLink
                      to="/login"
                      style={{
                        textDecoration: "none",
                        color: Colors.palette.secondary.main,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <ArrowBackIosIcon sx={{ fontSize: "20px" }} />
                    </NavLink>
                  </Button>
                </Box>
                <form
                  style={formStyle}
                  noValidate
                  onSubmit={formik.handleSubmit}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: Colors.palette.secondary.main,
                      flex: 0.8,
                      textAlign: "center",
                      mb: 5,
                    }}
                  >
                    Enter Email Address
                  </Typography>
                  <TextField
                    variant="outlined"
                    placeholder="Username/Email"
                    id="userName"
                    name="userName"
                    fullWidth
                    size="small"
                    type="email"
                    value={formik.values.userName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.userName && Boolean(formik.errors.userName)
                    }
                    helperText={
                      formik.touched.userName && formik.errors.userName
                    }
                    sx={{ marginBottom: "20px" }}
                  />

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    {loading ? (
                      <Loader />
                    ) : (
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{ ...submitButtonStyle }}
                        onClick={() => EmailOTP()}
                      >
                        Submit <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
                      </Button>
                    )}
                  </Box>
                </form>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "16px",
                    justifyContent: "center",
                    alignItems: "center",
                    color: Colors.palette.secondary.main,
                  }}
                >
                  <h5>Already have an account?&nbsp;&nbsp;</h5>
                  <NavLink
                    to="/login"
                    style={{
                      textDecoration: "none",
                      color: Colors.palette.secondary.main,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <h5>Login</h5>
                  </NavLink>
                </Box>
              </Paper>
            </Grid>
          </Container>
        </Box>
      </Box>
      {/* Success Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          elevation: 5,
          style: {
            borderRadius: 20,
            backgroundColor: Colors.palette.success.main,
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
          {"SUCCESS"}
        </DialogTitle>
        <DialogContent sx={{ color: "#fff", paddingTop: "20px" }}>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ color: "#fff", mt: 2 }}
          >
            {dialogMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleDialogClose}
            variant="contained"
            sx={{ backgroundColor: "#fff", color: Colors.palette.success.main }}
            autoFocus
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Error Dialog */}
      <Dialog
        open={errorDialogOpen}
        onClose={handleErrorDialogClose}
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
            onClick={handleErrorDialogClose}
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

export default Email;
