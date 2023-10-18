import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container } from "@mui/material";
import Colors from "../utils/colors";
// import Nav from "../../partials/Nav";
import { NavLink } from "react-router-dom"; 

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(Date, BookingID, ServiceTYpe, Amount, viewdetails) {
  return { Date, BookingID, ServiceTYpe, Amount, viewdetails };
}

const rows = [
  createData(
    "27/12/2023",
    "Booking ID",
    "Service Type",
    "Amount",
    "view details"
  ),
  createData(
    "27/12/2023",
    "Booking ID",
    "Service Type",
    "Amount",
    "view details"
  ),
  createData(
    "27/12/2023",
    "Booking ID",
    "Service Type",
    "Amount",
    "view details"
  ),
  createData(
    "27/12/2023",
    "Booking ID",
    "Service Type",
    "Amount",
    "view details"
  ),
  createData(
    "27/12/2023",
    "Booking ID",
    "Service Type",
    "Amount",
    "view details"
  ),
];

export default function History() {
  const cellStyle = {
    border: "1px solid black",
    padding: "12px",
    textAlign: "center",
    fontSize: "15px",
    borderRadius: "30%",
  };
  return (
    <>
      <Container>
        <Container maxWidth="lg">
          <Box
            sx={{
              backgroundColor: Colors.palette.secondary.cardBackground,
              padding: "20px",
            }}
          >
            <TableContainer component={Paper}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{
                        cellStyle,
                        backgroundColor: "#013C6B",
                        color: "white",
                      }}
                    >
                      Date
                    </TableCell>
                    <TableCell
                      style={{
                        cellStyle,
                        backgroundColor: "#013C6B",
                        color: "white",
                      }}
                    >
                      Booking ID
                    </TableCell>
                    <TableCell
                      style={{
                        cellStyle,
                        backgroundColor: "#013C6B",
                        color: "white",
                      }}
                    >
                      Service Type
                    </TableCell>
                    <TableCell
                      style={{
                        cellStyle,
                        backgroundColor: "#013C6B",
                        color: "white",
                      }}
                    >
                      Amount
                    </TableCell>
                    <TableCell
                      style={{
                        cellStyle,
                        backgroundColor: Colors.palette.secondary.main,
                        color: "white",
                      }}
                    >
                      view details
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.Date}>
                      <StyledTableCell component="th" scope="row">
                        {row.Date}
                      </StyledTableCell>
                      <StyledTableCell>{row.BookingID}</StyledTableCell>
                      <StyledTableCell>{row.ServiceTYpe}</StyledTableCell>
                      <StyledTableCell>{row.Amount}</StyledTableCell>
                      <StyledTableCell>
                        <NavLink to="/">{row.viewdetails}</NavLink>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Container>
      </Container>
    </>
  );
}
