import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

const SignedOutLinks = () => {
  return (
    <>
      <Button color="inherit">
        <NavLink to="/sign-in">Sign In</NavLink>
      </Button>
      <Button color="inherit">
        <NavLink to="/sign-up">Sign Up</NavLink>
      </Button>
    </>
  );
}

export default SignedOutLinks;
