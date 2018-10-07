import React from 'react';
import { Helmet } from 'react-helmet';

// components
import Container from '../components/Container';

export default ({ data }) => {
  var pageTitle = 'About';

  return (
    <Container>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="wrap ta-center">
        <h1>{pageTitle}</h1>
        <p>Soul searching in progress...</p>
      </div>
    </Container>
  );
};
