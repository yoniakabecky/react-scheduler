import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';


const LandingPage = () => {
  return (
    <Container>
      <Link to="/week">Week</Link>
    </Container>
  );
}

export default LandingPage;
