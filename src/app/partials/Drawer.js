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
import { NavLink } from "react-router-dom";
import Colors from "../utils/colors";

const DrawerComp = ({ drawerContent }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: {
            width: { xs: 150, sm: 180, md: 230 },
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            backgroundColor: Colors.palette.primary.main,
            color: Colors.palette.secondary.black,
          },
        }}
      >
        <List>
          {drawerContent.map((item, index) => (
            <ListItemButton
              key={index}
              component={NavLink}
              to={item.path}
              onClick={item.onClick}
              activeClassName="active"
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{
          display: { xs: "block", sm: "block", md: "none" },
          color: Colors.palette.primary.main,
          marginRight: "10px",
        }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
