import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import BusinessIcon from "@mui/icons-material/Business";

import ContactUsForm from "./ContactUsForm";

const Contact = () => {
  return (
    <Grid container spacing={0}>
      <ContactUsForm />
      <Grid
        container
        spacing={0}
        style={{
          padding: "15px",
          width: "100%",
          minHeight: "300px",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography
          component={"div"}
          sx={{ width: "300px", display: "flex", alignContent: "center" }}
        >
          <div
            className="contact-banner"
            style={{
              width: "100%",
              height: "150px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Button
              href="tel:8920310622"
              variant="contained"
              color="secondary"
              startIcon={<CallIcon />}
            >
              8920310622
            </Button>
            <Button
              href="https://wa.me/918920310622?text=I'm%20interested"
              variant="contained"
              color="success"
              startIcon={<WhatsAppIcon />}
              // style={{ marginTop: "5px" }}
            >
              Whatsapp
            </Button>
            <Button
              href="mailto:pragyarosystem@gmail.com"
              variant="contained"
              color="error"
              startIcon={<EmailIcon />}
              // style={{ marginTop: "5px" }}
            >
              Email
            </Button>
          </div>
        </Typography>
        <Typography
          component={"div"}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "block" }}>
            <BusinessIcon /> <p style={{ fontWeight: "600" }}>Address</p>
          </div>
          <p>
            Krishna Vihar, Gathola Road, Lakh No.11, Near Mahavir Mandir,
            Bahiro,
            <br /> Ara, Bhojpur, Bihar
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.653479177474!2d84.67058051430367!3d25.54991712357118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d5f2846d780d1%3A0x9c84575304aa109c!2sPragya%20RO%20System!5e0!3m2!1sen!2sin!4v1649773280889!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Contact;
