import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';


const LandingPage = () => {
  return (
    <Container>
      <h1>this is a landing page</h1>
      <Link to="/week">Week</Link>
    </Container>
  );
}

export default LandingPage;
