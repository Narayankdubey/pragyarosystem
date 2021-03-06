import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ textAlign: "center", background: "grey", padding: "5px" }}>
      <p>8920310622</p>
      <p>
        Krishna Vihar, Gathola Road, Lakh No.11, Near Mahavir Mandir, Bahiro,
        Ara, Bhojpur, Bihar
      </p>
      <small>
        Copyright @Pragya RO System 2022 <br />
        <Link to="/admin" style={{ color: "black", textDecoration: "none" }}>
          All Rights Reserved.
        </Link>
      </small>
    </footer>
  );
};

export default Footer;
