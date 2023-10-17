import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Axios from "../../../utils/Axios";
import Mobile from "./Mobile";
import Colors from "../../../utils/colors";

function Login() {
  const LoginUser = async () => {
    const data = {
      userName: formik.values.userName,
      passWord: formik.values.passWord,
    };

    try {
      const response = await Axios.post("/src/routes/login", data);
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
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
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,8}$/,
        "Password Should have one Capital Letter, Number, Specical Character and be 6 to 8 characters in length"
      ),
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
      passWord: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // console.log("On Submit: ",values);
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
                    onClick={Mobile}
                  >
                    <NavLink
                      to="/"
                      style={{
                        textDecoration: "none",
                        color: Colors.palette.secondary.main,
                      }}
                    >
                      <ArrowBackIosIcon />
                    </NavLink>
                  </Button>
                  <Typography
                    variant="h4"
                    sx={{
                      color: Colors.palette.secondary.main,
                      flex: 0.8,
                      textAlign: "center",
                    }}
                  >
                    Log in
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
                    InputProps={{ sx: { mb: 3 } }}
                    value={formik.values.userName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.userName && Boolean(formik.errors.userName)
                    }
                    helperText={
                      formik.touched.userName && formik.errors.userName
                    }
                  />
                  <TextField
                    variant="outlined"
                    placeholder="Password"
                    id="passWord"
                    name="passWord"
                    fullWidth
                    size="small"
                    type="passWord"
                    value={formik.values.passWord}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.passWord && Boolean(formik.errors.passWord)
                    }
                    helperText={
                      formik.touched.passWord && formik.errors.passWord
                    }
                  />
                  <Typography
                    sx={{
                      color: Colors.palette.secondary.main,
                      display: "flex",
                      mt: "1.2rem",
                    }}
                  >
                    <LockIcon sx={{ mr: "1rem" }} />
                    {/* <Link
                      sx={{
                        textDecoration: "none",
                        ml: 1,
                        color: Colors.palette.secondary.main,
                      }}
                    >
                      <NavLink
                        to="/mobile"
                        style={{
                          textDecoration: "none",
                          color: Colors.palette.secondary.main,
                        }}
                      > */}
                    Forgot password?
                    {/* </NavLink>
                    </Link> */}
                  </Typography>
                  <Box align="center">
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      style={{ ...submitButtonStyle }}
                      onClick={LoginUser}
                    >
                      Login
                    </Button>
                  </Box>
                  <Box align="center">
                    <Typography sx={{ color: Colors.palette.secondary.main }}>
                      Don't have an account?&nbsp;&nbsp;
                      <NavLink
                        to="/registerpage"
                        style={{
                          textDecoration: "none",
                          color: Colors.palette.secondary.main,
                        }}
                      >
                        Register here
                      </NavLink>
                    </Typography>
                  </Box>
                </form>
              </Paper>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Login;
