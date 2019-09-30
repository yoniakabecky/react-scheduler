import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import './scss/layouts.scss';
import MenuDrawer from './MenuDrawer';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setIsMenuOpen(true)}>
            <Menu />
          </IconButton>
          <Link to="/" className="navbar-title">
            Scheduler
          </Link>
          <Button color="inherit">
            <Link to="/sign-in">Sign In</Link>
          </Button>
          <Button color="inherit">
            <Link to="/sign-up">Sign Up</Link>
          </Button>
        </Toolbar>
      </AppBar>
      <MenuDrawer
        isOpen={isMenuOpen}
        handleClose={() => setIsMenuOpen(false)}
      />

    </>
  );
}

export default Navbar;
