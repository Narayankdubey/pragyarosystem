import React from "react";
import { Skeleton } from "@mui/material";
import "./style.css";
const HomeSkeleton = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Skeleton
        variant="rectangular"
        width="75%"
        height={200}
        className="carousel-bigscreen-skeleton"
      />
      {/* <Skeleton
        variant="rectangular"
        width="100%"
        height={200}
        // className="carousel-mobile-skeleton"
      /> */}
      <div className="home-banner">
        <Skeleton variant="rectangular" width="70%" />
        <Skeleton variant="rectangular" width="100%" height={150} />
        <Skeleton variant="rectangular" width="70%" />
        <div className="home-banner-button">
          <Skeleton variant="rectangular" width="100px" />
          <Skeleton variant="rectangular" width="100px" />
        </div>
      </div>
      <Skeleton
        height={300}
        width="90%"
        variant="rectangular"
        className="product-intro-skeleton"
      />
      <Skeleton
        height={300}
        width="90%"
        variant="rectangular"
        className="product-intro-skeleton"
      />
      <Skeleton
        height={300}
        width="90%"
        variant="rectangular"
        className="product-intro-skeleton"
      />
      <Skeleton
        height={300}
        width="90%"
        variant="rectangular"
        className="product-intro-skeleton"
      />
      <Skeleton
        height={300}
        width="90%"
        variant="rectangular"
        className="product-intro-skeleton"
      />
    </div>
  );
};

export default HomeSkeleton;
