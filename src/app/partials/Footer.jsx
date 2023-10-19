import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
//import Car from "../images/Car.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Colors from "../utils/colors";
import { NavLink } from "react-router-dom";
import Wave from "react-wavify";
import SendIcon from "@mui/icons-material/Send";
import Logo from "../assests/images/logo.jpeg"

const Footer = () => {
  return (
    <>
      <Wave
        fill={Colors.palette.primary.darkBlue}
        paused={false}
        style={{ display: "flex", marginTop: "5%" ,}}
        options={{
          height: 5,
          amplitude: 20,
          speed: .3,
          points: 3,
        }}
      />
      <Box
        sx={{
          backgroundColor: Colors.palette.primary.darkBlue,
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl">
          <Grid container sx={{ marginInline: "2%" }}>
            <Grid
              item
              xs={12}
              sm={3}
              md={3}
              marginTop="2%"
              sx={{ color: Colors.palette.primary.main }}
            >
              {/* <Typography variant="h4">
                <b> Logo </b>
              </Typography> */}
                <img
                src={Logo} // Use your logo image
                alt=""
                style={{
                  width: "200px", 
                  padding:'2px',
                  
                }}
              />
              <Typography sx={{ marginTop: "11%" }}>
                About us: Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit,sed do <br />
                eiusmod tempor incididunt ut labore et <br />
                dolore magna aliqua. Ut enim ad minim <br />
                veniam,quis nostrud exercitation.
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  marginTop: "12%",
                  marginBottom: "17%",
                  color: Colors.palette.primary.main,
                }}
              >
                <CopyrightIcon /> 2021 Car Wash.All Rights Reserved
              </Typography>
            </Grid>

            <Grid item xs={15} sm={2} marginTop="4%">
              <Typography
                variant="body1"
                gutterBottom
                sx={{ color: Colors.palette.primary.main }}
              >
                <b> PAGES</b>
              </Typography>
              <NavLink
                to="/services"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    marginTop: "11%",
                    color: Colors.palette.primary.main,
                    "&:hover": { fontSize: 15, opacity: 0.75 },
                  }}
                >
                  Services
                </Typography>
              </NavLink>
              <NavLink
                to="/aboutus"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    color: Colors.palette.primary.main,
                    "&:hover": { fontSize: 15, opacity: 0.75 },
                  }}
                >
                  About Us
                </Typography>
              </NavLink>
              <NavLink
                to="/contactus"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    color: Colors.palette.primary.main,
                    "&:hover": { fontSize: 15, opacity: 0.75 },
                  }}
                >
                  Contact Us
                </Typography>
              </NavLink>
            </Grid>

            <Grid item xs={15} sm={2} marginTop="4%">
              <Typography
                variant="body1"
                gutterBottom
                sx={{ color: Colors.palette.primary.main }}
              >
                <b> CARS</b>
              </Typography>
              <NavLink
                to="/"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    marginTop: "11%",
                    color: Colors.palette.primary.main,
                    "&:hover": { fontSize: 15, opacity: 0.75 },
                  }}
                >
                  HatchBack
                </Typography>
              </NavLink>
              <NavLink
                to="/"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    color: Colors.palette.primary.main,
                    "&:hover": { fontSize: 15, opacity: 0.75 },
                  }}
                >
                  Sedan
                </Typography>
              </NavLink>
              <NavLink
                to="/"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    color: Colors.palette.primary.main,
                    "&:hover": { fontSize: 15, opacity: 0.75 },
                  }}
                >
                  SUV
                </Typography>
              </NavLink>
            </Grid>

            <Grid item xs={15} sm={2} marginTop="4%">
              <Typography
                variant="body1"
                gutterBottom
                sx={{ color: Colors.palette.primary.main }}
              >
                <b>SERVICES </b>
              </Typography>
              <NavLink
                to="/services"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    marginTop: "11%",
                    color: Colors.palette.primary.main,
                    "&:hover": { fontSize: 15, opacity: 0.75 },
                  }}
                >
                  Routine Clean
                </Typography>
              </NavLink>
              <NavLink
                to="/services"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    color: Colors.palette.primary.main,
                    "&:hover": { fontSize: 15, opacity: 0.75 },
                  }}
                >
                  Dry Clean
                </Typography>
              </NavLink>
              <NavLink
                to="/services"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    color: Colors.palette.primary.main,
                    "&:hover": { fontSize: 15, opacity: 0.75 },
                  }}
                >
                  Deep Clean
                </Typography>
              </NavLink>
            </Grid>

            <Grid item xs={15} sm={3} marginTop="4%">
              {/* <NavLink
                to="/"
                style={{ textDecoration: "none", cursor: "pointer" }}
              > */}
              <Typography
                variant="body2"
                gutterBottom
                sx={{
                  textDecoration: "none",
                  color: Colors.palette.secondary.grey,
                }}
              >
                (303) 985-0105,(303) 355-0105
              </Typography>
              {/* </NavLink> */}
              <TextField
                placeholder="Type Your Email"
                type="text"
                sx={{ mt: "5%" }}
                variant="outlined"
                InputProps={{
                  sx: {
                    height: 38,
                    backgroundColor: "white",
                    width: { xs: 200, sm: 200, md: 250 },
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        variant="contained"
                        sx={{
                          height: 37,
                          color: "white",
                          "&:hover": { color: "black" },
                          position: "relative",
                          left: 14,
                        }}
                      >
                        <SendIcon sx={{ fontSize: 20 }} />
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />

              {/* <NavLink
                to="/"
                style={{ textDecoration: "none", cursor: "pointer" }}
              > */}
              <Typography
                variant="body2"
                gutterBottom
                sx={{
                  marginTop: "5%",
                  color: Colors.palette.primary.main,
                  // "&:hover": { fontSize: 15, opacity: 0.75 },
                }}
              >
                mifs@info.com
              </Typography>
              {/* </NavLink> */}
              {/* <NavLink
                to="/"
                style={{ textDecoration: "none", cursor: "pointer" }}
              > */}
              <Typography
                variant="body2"
                gutterBottom
                sx={{
                  marginTop: "10%",
                  color: Colors.palette.secondary.grey,
                  // "&:hover": { fontSize: 15, opacity: 0.75 },
                }}
              >
                2972 Westheimer Rd.Santa Ana,
                <br />
                lllinois 85486
              </Typography>
              {/* </NavLink> */}

              <Typography
                variant="body2"
                gutterBottom
                sx={{ marginTop: "10%", color: Colors.palette.primary.main }}
              >
                <NavLink
                  to="/"
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  <InstagramIcon
                    sx={{
                      color: Colors.palette.primary.main,
                      // "&:hover": { fontSize: 30, opacity: 0.75 },
                    }}
                  />
                </NavLink>
                <NavLink
                  to="/"
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  <FacebookIcon
                    sx={{
                      marginLeft: "15%",
                      color: Colors.palette.primary.main,
                      // "&:hover": { fontSize: 30, opacity: 0.75 },
                    }}
                  />{" "}
                </NavLink>
                <NavLink
                  to="/"
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  <TwitterIcon
                    sx={{
                      marginLeft: "15%",
                      color: Colors.palette.primary.main,
                      // "&:hover": { fontSize: 30, opacity: 0.75 },
                    }}
                  />
                </NavLink>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
