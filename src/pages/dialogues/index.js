import React from 'react';

import Dialogues from '../../components/Dialogues';
import IconMycelio from '../../icons/IconMycelio';

import css from '../../css/pages/dialogues.module.css';

// index.js
export default ({ children }) => {
  return (
    <Dialogues>
      <div className={css.slide1}>
        <div className={css.connections}>
          <IconMycelio css={css} />
        </div>
        <div className={css.inner}>
          <h2>
            Can we tune into Earth’s neural networks
            <br />
            to restore the connection between
            <br />
            nature, technology and each other?
          </h2>
        </div>
      </div>
    </Dialogues>
  );
};
