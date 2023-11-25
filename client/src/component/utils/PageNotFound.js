import { Button, Card, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div
      className="pageNotfound"
      style={{
        minHeight: "calc(100vh - 200px)",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Card
        sx={{
          width: "80%",
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" component={"h1"}>
          404
        </Typography>
        <p>Page Not Found</p>
        <Link to={"/"}>
          <Button>Back To Home</Button>
        </Link>
      </Card>
    </div>
  );
};

export default PageNotFound;
