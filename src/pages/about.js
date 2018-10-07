import React from 'react';
import { Helmet } from 'react-helmet';

// components
import Container from '../components/Container';

import notFound from '../images/not-found.gif';

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
        <div className="ta-center m-1">
          <img src={notFound} alt="confused John Travolta" />
        </div>
      </div>
    </Container>
  );
};
