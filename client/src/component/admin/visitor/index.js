import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { getAllVisitors } from "../../../store/admin-action";

const columns = [
  { field: "name", headerName: "Name", width: 250 },
  {
    field: "mobile",
    headerName: "Mobile No.",
    type: "string",
    width: 150,
  },
  {
    field: "timeFromNow",
    headerName: "Time",
    width: 150,
  },
];

export default function Visitor() {
  const dispatch = useDispatch();

  const { visitors, visitorsLoader } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getAllVisitors());
    timeChange();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const timeChange = () => {
    return visitors.map((d) => ({
      ...d,
      timeFromNow: moment(d.time).fromNow(),
    }));
  };
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
          Visitors
        </Typography>
      </Paper>
      <div style={{ height: 400, width: "100%", margin: "5px auto" }}>
        <DataGrid
        loading={visitorsLoader}
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
