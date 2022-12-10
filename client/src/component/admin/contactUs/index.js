import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Paper,
  Typography,
  TableContainer,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Table,
  TextField,
} from "@mui/material";

import "../../style/table.css";
import { getAllContactUs } from "../../../store/admin-action";

const ContactUs = () => {
  const dispatch = useDispatch();
  const { contactUsData } = useSelector((state) => state.admin);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllContactUs());
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Paper
        className="admin-header"
        // elevation={3}
        style={{
          padding: "5px",
          margin: "8px auto",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          color: "black",
          //   borderBottom: "1px solid black",
          //   borderRadius: "10px",
        }}
      >
        <Typography variant="h5">Contact Us</Typography>

        {/* <Button
          variant="contained"
          color="success"
          size="small"
          onClick={() => navigate("/product/create")}
        >
          Create Product
        </Button> */}
      </Paper>
      <TableContainer component={Paper} className="table-container">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow
            // style={{ backgroundColor: "#9e2d2dde", color: "white" }}
            >
              <TableCell>Index</TableCell>
              <TableCell sx={{ minWidth: 150 }} align="center">
                Name
              </TableCell>
              <TableCell align="right" sx={{ minWidth: 180 }}>
                Mobile No.
              </TableCell>
              <TableCell align="right" sx={{ minWidth: 150 }}>
                Email
              </TableCell>
              <TableCell align="right" sx={{ minWidth: 220 }}>
                Address
              </TableCell>
              <TableCell align="right" sx={{ minWidth: 230 }}>
                Feedback
              </TableCell>
              <TableCell align="right" sx={{ minWidth: 230 }}>
                Admin Feedback
              </TableCell>
              <TableCell align="right" sx={{ minWidth: 230 }}>
                Input
              </TableCell>
              <TableCell align="right">Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contactUsData.map((data, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}.
                </TableCell>
                <TableCell component="th" scope="row">
                  {data.name}
                </TableCell>
                <TableCell align="right">{data.mobile}</TableCell>
                <TableCell align="right">{data.email}</TableCell>
                <TableCell align="right">{data.address}</TableCell>
                <TableCell align="right">{data.feedback}</TableCell>
                <TableCell align="right">{data.adminFeedback}</TableCell>
                <TableCell align="right">
                  <TextField label="admin feedback" multiline size="small" />
                </TableCell>
                <TableCell align="center">
                  <Button variant="contained">Update</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ContactUs;
