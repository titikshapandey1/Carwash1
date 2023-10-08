import React from "react";
import AdminDash from "../../components/AdDash";
import Table from "../../components/Table";
import Colors from "../../utils/colors";

import {
  Box,
  Typography,
} from "@mui/material";

const AdPaySucc = () => { 
  return (
    <>
      <Box
        display="block"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        className="wrapper"
      >
        <AdminDash />
        <Typography
          variant="h4"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            marginTop: { xs: "25%", sm: "20%", md: "10%", lg: "10%" },
            marginLeft: { xs: "3%", sm: "35%", md: "30%", lg: "15%" },
            color:Colors.palette.secondary.main,
            fontWeight:"600"
          }}
        >
          Successful Payment
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            marginLeft: { xs: "1%", sm: "35%", md: "30%", lg: "15%" },
            marginTop: { xs: "15%", sm: "8%", md: "2%", lg: "2%" },
          }}
        >
          <Table />
        </Box>
      </Box>
    </>
  );
};

export default AdPaySucc;
