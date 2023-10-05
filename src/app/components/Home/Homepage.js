import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import vector from "../../assests/images/Vector.png";
import vector2 from "../../assests/images/Vector2.png";
import HomeCards from "../Home/HomeCards";
import Nav from "../../partials/Nav";
import car1 from "../../assests/images/AboutCar.png";
import Dryclean from "./Dryclean";
import BackgroundImg from "../Background";
import Question from "../Question";
import Footer from "../../partials/Footer";
import Colors from "../../utils/colors";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Nav />
      <BackgroundImg />
      <Box>
        <Grid container spacing={4} sx={{ marginTop: "3%" }}>
          {" "}
          <Grid item xs={12} sm={6} md={8}>
            <Typography
              variant="h4"
              sx={{ marginLeft: "5%", color: Colors.palette.secondary.main }}
              gutterBottom
            >
              <b> About Us</b>
            </Typography>

            <Typography variant="body1" sx={{ marginLeft: "5%" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} sx={{ position: "auto" }}>
            <img
              src={car1}
              alt=""
              style={{
                maxWidth: "100%",
                height: "auto",
                marginTop: { xs: "0%", sm: "10%" },
              }}
            />
          </Grid>
        </Grid>
      </Box>
      {/* {..........................................................} */}
      <Container sx={{ mt: 15 }}>
        <Grid container spacing={2} justifyContent={"center"}>
          {/* Left Content */}
          <Grid item xs={12} sm={12} md={6}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: 25, sm: 30, md: 35, lg: 37, xl: 37 },
                  color: Colors.palette.secondary.main,
                }}
              >
                <b>Professional Washing And Cleaning.</b>
              </Typography>
              <Typography
                sx={{ fontSize: { xs: 12, sm: 12, md: 13, lg: 15, xl: 15 } }}
                mt={3}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. <b>Call for book</b>
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  background: Colors.palette.secondary.main,
                  color: Colors.palette.primary.main,
                  height: 45,
                  width: {
                    xl: "170px",
                    lg: "170px",
                    md: "170px",
                    sm: "170px",
                    xs: "170px",
                  },
                  mt: 5,
                }}
              >
                +91-0000-000000
              </Button>
              <Button
                variant="contained"
                size="large"
                sx={{
                  border: `1.5px solid ${Colors.palette.secondary.main}`,
                  background: Colors.palette.primary.main,
                  color: Colors.palette.secondary.black,
                  height: 45,
                  width: {
                    xl: "170px",
                    lg: "170px",
                    md: "170px",
                    sm: "170px",
                    xs: "170px",
                  },
                  mt: 5,
                  ml: { xs: 0, sm: 2, md: 2, lg: 2, xl: 2 },
                  "&:hover": {
                    backgroundColor: Colors.palette.primary.main,
                  },
                }}
              >
                <NavLink
                  to="/services"
                  style={{
                    textDecoration: "none",
                    color: Colors.palette.secondary.main,
                  }}
                >
                  Our Services
                </NavLink>
              </Button>
            </Box>
          </Grid>
          {/* Right Side Image */}
          <Grid item xs={12} sm={12} md={6}>
            <Box
              component="img"
              src={vector}
              alt="Vector"
              width="100%"
              height="auto"
            />
          </Grid>
        </Grid>
      </Container>

      <Dryclean />
      <HomeCards />

      {/* ..................................................................... */}

      <Container maxWidth="lg" sx={{ mt: 15 }}>
        <Grid container item spacing={10} justifyContent={"center"}>
          <Box component={"img"} src={vector2} height={250} width={250} />

          <Grid item>
            <Box width={{ xs: 250, sm: 500, md: 700, lg: 800, xl: 800 }}>
              <Typography
                fontSize={{ xs: 25, sm: 30, md: 32, lg: 35, xl: 35 }}
                color={Colors.palette.secondary.main}
              >
                <b>Who We Are?</b>
              </Typography>
              <Typography
                fontSize={{ xs: 12, sm: 12, md: 13, lg: 15, xl: 15 }}
                mt={3}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </Typography>
              <Typography
                fontSize={{ xs: 12, sm: 12, md: 13, lg: 15, xl: 15 }}
                mt={2}
              >
                <b>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </b>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Question />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
