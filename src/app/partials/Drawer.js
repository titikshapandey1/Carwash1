import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom"; // Import NavLink
import Colors from "../utils/colors";

const pages = [
  { title: "Home", path: "/" },
  { title: "Services", path: "/services" },
  { title: "About Us", path: "/aboutus" },
  { title: "Contact Us", path: "/contactus" },
  { title: "Login", path: "/login" },
  { title: "Register", path: "/registerpage" },
];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton
              key={index}
              component={NavLink}
              to={page.path}
              activeClassName="active"
            >
              <ListItemIcon>
                <ListItemText>{page.title}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{
          display: { xs: "block", sm: "block", md: "none" },
          color: Colors.palette.primary.main,
          marginRight: "auto",
        }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
