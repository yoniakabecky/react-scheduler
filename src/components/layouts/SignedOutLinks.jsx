import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

const SignedOutLinks = () => {
  return (
    <>
      <Button color="inherit">
        <NavLink to="/sign-in" className="navbar-btn">Sign In</NavLink>
      </Button>
      <Button color="inherit">
        <NavLink to="/sign-up" className="navbar-btn">Sign Up</NavLink>
      </Button>
    </>
  );
}

export default SignedOutLinks;
