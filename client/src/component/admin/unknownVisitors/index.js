import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { CircularProgress, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import {
    getAllUnknownVisitors,
} from "../../../store/admin-action";

const columns = [
  {
    field: "timeFromNow",
    headerName: "Time",
    width: 150,
  },
  { field: "ip_address", headerName: "IP Address", width: 250 },
  {
    field: "referrer",
    headerName: "Referrer",
    type: "string",
    width: 350,
  },
  {
    field: "user_agent",
    headerName: "User Agent",
    type: "string",
    width: 850,
  },
];

export default function UnknownVisitor() {
  const dispatch = useDispatch();

  const { unKnownVisitors, unKnownVisitorsLoading } =
    useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getAllUnknownVisitors());
    timeChange();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const timeChange = () => {
    return unKnownVisitors.map((d) => ({
      ...d,
      timeFromNow: moment(d.time).fromNow(),
    }));
  };
  console.log(unKnownVisitors, 'unknow')
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
          alignItems: "center",
          color: "black",
        }}
      >
        <Typography variant="h6" component="h6">
          Unknown Visitors : 
          {unKnownVisitorsLoading ? (
            <CircularProgress size={15} />
          ) : (
            unKnownVisitors?.length || 0
          )}
        </Typography>
      </Paper>
      <div style={{ height: 400, width: "100%", margin: "5px auto" }}>
        <DataGrid
          loading={unKnownVisitorsLoading}
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
