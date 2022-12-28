import React from "react";
import { Typography, Button, Grid } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import "./style.css";
import ServiceForm from "./components/ServiceForm";

const Service = () => {
  return (
    <div>
      <div className="service-upper-container service-container">
        <Typography variant="h5" style={{ fontWeight: "600" }}>
          To Register your Service Request for your Pragya RO System Products
        </Typography>
        {/* <a href="tel:8920310622">
          <Typography variant="h2">89-203-10622</Typography>
        </a> */}
        <Button
          href="tel:8920310622"
          //   variant="contained"
          color="secondary"
          startIcon={
            <CallIcon
              className="service-call-header"
              style={{ fontSize: "35px" }}
            />
          }
          className="service-call-header"
        >
          89-203-10622
        </Button>
      </div>
      <div className="service-lower-container  service-container">
        <Typography
          variant="h5"
          style={{ textAlign: "center", fontWeight: "600" }}
        >
          Alternatively <br />
          You can register your Service Request on Whatsapp <br />
          <a href="https://wa.me/918920310622?text=I%20need%20service">
            <WhatsAppIcon
              style={{
                padding: "5px",
                fontSize: "40px",
                background: "#4ced69",
                color: "white",
                borderRadius: "100px",
              }}
            />
          </a>
          <br />
          Or
          <br /> via E-mail:
          <a href="mailto:pragyarosytem@gmail.com">Email</a>
        </Typography>
      </div>
      <Grid>
        <ServiceForm />
      </Grid>
    </div>
  );
};

export default Service;
