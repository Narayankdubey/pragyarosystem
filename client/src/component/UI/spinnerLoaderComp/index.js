import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function SpinnerLoaderComp({ display }) {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: display ? "flex" : "none",
        position: "absolute",
        top: "0",
        left: "0",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
      }}
    >
      <CircularProgress
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </Box>
  );
}
