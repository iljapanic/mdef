import React from 'react';

import styles from '../css/components/Footer.module.css';

export default ({ children }) => (
  <footer className={styles.footer}>
    <p>
      Source code available at{' '}
      <a href="https://gitlab.com/MDEF/ilja.panic" target="_blank" rel="noopener noreferrer">
        GitLab
      </a>
    </p>
    <p className="fs-small gray no-underline">
      <a href="mailto:ilja.aleksandar.panic@iaac.net">ilja.aleksandar.panic@iaac.net</a>
    </p>
  </footer>
);
