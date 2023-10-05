import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Container, Card } from "@mui/material";
import red from "../assests/images/red.png";
import yellow from "../assests/images/yellow.png";
import blue from "../assests/images/blue.png";
import Colors from "../utils/colors";

const OurServices = () => {
  return (
    <Container sx={{ marginTop: "3%" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Card>
            <Typography
              variant="h5"
              sx={{
                backgroundColor: Colors.palette.background.default,
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
          <Card>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
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
          <Card>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
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
