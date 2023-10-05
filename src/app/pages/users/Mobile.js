import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import car1 from "../../assests/images/car1guest.png";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Colors from "../../utils/colors";
import { NavLink } from "react-router-dom";

const submitButtonStyle = {
  marginTop: "20px",
  marginBottom: "20px",
  padding: "15px",
  borderRadius: 5,
  display: "flex",
  textAlign: "center",
  backgroundColor: Colors.palette.secondary.main,
};

const Mobile = () => {
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [errors, setErrors] = React.useState({ mobileNumber: "" });

  const handleMobileNumberChange = (e) => {
    const { value } = e.target;
    setMobileNumber(value);
  };

  const handleFormSubmit = () => {
    const newErrors = {};

    if (!mobileNumber) {
      newErrors.mobileNumber = "Mobile Number is required";
    } else if (!/^\d{10}$/.test(mobileNumber)) {
      newErrors.mobileNumber = "Invalid Mobile Number";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Valid form
    }
  };

  return (
    <Box>
      <Box
        sx={{
          background:
            "radial-gradient(circle at 100% 100%, #023159, #1F476A, #F5F5F5)",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container justifyContent="center" sx={{}}>
          <Grid item xs={10} sm={8} md={6} lg={4}>
            <Box
              sx={{
                // minHeight: '50vh',
                // backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${car1})`,
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))`,
                borderRadius: "20px",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                // alignItems: 'center',
                padding: "16px",
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

              <Typography
                variant="h6"
                sx={{
                  marginTop: "10%",
                  textAlign: "center",
                  color: Colors.palette.secondary.main,
                }}
              >
                Enter your mobile number here
              </Typography>
              <br />
              <Box
                component="form"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  "& > :not(style)": {
                    m: 1,
                    width: "100%",
                    maxWidth: "300px",
                  },
                  marginBottom: "5%",
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="mobileNumber"
                  placeholder="Mobile Number"
                  variant="outlined"
                  fullWidth
                  value={mobileNumber}
                  onChange={handleMobileNumberChange}
                  error={!!errors.mobileNumber}
                  helperText={errors.mobileNumber}
                />
              </Box>
              <Box
                onClick={handleFormSubmit}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ ...submitButtonStyle }}
                >
                  <NavLink
                    to="/otp"
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
                Already have an account?&nbsp;&nbsp;
                <NavLink
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: Colors.palette.secondary.main,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  Login
                </NavLink>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Mobile;
