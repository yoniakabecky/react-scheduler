import React from "react";
import { Typography } from "@material-ui/core";

import "./scss/layouts.scss";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <Typography variant="body2" color="textSecondary" align="center">
        © {new Date().getFullYear()} Yoni
      </Typography>
    </div>
  );
};

export default Footer;
