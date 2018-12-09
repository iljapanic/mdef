import React from 'react';

import css from '../css/components/Blob.module.css';

export default class Blob extends React.Component {
  render() {
    return (
      <div className={css.container}>
        <svg
          id="organic-blob"
          width="600"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
          filter="url(#goo)"
        >
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
          <circle id={css.Circle1} />
          <circle id={css.Circle2} />
          <circle id={css.Circle3} />
          <circle id={css.Circle4} />
        </svg>
      </div>
    );
  }
}
