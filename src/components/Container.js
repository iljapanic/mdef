import React from 'react';
import { Helmet } from 'react-helmet';

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
      <Helmet defaultTitle={`MDEF Diary`} titleTemplate={`%s | MDEF Diary`}>
        <meta charSet="utf-8" />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="MDEF Diary" />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
