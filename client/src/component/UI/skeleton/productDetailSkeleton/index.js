import React from "react";
import { Grid, Skeleton, Paper } from "@mui/material";

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
      <Grid item xs={24} sm={24} md={24}>
        <Paper sx={{m:1}}>
          <Skeleton variant="rectangular" height={100} width={"40%"} />
        </Paper>
        <Paper sx={{m:1}}>
          <Skeleton variant="rectangular" height={100} width={"40%"} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProductDetailSkeleton;
