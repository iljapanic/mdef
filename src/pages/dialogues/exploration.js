import React from 'react';
import { Helmet } from 'react-helmet';

import Dialogues from '../../components/Dialogues';

export default ({ children }) => {
  return (
    <Dialogues>
      <Helmet>
        <title>Exploration</title>
      </Helmet>
      <h1>Exploration</h1>
    </Dialogues>
  );
};
