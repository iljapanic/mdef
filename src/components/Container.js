import React from 'react';

// components
import Header from './Header';
import Footer from './Footer';

// global CSS
import '../css/utils/normalize.css';
import '../css/utils/base.css';
import '../css/utils/helpers.css';

// component CSS
import styles from '../css/components/Container.module.css';

export default ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
