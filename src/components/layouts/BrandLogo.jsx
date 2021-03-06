import React from "react";
import styled from "styled-components";

// Logos
import { ReactComponent as BrandName } from "../../resources/scheduel_logo.svg";
import { ReactComponent as BrandMark } from "../../resources/scheduel_logo_mark.svg";

export const Name = styled(BrandName)`
  fill: ${(props) =>
    props.fill === "light"
      ? "#f2f2f2"
      : props.fill === "dark"
      ? "#262223"
      : props.fill};
  height: ${(props) => props.size}rem;
  padding-left: 0.3rem;
  padding-bottom: 0.3rem;
`;

export const Mark = styled(BrandMark)`
  height: ${(props) => props.size + 0.5}rem;
  & .logo-1 {
    fill: transparent;
  },
  & .logo-2 {
    fill: ${(props) =>
      props.fill === "light"
        ? "#f2f2f2"
        : props.fill === "dark"
        ? "#262223"
        : props.fill};
  },
  & .logo-3 {
    fill: ${(props) =>
      props.fill === "light"
        ? "#262223"
        : props.fill === "dark"
        ? "#f2f2f2"
        : "inherit"};
  },
`;

const BrandLogo = ({ color, size }) => {
  return (
    <>
      <Mark fill={color} size={size} />
      <Name fill={color} size={size} />
    </>
  );
};

export default BrandLogo;
