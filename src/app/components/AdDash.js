import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import { Typography, Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Colors from "../utils/colors";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

function AdDash(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [openDashboard, setopenDashboard] = React.useState(false);
  const [openPayment, setopenPayment] = React.useState(false);
  const [openUsers, setopenUsers] = React.useState(false);
  const [openEditSupervisor, setopenEditSupervisor] = React.useState(false);

  const handleDashboardClick = () => {
    setopenDashboard(!openDashboard);
  };

  const handlePaymentClick = () => {
    setopenPayment(!openPayment);
  };

  const handleUserClick = () => {
    setopenUsers(!openUsers);
  };

  const [selectedPaymentOption, setSelectedPaymentOption] =
    React.useState(null);

  const handlePaymentOptionClick = (option) => {
    setSelectedPaymentOption(option);
  };

  const [selectedUserOption, setSelectedUserOption] = React.useState(null);

  const handleUserOptionClick = (option) => {
    setSelectedUserOption(option);
  };

  const [editSupervisorOption, setEditSupervisorOption] = React.useState(null);

  const handleEditSupervisorClick = () => {
    setopenEditSupervisor(!openEditSupervisor);
  };

  const drawer = (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <List sx={{ marginTop: "30%" }}>
        <NavLink
          to="/admindashboard"
          style={{ textDecoration: "none" }}
          onClick={() => handleDashboardClick}
        >
          <ListItem
            key="dashboard"
            disablePadding
            onClick={handleDashboardClick}
            sx={{
              color: Colors.palette.secondary.main,
              backgroundColor: Colors.palette.primary.main,
              "&:hover": {
                color: Colors.palette.primary.main,
                backgroundColor: Colors.palette.secondary.main,
              },
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <GridViewOutlinedIcon
                  sx={{
                    padding: "2px",
                    color: Colors.palette.primary.main,
                    backgroundColor: Colors.palette.secondary.main,
                    borderRadius: "50%",
                    border: `2px solid ${Colors.palette.secondary.main}`,
                  }}
                />
              </ListItemIcon>

              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </NavLink>

        <ListItem
          key="payment"
          disablePadding
          onClick={handlePaymentClick}
          sx={{
            color: Colors.palette.secondary.main,
            backgroundColor: Colors.palette.primary.main,
            "&:hover": {
              color: Colors.palette.primary.main,
              backgroundColor: Colors.palette.secondary.main,
            },
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <AccountBalanceRoundedIcon
                sx={{
                  padding: "2px",
                  color: Colors.palette.primary.main,
                  backgroundColor: Colors.palette.secondary.main,
                  borderRadius: "50%",
                  border: `2px solid ${Colors.palette.secondary.main}`,
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Payment" />
            {openPayment ? (
              <ExpandLess />
            ) : (
              <ArrowForwardIosIcon sx={{ fontSize: "16px" }} />
            )}
          </ListItemButton>
        </ListItem>

        {openPayment && (
          <List component="div" disablePadding>
            <NavLink
              to="/adminpaysuccessful"
              style={{ textDecoration: "none" }}
              onClick={() => handlePaymentOptionClick("Successful Payments")}
            >
              <ListItem key="successful" disablePadding>
                <ListItemButton
                  sx={{
                    color: Colors.palette.secondary.main,
                    backgroundColor:
                      selectedPaymentOption === "Successful Payments"
                        ? Colors.palette.background.lightGreen
                        : Colors.palette.primary.main,
                    "&:hover": {
                      color: Colors.palette.primary.main,
                      backgroundColor: Colors.palette.background.lightBlue,
                    },
                  }}
                  onClick={() =>
                    handlePaymentOptionClick("Successful Payments")
                  }
                >
                  <ListItemIcon>
                    {selectedPaymentOption === "Successful Payments" ? (
                      <RadioButtonCheckedIcon />
                    ) : (
                      <RadioButtonUncheckedIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary="Successful Payments" />
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink
              to="/adminpayunsucessful"
              style={{ textDecoration: "none" }}
              onClick={() => handlePaymentOptionClick("Unsuccessful Payments")}
            >
              <ListItem key="unsuccessful" disablePadding>
                <ListItemButton
                  sx={{
                    color: Colors.palette.secondary.main,
                    backgroundColor:
                      selectedPaymentOption === "Unsuccessful Payments"
                        ? Colors.palette.background.lightRed
                        : Colors.palette.primary.main,
                    "&:hover": {
                      color: Colors.palette.primary.main,
                      backgroundColor: Colors.palette.background.lightBlue,
                    },
                  }}
                  onClick={() =>
                    handlePaymentOptionClick("Unsuccessful Payments")
                  }
                >
                  <ListItemIcon>
                    {selectedPaymentOption === "Unsuccessful Payments" ? (
                      <RadioButtonCheckedIcon />
                    ) : (
                      <RadioButtonUncheckedIcon />
                    )}
                  </ListItemIcon>

                  <ListItemText primary="Unsuccessful Payments" />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>
        )}

        <ListItem
          key="users"
          disablePadding
          onClick={handleUserClick}
          sx={{
            color: Colors.palette.secondary.main,
            backgroundColor: Colors.palette.primary.main,
            "&:hover": {
              color: Colors.palette.primary.main,
              backgroundColor: Colors.palette.secondary.main,
            },
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <PeopleAltOutlinedIcon
                sx={{
                  padding: "2px",
                  color: Colors.palette.primary.main,
                  backgroundColor: Colors.palette.secondary.main,
                  borderRadius: "50%",
                  border: `2px solid ${Colors.palette.secondary.main}`,
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Users" />
            {openUsers ? (
              <ExpandLess />
            ) : (
              <ArrowForwardIosIcon sx={{ fontSize: "16px" }} />
            )}
          </ListItemButton>
        </ListItem>
        {openUsers && (
          <List component="div" disablePadding>
            <ListItem key="request" disablePadding>
              <ListItemButton
                sx={{
                  color: Colors.palette.secondary.main,
                  backgroundColor:
                    selectedUserOption === "Request"
                      ? Colors.palette.background.lightskyBlue
                      : Colors.palette.primary.main,
                  "&:hover": {
                    color: Colors.palette.primary.main,
                    backgroundColor: Colors.palette.background.lightBlue,
                  },
                }}
                onClick={() => handleUserOptionClick("Request")}
              >
                <ListItemIcon>
                  {selectedUserOption === "Request" ? (
                    <RadioButtonCheckedIcon />
                  ) : (
                    <RadioButtonUncheckedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary="Request" />
              </ListItemButton>
            </ListItem>

            <ListItem key="active" disablePadding>
              <ListItemButton
                sx={{
                  color: Colors.palette.secondary.main,
                  backgroundColor:
                    selectedUserOption === "Active Users"
                      ? Colors.palette.background.lightGreen
                      : Colors.palette.primary.main,
                  "&:hover": {
                    color: Colors.palette.primary.main,
                    backgroundColor: Colors.palette.background.lightBlue,
                  },
                }}
                onClick={() => handleUserOptionClick("Active Users")}
              >
                <ListItemIcon>
                  {selectedUserOption === "Active Users" ? (
                    <RadioButtonCheckedIcon />
                  ) : (
                    <RadioButtonUncheckedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary="Active Users" />
              </ListItemButton>
            </ListItem>
            <ListItem key="declined" disablePadding>
              <ListItemButton
                sx={{
                  color: Colors.palette.secondary.main,
                  backgroundColor:
                    selectedUserOption === "Declined Users"
                      ? Colors.palette.background.lightRed
                      : Colors.palette.primary.main,
                  "&:hover": {
                    color: Colors.palette.primary.main,
                    backgroundColor: Colors.palette.background.lightBlue,
                  },
                }}
                onClick={() => handleUserOptionClick("Declined Users")}
              >
                <ListItemIcon>
                  {selectedUserOption === "Declined Users" ? (
                    <RadioButtonCheckedIcon />
                  ) : (
                    <RadioButtonUncheckedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary="Declined Users" />
              </ListItemButton>
            </ListItem>
          </List>
        )}

        <ListItem
          key="editsupervisor"
          disablePadding
          onClick={handleEditSupervisorClick}
          sx={{
            color: Colors.palette.secondary.main,
            backgroundColor: Colors.palette.primary.main,
            "&:hover": {
              color: Colors.palette.primary.main,
              backgroundColor: Colors.palette.secondary.main,
            },
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleOutlinedIcon
                sx={{
                  padding: "2px",
                  color: Colors.palette.primary.main,
                  backgroundColor: Colors.palette.secondary.main,
                  borderRadius: "50%",
                  border: `2px solid ${Colors.palette.secondary.main}`,
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Edit Supervisor" />
            {openEditSupervisor ? (
              <ExpandLess />
            ) : (
              <ArrowForwardIosIcon
                sx={{
                  fontSize: "16px",
                  marginLeft: "1rem",
                }}
              />
            )}
          </ListItemButton>
        </ListItem>
        {openEditSupervisor && (
          <List component="div" disablePadding>
            <ListItem key="editsupervisoroption" disablePadding>
              <ListItemButton
                sx={{
                  color: Colors.palette.secondary.main,
                  backgroundColor:
                    editSupervisorOption === "Edit Supervisor"
                      ? Colors.palette.background.lightskyBlue
                      : Colors.palette.primary.main,
                  "&:hover": {
                    color: Colors.palette.primary.main,
                    backgroundColor: Colors.palette.background.lightBlue,
                  },
                }}
                onClick={() => setEditSupervisorOption("Edit Supervisor")}
              >
                <ListItemIcon>
                  {editSupervisorOption === "Edit Supervisor" ? (
                    <RadioButtonCheckedIcon />
                  ) : (
                    <RadioButtonUncheckedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary="Edit Supervisor" />
              </ListItemButton>
            </ListItem>
            <ListItem key="createsupervisoroption" disablePadding>
              <ListItemButton
                sx={{
                  color: Colors.palette.secondary.main,
                  backgroundColor:
                    editSupervisorOption === "Create Supervisor"
                      ? Colors.palette.background.lightskyBlue
                      : Colors.palette.primary.main,
                  "&:hover": {
                    color: Colors.palette.primary.main,
                    backgroundColor: Colors.palette.background.lightBlue,
                  },
                }}
                onClick={() => setEditSupervisorOption("Create Supervisor")}
              >
                <ListItemIcon>
                  {editSupervisorOption === "Create Supervisor" ? (
                    <RadioButtonCheckedIcon />
                  ) : (
                    <RadioButtonUncheckedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary="Create Supervisor" />
              </ListItemButton>
            </ListItem>
          </List>
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          background: Colors.palette.secondary.main,
          width: "100%",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "block",md:"none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: Colors.palette.secondary.lightBlue,
                borderRadius: "10px",
              }}
            >
              Profile{" "}
              <ArrowForwardIosIcon
                sx={{ fontSize: "16px", marginLeft: ".2rem" }}
              />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

AdDash.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default AdDash;
