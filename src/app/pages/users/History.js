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
import Colors from "../../utils/colors";
import Nav from "../../partials/Nav";

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
  // hide last border
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
<Nav/>
<Container>
    <Box sx={{textAlign: "center", marginBlock: "4rem", fontSize: "40px", fontWeight: "600", color: Colors.palette.primary.darkBlue}}>History</Box>
    <Container maxWidth="sm" sx={{marginBlock: "10%"}}>
    
      <TableContainer component={Paper}>
    
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              {/* <TableCell >Time</TableCell> */}
              <TableCell
                style={{
                  cellStyle,
                  backgroundColor: "#013C6B",
                  color: "white",
                }}
              >
                Data
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
                <StyledTableCell component="th" scope="row">{row.Date}</StyledTableCell>
                <StyledTableCell>{row.BookingID}</StyledTableCell>
                <StyledTableCell>{row.ServiceTYpe}</StyledTableCell>
                <StyledTableCell>{row.Amount}</StyledTableCell>
                <StyledTableCell>{row.viewdetails}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
    </Container>
    </>
  );
}