import React from 'react';

// components
import Container from '../components/Container';

export default ({ data }) => {
  var pageTitle = 'About';

  return (
    <Container>
      <div className="wrap ta-center">
        <h1>{pageTitle}</h1>
        <p>Soul searching in progress...</p>
      </div>
    </Container>
  );
};
