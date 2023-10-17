import React, { useState } from "react";
import {
  Grid,
  Paper,
  Button,
  Typography,
  Box,
  Container,
  TextField,
} from "@mui/material";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Colors from "../../../utils/colors";
// import Sedan from "../../assests/images/car1guest.png";
import { NavLink } from "react-router-dom";

const Otp = () => {
  const [number, setNumber] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });

  const paperStyle = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    borderRadius: 5,
    opacity: ".8",
  };

  const formStyle = {
    width: "100%",
    marginTop: "10%",
    position: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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

  // const onChange = (e, index) => {
  //   const value = e.target.value.replace(/[^0-9]/g, "");
  // const onChange = (e, index) => {
  //   //   const value = e.target.value.replace(/[^0-9]/g, "");
  const onChange = (e, index) => {
    var onlyNums = e.target.value.replace(/[^0-9]+$/, "");
    if (onlyNums) {
      onlyNums = parseInt(onlyNums[0]);
    }
    setNumber({
      ...number,
      [index]: onlyNums,
    });

    if (!onlyNums) {
      setValidationErrors({
        ...validationErrors,
        [index]: "Field is required",
      });
    } else {
      setValidationErrors({
        ...validationErrors,
        [index]: "",
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isFormValid = Object.values(validationErrors).every(
      (error) => !error
    );

    if (isFormValid) {
      console.log("Form submitted successfully");

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  const isSubmitDisabled = Object.values(validationErrors).some(
    (error) => !!error
  );

  return (
    <>
      <Box
        sx={{
          background:
            "radial-gradient(circle at 100% 100%, #023159, #1F476A, #F5F5F5)",
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
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container maxWidth="sm">
            <Grid
              container
              style={{
                // backgroundImage: `url(${Sedan})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "100%",
              }}
            >
              <Paper elevation={3} sx={{ ...paperStyle, width: "100%" }}>
                <Box style={{ display: "flex" }}>
                  <Button
                    sx={{
                      color: Colors.palette.secondary.main,
                      justifyContent: "flex-start",
                    }}
                  >
                    <NavLink
                      to="/mobile"
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

                <form style={formStyle} noValidate onSubmit={handleFormSubmit}>
                  <Typography
                    variant="body1"
                    sx={{ color: Colors.palette.secondary.main }}
                  >
                    <b>You have received an OTP on your number xxxxxx6149</b>
                  </Typography>
                  <br />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {Array.from({ length: 6 }).map((_, index) => (
                      <TextField
                        key={index}
                        name="number"
                        type="text"
                        placeholder="-"
                        variant="outlined"
                        value={number[index] ?? ""}
                        onChange={(e) => onChange(e, index)}
                        sx={{
                          display: "solid",
                          width: {
                            md: "40px",
                            sm: "35px",
                          },
                          mt: 1,
                          ml: index === 3 ? 3 : 1,
                        }}
                        InputProps={{
                          sx: {
                            height: "40px",
                            color: Colors.palette.secondary.main,
                            border: `1px solid ${Colors.palette.secondary.main}`,
                          },
                        }}
                      />
                    ))}
                  </Box>

                  {Object.values(validationErrors).map((error, index) => (
                    <Typography
                      key={index}
                      sx={{
                        color: Colors.palette.error.main,
                        mt: "0.5rem",
                        textAlign: "center",
                      }}
                    >
                      {error}
                    </Typography>
                  ))}

                  <Box align="center">
                    <Typography
                      sx={{
                        color: Colors.palette.secondary.main,
                        display: "flex",
                        mt: "1rem",
                      }}
                    >
                      Didn’t receive the OTP?
                      <span
                        style={{
                          color: Colors.palette.secondary.blue,
                          marginRight: "1.5rem",
                        }}
                      >
                        &nbsp;&nbsp;Resend
                      </span>
                      <TimerOutlinedIcon /> 00:45
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ ...submitButtonStyle }}
                      disabled={isSubmitDisabled}
                    >
                      <NavLink
                        to="/home"
                        style={{
                          textDecoration: "none",
                          color: Colors.palette.primary.main,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        Submit <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
                      </NavLink>
                    </Button>
                  </Box>
                </form>
              </Paper>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Otp;
