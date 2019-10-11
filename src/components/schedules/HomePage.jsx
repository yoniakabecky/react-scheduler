import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';


const HomePage = () => {
  return (
    <Container maxWidth="xl">
      <h1>this is user's home page</h1>
      <Link to="/week">Week</Link>
    </Container>
  );
}

export default HomePage;
