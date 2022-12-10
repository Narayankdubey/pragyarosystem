import React from "react";
import { Skeleton, Paper } from "@mui/material";

const HeaderSkeleton = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Skeleton variant="rectangular" width="10%" height={40} />
      <Skeleton variant="text" width="45%" height={40} />
      <div
        style={{
          display: "flex",
          width: "20%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Skeleton variant="circular" width="45%" height={40} />
        <Skeleton variant="circular" width="45%" height={40} />
      </div>
    </div>
  );
};

export default HeaderSkeleton;
