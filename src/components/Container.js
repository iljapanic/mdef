import React from 'react';
import { Helmet } from 'react-helmet';

// components
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';

// global CSS
import '../css/utils/normalize.css';
import '../css/utils/base.css';
import '../css/utils/helpers.css';
import '../css/utils/page.css';

// component CSS
import css from '../css/components/Container.module.css';

// images
import favicon from '../images/favicon.png';

export default ({ children }) => {
  return (
    <div className={css.container}>
      <Helmet defaultTitle={`MDEF Diary`} titleTemplate={`%s | MDEF Diary`}>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" type="image/png" href={favicon} />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="MDEF Diary" />
      </Helmet>
      <div className={css.sidebar}>
        <div className={css.header}>
          <Header />
        </div>
        <div className={css.navigation}>
          <Navigation />
        </div>
        <div className={css.footer}>
          <Footer />
        </div>
      </div>
      <div className={css.main}>{children}</div>
    </div>
  );
};
