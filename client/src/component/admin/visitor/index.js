import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { getAllVisitors } from "../../../store/admin-action";

const columns = [
  //   { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 250 },
  //   { field: "lastName", headerName: "Last name", width: 130 },
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
  //   {
  //     field: "fullName",
  //     headerName: "Full name",
  //     description: "This column has a value getter and is not sortable.",
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.getValue(params.id, "firstName") || ""} ${
  //         params.getValue(params.id, "lastName") || ""
  //       }`,
  //   },
];

export default function Visitor() {
  const dispatch = useDispatch();

  const { visitors } = useSelector((state) => state.admin);

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
        <Typography variant="h5" component="h5">
          Visitors
        </Typography>
      </Paper>
      <div style={{ height: 400, width: "100%", margin: "5px auto" }}>
        <DataGrid
          getRowId={(r) => r._id}
          rows={timeChange()}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          // checkboxSelection
          // initialState={{
          //   sorting: {
          //     sortModel: [{ field: "timeFromNow", sort: "desc" }],
          //   },
          // }}
        />
      </div>
    </div>
  );
}
