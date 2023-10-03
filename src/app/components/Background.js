import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import car1 from "../assests/images/car1guest.png";
const Guest1 = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          color: "white",
          backgroundImage: `url(${car1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "500px",
        }}
      >
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={8}
            md={8}
            padding={"2%"}
            sx={{ marginInline: { xs: "0%", sm: "0%" }, mt: "8%" }}
          >
            <Container>
              <Typography variant="h3"  sx={{ fontWeight: 600 }}>
                Lorem ipsum <br /> dolor sit amet, <br /> consectetur adipiscing
                elit
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Guest1;
