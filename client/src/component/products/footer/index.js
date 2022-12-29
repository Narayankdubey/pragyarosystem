import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";

import PragyaROSystem from "../../../asset/app/PragyaROSystem.apk";

import "./style.css";

const Footer = () => {
  return (
    <footer>
      <h1 style={{ width: "100%", color: "white" }}>Pragya RO System</h1>
      <div className="contact-banner" style={{ maxWidth: "300px" }}>
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
        >
          Whatsapp
        </Button>
      </div>
      <p>
        <small>
          Krishna Vihar, Gathola Road, Lakh No.11, Near Mahavir Mandir, Bahiro,
          Ara, Bhojpur, Bihar
        </small>
      </p>
      <Link to={PragyaROSystem} target="_blank" download>
        <img
          src="https://cdn4.iconfinder.com/data/icons/files-47/64/apk-512.png"
          alt="android"
          width={100}
        />
      </Link>
      <small style={{ width: "100%" }}>
        <br />
        Copyright @Pragya RO System 2022 <br />
        <Link to="/admin" style={{ color: "white", textDecoration: "none" }}>
          All Rights Reserved.
        </Link>
      </small>
    </footer>
  );
};

export default Footer;
