import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

// styles
import '../css/utils/normalize.css';
import '../css/utils/base.css';
import '../css/utils/helpers.css';

import css from '../css/pages/dialogues.module.css';

// images
import favicon from '../images/favicon.png';

// index.js
export default ({ children }) => {
  return (
    <div className={css.container}>
      <Head />
      <nav className={css.nav}>
        <div className={css.title}>
          <h1>Design Dialogues</h1>
        </div>
        <div className={css.sections}>exploration | reflection | instrumetalisations</div>
        <div>
          <Link to="/plant-monitor">Plant Monitor</Link>
        </div>
      </nav>
    </div>
  );
};

const Head = props => (
  <Helmet defaultTitle={`MDEF Diary`} titleTemplate={`%s | MDEF Diary`}>
    <meta charSet="utf-8" />
    <title>Design Dialogues</title>
    <link rel="shortcut icon" type="image/png" href={favicon} />
    <meta name="og:type" content="website" />
    <meta name="og:site_name" content="MDEF Diary" />
  </Helmet>
);
