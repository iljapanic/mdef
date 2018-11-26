import React from 'react';

// components
import Container from '../components/Container';
import P5Wrapper from '../components/P5Wrapper';

// styles
import css from '../css/pages/index.module.css';

// sketches
import sphere from '../sketches/sphere';

// index.js
export default ({ data }) => {
  return (
    <Container>
      <div className={css.hero}>
        <P5Wrapper sketch={sphere} />
      </div>
    </Container>
  );
};
