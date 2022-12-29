import React from "react";
import { Skeleton } from "@mui/material";

const AdminTableSkeleton = () => {
  return (
    <div style={{ margin: "15px"}}>
      <Skeleton height={50} />
      <Skeleton height={50} />
      <Skeleton height={50} />
      <Skeleton height={50} />
      <Skeleton height={50} />
      <Skeleton height={50} />
      <Skeleton height={50} />
      <Skeleton height={50} />
    </div>
  );
};

export default AdminTableSkeleton;
