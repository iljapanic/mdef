import React from 'react';
import { Link } from 'gatsby';

import styles from '../css/components/Header.module.css';

const ListLink = props => (
  <li>
    <Link to={props.to} activeClassName="active">
      {props.children}
    </Link>
  </li>
);

export default ({ children }) => (
  <header className={styles.header}>
    <Link to="/">
      <span>Ilja Panic - MDEF</span>
    </Link>
    <nav className={styles.nav}>
      <ul>
        <ListLink to="/about/">About</ListLink>
      </ul>
    </nav>
  </header>
);
