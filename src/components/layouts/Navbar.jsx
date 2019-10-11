import React, { useState, useContext } from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import './scss/layouts.scss';
import MenuDrawer from './MenuDrawer';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { AuthContext } from '../../context/Auth';

import { grey } from '@material-ui/core/colors';

const styles = {
  root: {
    backgroundColor: grey[900],
  }
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  console.log("currentUser", currentUser)
  return (
    <>
      <AppBar position="static" style={styles.root}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setIsMenuOpen(true)}>
            <Menu />
          </IconButton>
          <Link to="/home" className="navbar-title">
            Scheduler
          </Link>
          {currentUser ? <SignedInLinks /> : <SignedOutLinks />}
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
