import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Colors from "../utils/colors";
import DrawerComp from "./Drawer";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
import { NavLink ,Link } from "react-router-dom";
import Logo from "../assests/images/Logo.png";
import { useAuth } from "../utils/AuthContext";
import HomeIcon from "@mui/icons-material/Home";
import ServicesIcon from "@mui/icons-material/Work";
import AboutUsIcon from "@mui/icons-material/Info";
import ContactUsIcon from "@mui/icons-material/Email";
import LoginIcon from "@mui/icons-material/Login";
import RegisterIcon from "@mui/icons-material/PersonAdd";
import Profile from "@mui/icons-material/AccountCircle";
import Logout from "@mui/icons-material/Logout";

const Nav = () => {
  const { token, logout } = useAuth();
  const [drawerContent, setDrawerContent] = useState([]);
  // const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);

  const buttonStyle = {
    backgroundColor: Colors.palette.primary.darkBlue,
    color: Colors.palette.primary.main,
    "&:hover": {
      backgroundColor: Colors.palette.primary.lightBlue,
    },
    "&.active": {
      backgroundColor: Colors.palette.primary.main,
      color: Colors.palette.secondary.black,
    },
  };

  useEffect(() => {
    if (token) {
      setDrawerContent([
        { title: "Home", path: "/", icon: <HomeIcon sx={{ mr: 5 }} /> },
        {
          title: "Services",
          path: "/services",
          icon: <ServicesIcon sx={{ mr: 5 }} />,
        },
        {
          title: "About Us",
          path: "/aboutus",
          icon: <AboutUsIcon sx={{ mr: 5 }} />,
        },
        {
          title: "Contact Us",
          path: "/contactus",
          icon: <ContactUsIcon sx={{ mr: 5 }} />,
        },
        {
          title: "Profile",
          path: "/profile",
          icon: <Profile sx={{ mr: 5 }} />,
        },
        { title: "Logout", onClick: logout, icon: <Logout sx={{ mr: 5 }} /> },
      ]);
    } else {
      setDrawerContent([
        { title: "Home", path: "/", icon: <HomeIcon sx={{ mr: 5 }} /> },
        {
          title: "Services",
          path: "/services",
          icon: <ServicesIcon sx={{ mr: 5 }} />,
        },
        {
          title: "About Us",
          path: "/aboutus",
          icon: <AboutUsIcon sx={{ mr: 5 }} />,
        },
        {
          title: "Contact Us",
          path: "/contactus",
          icon: <ContactUsIcon sx={{ mr: 5 }} />,
        },

        { title: "Login", path: "/login", icon: <LoginIcon sx={{ mr: 5 }} /> },
        {
          title: "Register",
          path: "/registerpage",
          icon: <RegisterIcon sx={{ mr: 5 }} />,
        },
      ]);
    }
  }, [token, logout]);

  // const handleCloseLogoutDialog = () => {
  //   setLogoutDialogOpen(true);
  // };

  // const handleConfirmLogout = () => {
  //   logout();
  //   setLogoutDialogOpen(false);
  // };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ background: Colors.palette.primary.darkBlue }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <NavLink
                to="/"
                style={{
                  textDecoration: "none",
                  color: Colors.palette.primary.main,
                }}
              >
                <img
                  src={Logo}
                  alt=""
                  style={{
                    marginTop: "15px",
                    width: "150px",
                    maxWidth: "100%",
                    height: "50px",
                  }}
                />
              </NavLink>
            </Typography>

            <Box
              sx={{
                justifyContent: "center",
                gap: { md: "30px" },
                display: { xs: "none", sm: "none", md: "flex" },
              }}
            >
              <Button
                component={NavLink}
                to="/"
                exact
                activeClassName="active"
                sx={buttonStyle}
              >
                Home
              </Button>

              <Button
                component={NavLink}
                to="/guest2"
                activeClassName="active"
                sx={buttonStyle}
              >
                Services
              </Button>

              <Button
                component={NavLink}
                to="/aboutus"
                activeClassName="active"
                sx={buttonStyle}
              >
                About Us
              </Button>
              <Button
                component={NavLink}
                to="/contactus"
                activeClassName="active"
                sx={buttonStyle}
              >
                Contact Us
              </Button>

              {token ? (
                <>
                  <Button
                    component={NavLink}
                    to="/profile"
                    activeClassName="active"
                    sx={buttonStyle}
                  >
                    Profile
                  </Button>
                  <Button
                    component={NavLink}
                    to="/"
                    onClick={logout}
                    sx={{
                      backgroundColor: Colors.palette.primary.red,
                      color: Colors.palette.primary.main,
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: Colors.palette.primary.lightBlue,
                      },
                    }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    component={NavLink}
                    to="/login"
                    sx={{
                      backgroundColor: Colors.palette.primary.red,
                      color: Colors.palette.primary.main,
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: Colors.palette.primary.lightBlue,
                      },
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    component={NavLink}
                    to="/registerpage"
                    sx={{
                      backgroundColor: Colors.palette.primary.lightBlue,
                      color: Colors.palette.primary.main,
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: Colors.palette.primary.darkBlue,
                      },
                    }}
                  >
                    Register
                  </Button>
                </>
              )}
            </Box>
            <DrawerComp drawerContent={drawerContent} />
            
            {/* Logout Confirmation Dialog
            <Dialog
              open={logoutDialogOpen}
              onClose={handleCloseLogoutDialog}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Logout Confirmation"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are you sure you want to logout?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseLogoutDialog} color="primary">
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    handleConfirmLogout();
                    // Programmatically navigate to the home page or any other page after logout
                  }}
                  color="primary"
                  autoFocus
                  component={Link}
                  to="/"
                >
                  Logout
                </Button>
              </DialogActions>
            </Dialog> */}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Nav;