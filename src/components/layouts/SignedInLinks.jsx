import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import firebase from '../../firebase/firebase';

const SignedInLinks = () => {
  const handleSignOut = async event => {
    try {
      await firebase.auth().signOut().then(() => console.log('signed out success'))
      // history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>

      <Button color="inherit" onClick={handleSignOut}>
        <NavLink to="/">Log Out</NavLink>
      </Button>
    </>
  );
}

export default SignedInLinks;
