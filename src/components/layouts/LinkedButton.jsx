import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// mui
import Button from "@material-ui/core/Button";

const LinkedButton = ({ variant, color, route, label }) => {
  return (
    <Link to={route} style={{ textDecoration: "none" }}>
      <Button
        variant={variant ? variant : "contained"}
        color={color ? color : "primary"}
        style={{ margin: "0.5rem" }}
      >
        {label}
      </Button>
    </Link>
  );
};

LinkedButton.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  route: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default LinkedButton;
