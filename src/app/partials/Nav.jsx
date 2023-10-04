// import React, { useState } from "react";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import Colors from '../utils/Colors';
import Colors  from "../utils/colors";
import DrawerComp from './Drawer';


const Nav = () => {
  // const [value, setValue] = useState();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ background: Colors.palette.primary.darkBlue }}
        >
          <Toolbar>
            <DrawerComp />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, marginLeft: "2%", cursor: "pointer" }}
            >
              Logo
            </Typography>
            <Box
              sx={{
                justifyContent: "center",
                gap: { md: "50px", xl: "100px", sm: "25px" },
                display: { xs: "none", sm: "flex" },
              }}
            >
              <Button color="inherit">Services</Button>
              <Button color="inherit">About Us</Button>
              <Button color="inherit">Contact Us</Button>
              <Button
                sx={{
                  backgroundColor: Colors.palette.primary.red,
                  color: Colors.palette.primary.main,
                  cursor: "pointer", 
                  "&:hover": {
                    backgroundColor: Colors.palette.primary.main, 
                    color: Colors.palette.primary.red, 
                  },
                }}
              >
                Login
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Nav;
