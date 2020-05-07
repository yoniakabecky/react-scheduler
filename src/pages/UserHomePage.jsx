import React from "react";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import MenuCard from "../components/userHome/MenuCard";
import menuList from "../components/userHome/menuList";

const UserHomePage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" component="section" className={classes.container}>
      {menuList.map((menu, index) => (
        <MenuCard props={menu} key={index} />
      ))}
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.global.container,
    [theme.breakpoints.up("sm")]: {
      height: "calc(100vh - 64px)",
    },
  },
}));

export default UserHomePage;
