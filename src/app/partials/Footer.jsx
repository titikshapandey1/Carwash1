import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Box } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Colors from "../utils/colors";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: Colors.palette.primary.darkBlue,
        width: "100%",
        marginTop: "5%",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{ marginInline: "3%" }}>
          <Grid
            item
            xs={15}
            sm={3}
            md={3}
            marginTop="2%"
            sx={{ color: Colors.palette.primary.main }}
          >
            <Typography variant="h4">
              <b> Logo </b>
            </Typography>
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
            <Typography
              variant="body2"
              gutterBottom
              sx={{ marginTop: "11%", color: Colors.palette.primary.main }}
            >
              Services
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ color: Colors.palette.primary.main }}
            >
              About Us
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ color: Colors.palette.primary.main }}
            >
              Contact Us
            </Typography>
          </Grid>

          <Grid item xs={15} sm={2} marginTop="4%">
            <Typography
              variant="body1"
              gutterBottom
              sx={{ color: Colors.palette.primary.main }}
            >
              <b> CARS</b>
            </Typography>
            <Typography
              variant="body2"
              color="white"
              gutterBottom
              sx={{ marginTop: "11%" }}
            >
              HatchBack
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ color: Colors.palette.primary.main }}
            >
              Sedan
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ color: Colors.palette.primary.main }}
            >
              SUV
            </Typography>
          </Grid>

          <Grid item xs={15} sm={2} marginTop="4%">
            <Typography
              variant="body1"
              gutterBottom
              sx={{ color: Colors.palette.primary.main }}
            >
              <b>SERVICES </b>
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ marginTop: "11%", color: Colors.palette.primary.main }}
            >
              Routine Clean
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ color: Colors.palette.primary.main }}
            >
              Dry Clean
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ color: Colors.palette.primary.main }}
            >
              Deep Clean
            </Typography>
          </Grid>

          <Grid item xs={15} sm={3} marginTop="4%">
            <Typography
              variant="body2"
              gutterBottom
              sx={{ color: Colors.palette.secondary.grey }}
            >
              (303) 985-0105,(303) 355-0105
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ marginTop: "10%", color: Colors.palette.primary.main }}
            >
              mifs@info.com
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ marginTop: "10%", color: Colors.palette.secondary.grey }}
            >
              2972 Westheimer Rd.Santa Ana,
              <br />
              lllinois 85486
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ marginTop: "10%", color: Colors.palette.primary.main }}
            >
              <InstagramIcon /> <FacebookIcon sx={{ marginLeft: "15%" }} />{" "}
              <TwitterIcon sx={{ marginLeft: "15%" }} />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
