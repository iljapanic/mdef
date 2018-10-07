import React from 'react';

// components
import Container from '../components/Container';

export default ({ data }) => {
  var pageTitle = 'Hello IAAC!';

  return (
    <Container>
      <div className="wrap">
        <h1>{pageTitle}</h1>
      </div>
    </Container>
  );
};
