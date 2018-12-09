import React from 'react';

// components
import Container from '../components/Container';
import Blob from '../components/Blob';

// styles
import css from '../css/pages/index.module.css';

// index.js
export default class Index extends React.Component {
  render() {
    return (
      <Container>
        <div className={css.hero}>
          <Blob />
        </div>
      </Container>
    );
  }
}
