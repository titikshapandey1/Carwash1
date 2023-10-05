import React from "react";
import { Box, Grid, Typography } from "@mui/material";
// import Colors from '../../../utils/Colors';
import car1 from '../assests/images/AboutCar.png'
const AboutGuest = () => {
  return (
    <Box>
      <Grid container spacing={4} sx={{ marginTop: "3%" }}>
        <Grid item xs={12} sm={6} md={8}>
          <Typography variant="h5" sx={{ marginLeft: "5%" }} gutterBottom>
            <b> About Us</b>
          </Typography>

          <Typography variant="body1" sx={{ marginLeft: "5%" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum....(see more)
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4} sx={{ position: "relative" }}>
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
  );
};

export default AboutGuest;
