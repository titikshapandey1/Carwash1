import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Colors from "../utils/colors";
import DrawerComp from "./Drawer";
import { NavLink, Link } from "react-router-dom";

// const linkStyle = {
//   color:Colors.palette.primary.main ,
//   textDecoration: "none",

// };

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
              sx={{
                flexGrow: 1,
                marginLeft: "2%",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              <NavLink
                to="/"
                style={{
                  textDecoration: "none",
                  color: Colors.palette.primary.main,
                }}
              >
                Logo
              </NavLink>
            </Typography>
            <Box
              sx={{
                justifyContent: "center",
                gap: { md: "50px", xl: "100px", sm: "25px" },
                display: { xs: "none", sm: "flex" },
              }}
            >
              <Button
                sx={{
                  "&:hover": {
                    backgroundColor: Colors.palette.primary.lightBlue,
                    color: "red",
                  },
                }}
              >
                <NavLink
                  to="/services"
                  style={{
                    textDecoration: "none",
                    color: Colors.palette.primary.main,
                  }}
                >
                  Services
                </NavLink>
              </Button>

              <Button
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: Colors.palette.primary.lightBlue,
                  },
                }}
              >
                <NavLink
                  to="/homepage"
                  style={{
                    textDecoration: "none",
                    color: Colors.palette.primary.main,
                  }}
                >
                  About Us
                </NavLink>
              </Button>
              <Button
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: Colors.palette.primary.lightBlue,
                  },
                }}
              >
                <NavLink
                  to="/contactus"
                  style={{
                    textDecoration: "none",
                    color: Colors.palette.primary.main,
                  }}
                >
                  Contact Us
                </NavLink>
              </Button>
              <Button
                sx={{
                  backgroundColor: Colors.palette.primary.red,
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: Colors.palette.primary.lightBlue,
                    // color: Colors.palette.primary.red,
                  },
                }}
              >
                <NavLink
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: Colors.palette.primary.main,
                  }}
                >
                  Login
                </NavLink>
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Nav;
