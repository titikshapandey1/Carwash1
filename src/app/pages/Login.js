import React, { useState } from "react";
import {
  Grid,
  Paper,
  Button,
  Typography,
  Box,
  Container,
  TextField,
  Link,
  Navlink,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import car1 from "../assests/images/car1guest.png";
import Colors from "../utils/colors";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const paperStyle = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    borderRadius: 25,
    opacity: ".8",
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

  const img = {
    backgroundImage: `url(${car1})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    borderRadius: 50,
    height: "100%",
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.username) {
      errors.username = "Username/Email is required";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length === 0) {
      // Add auth logic
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#023159",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            height: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container maxWidth="xs">
            <Grid container style={img}>
              <Paper elevation={3} style={paperStyle} sx={{ width: "100%" }}>
                <Box style={{ display: "flex" }}>
                  <Button
                    sx={{
                      color: Colors.palette.secondary.main,
                      justifyContent: "flex-start",
                    }}
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
                    Log in
                  </Typography>
                </Box>

                <form style={formStyle} noValidate onSubmit={handleFormSubmit}>
                  <TextField
                    variant="outlined"
                    placeholder="Username/Email"
                    name="username"
                    fullWidth
                    size="small"
                    value={formData.username}
                    onChange={handleFormChange}
                    error={!!formErrors.username}
                    helperText={formErrors.username}
                    InputProps={{ sx: { mb: 2 } }}
                  />
                  <TextField
                    variant="outlined"
                    placeholder="Password"
                    fullWidth
                    size="small"
                    value={formData.password}
                    onChange={handleFormChange}
                    error={!!formErrors.password}
                    helperText={formErrors.password}
                    // InputProps={{ sx: { borderColor:"red" } }}
                  />
                  <Typography
                    sx={{
                      color: Colors.palette.secondary.main,
                      display: "flex",
                      mt: "1rem",
                    }}
                  >
                    <LockIcon />

                    <Link
                      sx={{
                        textDecoration: "none",
                        ml: 1,
                        color: Colors.palette.secondary.main,
                      }}
                    >
                      Forgot Password ?
                    </Link>
                  </Typography>
                  <Box align="center">
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      style={{ ...submitButtonStyle }}
                    >
                      Login
                    </Button>
                  </Box>
                  <Box align="center">
                    <Typography sx={{ color: Colors.palette.secondary.main }}>
                      Don't have an account?{" "}
                      <Link
                        sx={{
                          textDecoration: "none",
                          ml: 1,
                          color: Colors.palette.secondary.main,
                        }}
                      >
                        Register here
                      </Link>
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
