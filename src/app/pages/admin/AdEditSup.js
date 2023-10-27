import React from "react";
import AdminDash from "../../components/AdDash";
import Table from "../../components/Table";
import Colors from "../../utils/colors";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const AdEditSup = () => {
  const tableHeaders = [
    "Joining",
    "Supervisor ID",
    "Service Type",
    "Amount",
    "",
  ];
  const tableData = [
    {
      d1: "27/12/2023",
      d2: "Booking ID 1",
      d3: "Service Type 1",
      d4: "Amount 1",
      d6: [
        <NavLink
          to="/admineditsupervisor1"
          style={{
            textDecoration: "none",
            color: Colors.palette.secondary.main,
          }}
        >
          <EditIcon
            sx={{ marginRight: "30%", color: Colors.palette.secondary.main }}
          />
        </NavLink>,
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            color: Colors.palette.secondary.main,
          }}
        >
          <DeleteIcon sx={{ color: Colors.palette.secondary.main }} />
        </NavLink>,
      ],
    },
    {
      d1: "27/12/2023",
      d2: "Booking ID 2",
      d3: "Service Type 2",
      d4: "Amount 2",
      d6: [
        <NavLink
          to="/admineditsupervisor1"
          style={{
            textDecoration: "none",
            color: Colors.palette.secondary.main,
          }}
        >
          <EditIcon
            sx={{ marginRight: "30%", color: Colors.palette.secondary.main }}
          />
        </NavLink>,
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            color: Colors.palette.secondary.main,
          }}
        >
          <DeleteIcon sx={{ color: Colors.palette.secondary.main }} />
        </NavLink>,
      ],
    },
    {
      d1: "27/12/2023",
      d2: "Booking ID 3",
      d3: "Service Type 3",
      d4: "Amount 3",
      d6: [
        <NavLink
          to="/admineditsupervisor1"
          style={{
            textDecoration: "none",
            color: Colors.palette.secondary.main,
          }}
        >
          <EditIcon
            sx={{ marginRight: "30%", color: Colors.palette.secondary.main }}
          />
        </NavLink>,
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            color: Colors.palette.secondary.main,
          }}
        >
          <DeleteIcon sx={{ color: Colors.palette.secondary.main }} />
        </NavLink>,
      ],
    },
    {
      d1: "27/12/2023",
      d2: "Booking ID 4",
      d3: "Service Type 4",
      d4: "Amount 4",
      d6: [
        <NavLink
          to="/admineditsupervisor1"
          style={{
            textDecoration: "none",
            color: Colors.palette.secondary.main,
          }}
        >
          <EditIcon
            sx={{ marginRight: "30%", color: Colors.palette.secondary.main }}
          />
        </NavLink>,
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            color: Colors.palette.secondary.main,
          }}
        >
          <DeleteIcon sx={{ color: Colors.palette.secondary.main }} />
        </NavLink>,
      ],
    },
  ];
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
            marginTop: { xs: "22%", sm: "12%", md: "8%", lg: "10%" },
            marginLeft: { xs: "5%", sm: "1%", md: "30%", lg: "15%" },
            color: Colors.palette.secondary.main,
            fontSize: { xs: "1.2rem", sm: "1.6rem", md: "inherit" },
            fontWeight: "600",
          }}
        >
          Edit Supervisor
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            marginTop: { xs: "5%", sm: "2%" },
            marginLeft: { sm: "0%", md: "21.5%", lg: "17%" },
          }}
        >
          {/* <Table data={tableData} headers={tableHeaders} /> */}
          <Table data={tableData} headers={tableHeaders} />
        </Box>
      </Box>
    </>
  );
};

export default AdEditSup;