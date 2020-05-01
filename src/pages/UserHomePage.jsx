import React from "react";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import MenuCard from "../components/userHome/MenuCard";
import menuList from "../components/userHome/menuList";

const UserHomePage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" component="section" className={classes.root}>
      {menuList.map((menu, index) => (
        <MenuCard props={menu} key={index} />
      ))}
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    height: "calc(100vh - 64px)",
    alignContent: "center",
  },
}));

export default UserHomePage;
