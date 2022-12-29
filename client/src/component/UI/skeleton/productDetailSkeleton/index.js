import React from "react";
import { Grid, Skeleton,Paper } from "@mui/material";

const ProductDetailSkeleton = () => {
  return (
    <Grid container component={Paper}>
      <Grid item xs={12} sm={12} md={6}>
        <Skeleton variant="rectangular" height={500} />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Skeleton width="50%" height={50} />
        <Skeleton height={50} />
        <Skeleton height={50} />
        <Skeleton height={50} />
        <Skeleton height={50} />
        <Skeleton height={50} />
        <Skeleton height={50} />
        <Skeleton height={50} />
        <Skeleton height={50} />
      </Grid>
    </Grid>
  );
};

export default ProductDetailSkeleton;
