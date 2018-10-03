import React from 'react';

// components
import Container from '../components/Container';

export default ({ data }) => {
  var pageTitle = 'Hello IAAC!';

  return (
    <Container>
      <h1>{pageTitle}</h1>
    </Container>
  );
};
