import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  Button,
  Paper,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import "./style.css";

import {
  getAllServiceRequests,
  updateServiceRequest,
} from "../../../store/admin-action";

export default function ServiceRequest() {
  const dispatch = useDispatch();

  const { serviceRequestData, serviceRequestLoader } = useSelector(
    (state) => state.admin
  );

  const timeChange = () => {
    return serviceRequestData.map((d) => ({
      ...d,
      timeFromNow: moment(d.time).fromNow(),
    }));
  };

  const refreshData = () => {
    setTimeout(() => {
      dispatch(getAllServiceRequests());
      timeChange();
    }, 600);
  };

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 150,
      renderCell: (params) => (
        <Tooltip title={params.row?.name}>
          <Typography variant="body2">{params.row?.name}</Typography>
        </Tooltip>
      ),
    },
    {
      field: "mobile",
      headerName: "Mobile No.",
      type: "string",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      width: 200,
      renderCell: (params) => (
        <Tooltip title={params.row?.email}>
          <Typography variant="body2">{params.row?.email}</Typography>
        </Tooltip>
      ),
    },
    {
      field: "address",
      headerName: "Address",
      type: "string",
      width: 350,
      renderCell: (params) => (
        <Tooltip title={params.row?.address}>
          <Typography variant="body2">{params.row?.address}</Typography>
        </Tooltip>
      ),
    },
    {
      field: "productName",
      headerName: "Product Name",
      type: "string",
      width: 150,
      renderCell: (params) => (
        <Tooltip title={params.row?.productName}>
          <Typography variant="body2">{params.row?.productName}</Typography>
        </Tooltip>
      ),
    },
    {
      field: "issue",
      headerName: "Issue",
      type: "string",
      width: 200,
      renderCell: (params) => (
        <Tooltip title={params.row?.issue}>
          <Typography variant="body2">{params.row?.issue}</Typography>
        </Tooltip>
      ),
    },
    {
      field: "timeFromNow",
      headerName: "Time",
      width: 150,
    },
    {
      field: "adminFeedback",
      headerName: "Admin Feedback",
      width: 150,
      renderCell: (params) => (
        <Tooltip title={params.row?.adminFeedback}>
          <Typography variant="body2">{params.row?.adminFeedback}</Typography>
        </Tooltip>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        const onSubmitHandler = (e) => {
          e.preventDefault();
          const value = e.target[0]?.value;
          if (value.length > 0) {
            const data = params.row;
            data.adminFeedback = e.target[0].value;
            dispatch(updateServiceRequest(data));
            e.target[0].value = "";
            refreshData();
          }
        };
        return (
          <Box
            component={"form"}
            onSubmit={onSubmitHandler}
            display="flex"
            justifyContent={"space-between"}
            alignItems={"center"}
            gap="5px"
          >
            <TextField
              name="adminFeedback"
              label="Admin Feedback"
              placeholder="Enter your feedback"
              size="small"
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(getAllServiceRequests());
    timeChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <Typography variant="h5" component="h5">
          Service Request
        </Typography>
      </Paper>
      <div style={{ height: 400, width: "100%", margin: "5px auto" }}>
        <DataGrid
          loading={serviceRequestLoader}
          getRowId={(r) => r._id}
          rows={timeChange()}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>
  );
}
