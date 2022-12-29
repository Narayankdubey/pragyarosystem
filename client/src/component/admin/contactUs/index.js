import React, { useEffect } from "react";
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
  Box,
  LinearProgress,
} from "@mui/material";

import "../../style/table.css";
import { getAllContactUs, updateContactUs } from "../../../store/admin-action";

const ContactUs = () => {
  const dispatch = useDispatch();
  const { contactUsData, contactUsLoader } = useSelector(
    (state) => state.admin
  );

  const refreshData = () => {
    setTimeout(() => {
      dispatch(getAllContactUs());
    }, 600);
  };

  const Action = ({ param }) => {
    const submitHandler = (e) => {
      e.preventDefault();
      const value = e.target[0]?.value;
      if (value.length > 0) {
        const data = { ...param, adminFeedback: value };
        dispatch(updateContactUs(data));
        e.target[0].value = "";
        refreshData();
      }
    };
    return (
      <Box
        component={"form"}
        onSubmit={submitHandler}
        display={"flex"}
        gap={5}
        autoComplete="off"
      >
        <TextField
          label="admin feedback"
          placeholder="Enter admin feedback"
          size="small"
        />
        <Button type="submit" variant="contained">
          Update
        </Button>
      </Box>
    );
  };

  useEffect(() => {
    dispatch(getAllContactUs());
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Paper
        className="admin-header"
        style={{
          padding: "5px",
          margin: "8px auto",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          color: "black",
        }}
      >
        <Typography variant="h5">Contact Us</Typography>
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
              <TableCell align="center" sx={{ minWidth: 350 }}>
                Action
              </TableCell>
            </TableRow>
            {contactUsLoader && (
              <TableRow>
                <TableCell colSpan={8} style={{ padding: 0 }}>
                  <Box width={"100%"}>
                    <LinearProgress />
                  </Box>
                </TableCell>
              </TableRow>
            )}
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
                  <Action param={data} />
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
