import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

// styles
import '../css/utils/normalize.css';
import '../css/utils/base.css';
import '../css/utils/helpers.css';

import css from '../css/components/Dialogues.module.css';

import IconPlant from '../icons/IconPlant';

// images
import favicon from '../images/favicon.png';

// index.js
export default ({ children }) => {
  return (
    <div className={css.container}>
      <Helmet defaultTitle={`Design Dialogues`} titleTemplate={`%s | Design Dialogues`}>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" type="image/png" href={favicon} />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="MDEF Diary" />
      </Helmet>
      <header className={css.header}>
        <div className={css.title}>
          <Link to="/dialogues">Design Dialogues</Link>
        </div>
        <nav className={css.nav}>
          <Link to="/dialogues/exploration" activeClassName={css.active}>
            Exploration
          </Link>
          <Link to="/dialogues/reflection" activeClassName={css.active}>
            Reflection
          </Link>
          <Link to="/dialogues/instrumentation" activeClassName={css.active}>
            Instrumentation
          </Link>
        </nav>
        <div className={css.plants}>
          <Link to="/dialogues/plant-monitor">
            <IconPlant />
          </Link>
        </div>
      </header>
      <div className={css.main}>{children}</div>
    </div>
  );
};
