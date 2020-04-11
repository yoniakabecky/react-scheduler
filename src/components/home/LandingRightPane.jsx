import React from "react";
import heroImg from "../../resources/topImage.jpg";

const LandingRightPane = () => {
  return <img src={heroImg} alt="welcome to scheduel" style={styles} />;
};

const styles = {
  height: "100%",
  width: "100%",
  objectFit: "cover"
};

export default LandingRightPane;
