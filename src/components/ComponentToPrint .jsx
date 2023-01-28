// Using a class component, everything works without issue
import React from "react";
import { Box, Typography } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import FlexBetween from "../components/FlexBetween";

export class ComponentToPrint extends React.Component {
  render() {
    function createData(
      container,
      company,
      cargo,
      truck,
      registerDate,
      toDate
    ) {
      return { container, company, cargo, truck, registerDate, toDate };
    }

    const rows = [
      createData(
        "3213341324",
        "Mirwais Ahmadi Lemited",
        "Afghan Brothers lemited",
        "341234",
        "1/10/1401",
        "11/11/1401"
      ),
    ];
    return (
      <Box m="15px" className="component-to-print" sx={{ color: "#000" }}>
        <Typography sx={{ my: "50px" }} variant="h3" textAlign="center">
          Container ComeBack paper{" "}
        </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Container Number
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Company Name
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Cargo Name
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Truck Number
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Register Date
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  To Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.container}>
                  <TableCell>{row.container}</TableCell>
                  <TableCell align="center">{row.company}</TableCell>
                  <TableCell align="center">{row.cargo}</TableCell>
                  <TableCell align="center">{row.truck}</TableCell>
                  <TableCell align="center">{row.registerDate}</TableCell>
                  <TableCell align="center">{row.toDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <FlexBetween>
          <Box
            sx={{
              border: "1px solid #ccc",
              height: "250px",
              borderRadius: "5px",
            }}
            flexGrow={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography>Management Signature</Typography>
          </Box>
          <Box
            sx={{
              border: "1px solid #ccc",
              height: "250px",
              borderRadius: "5px",
            }}
            flexGrow={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography>Company Signature</Typography>
          </Box>
        </FlexBetween>
      </Box>
    );
  }
}
