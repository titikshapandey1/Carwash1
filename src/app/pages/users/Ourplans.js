import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Colors from "../../utils/colors";
const Ourplans = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",

          marginBottom: "2rem",
        }}
      >
        <Grid ml={4}>
          <Typography variant="h5" mt={10} mb={2} sx={{ color: Colors.palette.secondary.main }}>
            <b> Our Plan</b>
          </Typography>
          <Typography variant="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </Grid>
      </Box>
    </>
  );
};

export default Ourplans;
