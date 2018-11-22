import React from 'react';
import { Link } from 'gatsby';

import styles from '../css/components/Header.module.css';

export default ({ children }) => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <Link to="/">
        <span className={styles.subtitle}>MDEF Diary</span>
        <span className={styles.name}> by Ilja Panic</span>
      </Link>
    </div>
  </header>
);
