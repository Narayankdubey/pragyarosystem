import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { CircularProgress, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { getAllUnknownVisitors } from "../../../store/admin-action";

const columns = [
  {
    field: "timeFromNow",
    headerName: "Time",
    width: 150,
  },
  {
    field: "referrer",
    headerName: "Referrer",
    type: "string",
    width: 350,
  },
  {
    field: "country",
    headerName: "Country",
    type: "string",
    width: 100,
  },
  {
    field: "region",
    headerName: "Region",
    type: "string",
    width: 100,
  },
  {
    field: "timezone",
    headerName: "Timezone",
    type: "string",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    type: "string",
    width: 100,
  },
  {
    field: "ll",
    headerName: "location",
    type: "string",
    width: 100,
    renderCell: ({ row }) => {
      return row?.ll ? (
        <a
          href={`http://maps.google.com/maps?q=${row?.ll?.toString()}`}
          target="_blank"
          rel="noreferrer"
        >
          Location
        </a>
      ) : null;
    },
  },
  {
    field: "area",
    headerName: "Area",
    type: "string",
    width: 100,
  },
  {
    field: "browser",
    headerName: "Browser",
    type: "string",
    width: 200,
  },
  {
    field: "engine",
    headerName: "Engine",
    type: "string",
    width: 200,
  },
  {
    field: "os",
    headerName: "OS",
    type: "string",
    width: 200,
  },
  {
    field: "device",
    headerName: "Device",
    type: "string",
    width: 300,
  },
  {
    field: "cpu",
    headerName: "CPU",
    type: "string",
    width: 200,
  },
];

export default function UnknownVisitor() {
  const dispatch = useDispatch();

  const { unKnownVisitors, unKnownVisitorsLoading } = useSelector(
    (state) => state.admin
  );

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
        <Typography variant="body2" fontStyle={"italic"} color={"gray"}>
          *Location may vary
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
