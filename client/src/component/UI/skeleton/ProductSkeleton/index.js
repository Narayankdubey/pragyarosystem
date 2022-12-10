import React from "react";
import { useSelector } from "react-redux";
import { Skeleton } from "@mui/material";

const ProductSkeleton = () => {
  const { skeleton } = useSelector((state) => state.ui);
  return (
    <div style={{ margin: "15px", display: skeleton ? "block" : "none" }}>
      <Skeleton variant="rectangular" width={320} height={200} />
      <Skeleton height={50} />
      <Skeleton height={50} />
      <Skeleton width="50%" height={50} />
    </div>
  );
};

export default ProductSkeleton;
