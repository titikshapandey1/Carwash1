// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Container,
//   Grid,
//   Paper,
//   TextField,
//   Typography,
//   IconButton,
//   InputAdornment,
// } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import LockIcon from "@mui/icons-material/Lock";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import { useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import Colors from "../../../utils/colors";
// import Axios from "../../../utils/Axios";
// import Loader from "../../../components/Loader";

// function Login() {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const LoginUser = async () => {
//     setLoading(true);
//     const data = {
//       userName: formik.values.userName,
//       passWord: formik.values.passWord,
//     };

//     try {
//       const response = await Axios.post("/login", data);
//       console.log("Login successful:", response.data);
//       navigate("/home");
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
//     position: "center",
//   };

//   const submitButtonStyle = {
//     padding: "12px",
//     margin: "20px 0",
//     borderRadius: 15,
//     fontWeight: "600",
//     backgroundColor: Colors.palette.secondary.main,
//     display: "block",
//     textAlign: "center",
//     marginTop: "5%",
//     marginLeft: { xs: "20%", sm: "30%" },
//   };

//   const validationSchema = Yup.object({
//     userName: Yup.string()
//       .email("Invalid Email")
//       .required("Username/Email is required"),
//     passWord: Yup.string()
//       .required("Password is required")
//       .matches(
//         /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
//         "Password should have one capital letter, one number, and one special character"
//       )
//       .min(6, "Password must be at least 6 characters in length"),
//   });

//   const formik = useFormik({
//     initialValues: {
//       userName: "",
//       passWord: "",
//     },
//     validationSchema: validationSchema,
//     onSubmit: async (values) => {
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
//                 <Box sx={{ display: "flex" }}>
//                   <Button
//                     sx={{
//                       color: Colors.palette.secondary.main,
//                       justifyContent: "flex-start",
//                     }}
//                     onClick={() => navigate("/")}
//                   >
//                     <ArrowBackIosIcon />
//                   </Button>
//                   <Typography
//                     variant="h4"
//                     sx={{
//                       color: Colors.palette.secondary.main,
//                       flex: 0.8,
//                       textAlign: "center",
//                     }}
//                   >
//                     Log In
//                   </Typography>
//                 </Box>

//                 <form
//                   style={formStyle}
//                   noValidate
//                   onSubmit={formik.handleSubmit}
//                 >
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
//                   <TextField
//                     variant="outlined"
//                     placeholder="Password"
//                     id="passWord"
//                     name="passWord"
//                     fullWidth
//                     size="small"
//                     type={showPassword ? "text" : "passWord"}
//                     value={formik.values.password}
//                     onChange={formik.handleChange}
//                     error={
//                       formik.touched.passWord && Boolean(formik.errors.passWord)
//                     }
//                     helperText={
//                       formik.touched.passWord && formik.errors.passWord
//                     }
//                     InputProps={{
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <IconButton
//                             onClick={() => setShowPassword(!showPassword)}
//                           >
//                             {showPassword ? <Visibility /> : <VisibilityOff />}
//                           </IconButton>
//                         </InputAdornment>
//                       ),
//                     }}
//                   />
//                   <Typography
//                     sx={{
//                       color: Colors.palette.secondary.main,
//                       display: "flex",
//                       mt: "1.2rem",
//                       cursor: "pointer",
//                     }}
//                     onClick={() => navigate(`/email`)}
//                   >
//                     <LockIcon sx={{ mr: "1rem" }} />
//                     Forgot password?
//                   </Typography>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",
//                     }}
//                   >
//                     {loading ? (
//                       <Loader/>
//                     ) : (
//                       <Button
//                         type="submit"
//                         fullWidth
//                         variant="contained"
//                         style={{ ...submitButtonStyle }}
//                         onClick={() => LoginUser()}
//                       >
//                         Login
//                       </Button>
//                     )}
//                   </Box>
//                   <Box align="center">
//                     <Typography
//                       sx={{
//                         color: Colors.palette.secondary.main,
//                         cursor: "pointer",
//                       }}
//                       onClick={() => navigate(`/registerpage`)}
//                     >
//                       Don't have an account?&nbsp;&nbsp; Register here
//                     </Typography>
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

// export default Login;

import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Colors from "../../../utils/colors";
import Axios from "../../../utils/Axios";
import Loader from "../../../components/Loader";
import { useAuth } from "../../../utils/AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [errorDialogMessage, setErrorDialogMessage] = useState("");

  const handleOpenErrorDialog = (message) => {
    setErrorDialogMessage(message);
    setErrorDialogOpen(true);
  };

  const handleCloseErrorDialog = () => {
    setErrorDialogOpen(false);
  };

  const LoginUser = async () => {
    setLoading(true);
    const data = {
      userName: formik.values.userName,
      passWord: formik.values.passWord,
    };

    try {
      const response = await Axios.post("/login", data);
      console.log("Login successful:", response.data);
      const newToken = response.data.token;
      login(newToken);
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
      handleOpenErrorDialog(error.message || "An error occurred");
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
    position: "center",
  };

  const submitButtonStyle = {
    padding: "12px",
    margin: "20px 0",
    borderRadius: 15,
    fontWeight: "600",
    backgroundColor: Colors.palette.secondary.main,
    display: "block",
    textAlign: "center",
    marginTop: "5%",
    marginLeft: { xs: "20%", sm: "30%" },
  };

  const validationSchema = Yup.object({
    userName: Yup.string()
      .email("Invalid Email")
      .required("Username/Email is required"),
    passWord: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        "Password should have one capital letter, one number, and one special character"
      )
      .min(6, "Password must be at least 6 characters in length"),
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
      passWord: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
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
                <Box sx={{ display: "flex" }}>
                  <Button
                    sx={{
                      color: Colors.palette.secondary.main,
                      justifyContent: "flex-start",
                    }}
                    onClick={() => navigate("/")}
                  >
                    <ArrowBackIosIcon />
                  </Button>
                  <Typography
                    variant="h4"
                    sx={{
                      color: Colors.palette.secondary.main,
                      flex: 0.8,
                      textAlign: "center",
                    }}
                  >
                    Log In
                  </Typography>
                </Box>

                <form
                  style={formStyle}
                  noValidate
                  onSubmit={formik.handleSubmit}
                >
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
                  <TextField
                    variant="outlined"
                    placeholder="Password"
                    id="passWord"
                    name="passWord"
                    fullWidth
                    size="small"
                    type={showPassword ? "text" : "passWord"}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.passWord && Boolean(formik.errors.passWord)
                    }
                    helperText={
                      formik.touched.passWord && formik.errors.passWord
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Typography
                    sx={{
                      color: Colors.palette.secondary.main,
                      display: "flex",
                      mt: "1.2rem",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate(`/email`)}
                  >
                    <LockIcon sx={{ mr: "1rem" }} />
                    Forgot password?
                  </Typography>
                  <Box
                    sx={{
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
                        fullWidth
                        variant="contained"
                        style={{ ...submitButtonStyle }}
                        onClick={() => LoginUser()}
                      >
                        Login
                      </Button>
                    )}
                  </Box>
                  <Box align="center">
                    <Typography
                      sx={{
                        color: Colors.palette.secondary.main,
                        cursor: "pointer",
                      }}
                      onClick={() => navigate(`/registerpage`)}
                    >
                      Don't have an account?&nbsp;&nbsp; Register here
                    </Typography>
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
            sx={{ color: "#fff",mt:2 }}
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

export default Login;
