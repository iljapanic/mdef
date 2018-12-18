import React from 'react';
import { Helmet } from 'react-helmet';

// components
import Dialogues from '../../components/Dialogues';
import Charts from '../../components/Charts';

// images
import favicon from '../../images/favicon.png';

// index.js
export default ({ children }) => {
  return (
    <Dialogues>
      <Charts />
    </Dialogues>
  );
};
