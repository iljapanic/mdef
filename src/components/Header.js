import React from 'react';
import { Link } from 'gatsby';

import styles from '../css/components/Header.module.css';

const ListLink = props => (
  <li>
    <Link to={props.to} activeClassName={styles.active}>
      {props.children}
    </Link>
  </li>
);

export default ({ children }) => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <Link to="/">
        <span className={styles.subtitle}>MDEF Diary</span>
        <span className={styles.name}> by Ilja Panic</span>
      </Link>
    </div>
    <nav className={styles.nav}>
      <ul>
        <ListLink to="/reflections/">Reflections</ListLink>
        <ListLink to="/about/">About</ListLink>
      </ul>
    </nav>
  </header>
);
