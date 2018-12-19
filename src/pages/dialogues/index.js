import React from 'react';

import Dialogues from '../../components/Dialogues';
import IconMycelio from '../../icons/IconMycelio';
import IconKit from '../../icons/IconKit';

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
            What if we used a network that developed over
            <br />
            aeons to restore the connection between
            <br />
            nature, technology and each other?
          </h2>
        </div>
      </div>
      <div className={css.slide2}>
        <div className={css.inner}>
          <blockquote className={css.quote}>
            “I see the mycelium as the Earth’s natural Internet, a consciousness with which we might
            be able to communicate. Through cross-species interfacing, we may one day exchange
            information with these sentient cellular networks. Because these externalized
            neurological nets sense any impression upon them, from footsteps to falling tree
            branches, they could relay enormous amounts of data regarding the movements of all
            organisms through the landscape.”
          </blockquote>
          <span className={css.author}>— Paul Stamets, Mycelium Running (2005)</span>
        </div>
      </div>
      <div className={css.slide3}>
        <IconKit />
      </div>
    </Dialogues>
  );
};
