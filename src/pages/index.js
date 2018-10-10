import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

// components
import Container from '../components/Container';

// styles
import styles from '../css/pages/index.module.css';

// sketches
import sphere from '../sketches/sphere';

export default ({ data }) => {
  return (
    <Container>
      <div className={styles.hero}>
        <P5Wrapper sketch={sphere} />
      </div>
    </Container>
  );
};
