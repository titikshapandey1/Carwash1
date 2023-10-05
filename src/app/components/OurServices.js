import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Container, Card, Box } from "@mui/material";
import red from "../assests/images/red.png";
import yellow from "../assests/images/yellow.png";
import blue from "../assests/images/blue.png";
import Colors from "../utils/colors";
import Divider from "@mui/material/Divider";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const OurServices = () => {
  return (
    <Container sx={{ marginTop: "3%" }}>
      <Box sx={{ display: "flex", alignItems: "center",marginBottom:"3%" }}>
        <Typography
          variant="h5"
          sx={{ color: Colors.palette.secondary.main, fontWeight: "600" }}
        >
          Our Services&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;•
        </Typography>
        <Divider
          sx={{
            backgroundColor: Colors.palette.secondary.main,
            height: "2px",
            flex: 1,
            marginLeft: "2%",
          }}
        />
        <Typography
          sx={{
            color: Colors.palette.secondary.main,
            display: "flex",
            alignItems: "center",
            marginLeft: "1.5%",
          }}
        >
          see all <ArrowForwardIosIcon sx={{ fontSize: "12px" }} />
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{ background: Colors.palette.primary.main, boxShadow: "none" }}
          >
            <Typography
              variant="h5"
              sx={{
                backgroundColor: Colors.palette.secondary.main,
                color: Colors.palette.primary.main,
                textAlign: "center",
              }}
            >
              HatchBack
            </Typography>
            <img
              src={red}
              alt="Hatchback"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ boxShadow: "none" }}>
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                color: Colors.palette.secondary.main,
                fontWeight: "600",
              }}
            >
              Sedan
            </Typography>
            <img
              src={yellow}
              alt="Sedan"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ boxShadow: "none" }}>
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                color: Colors.palette.secondary.main,
                fontWeight: "600",
              }}
            >
              SUV
            </Typography>
            <img
              src={blue}
              alt="SUV"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurServices;
