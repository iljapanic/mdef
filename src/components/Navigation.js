import React from 'react';
import { Link } from 'gatsby';

import styles from '../css/components/Navigation.module.css';

const isPartiallyActive = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent ? { className: styles.active } : null;

const ListLink = props => (
  <li>
    <Link
      to={props.to}
      activeClassName={styles.active}
      getProps={Link === '/' ? undefined : isPartiallyActive}
    >
      {props.children}
    </Link>
  </li>
);

export default ({ children }) => (
  <nav className={styles.nav}>
    <ul>
      <ListLink to="/reflections/">Reflections</ListLink>
      <ListLink to="/feed/">Feed</ListLink>
      <ListLink to="/bookshelf/">Bookshelf</ListLink>
      <ListLink to="/about/">About</ListLink>
    </ul>
  </nav>
);
