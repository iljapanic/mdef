import React from 'react';
import { Helmet } from 'react-helmet';

import Dialogues from '../../components/Dialogues';

export default ({ children }) => {
  return (
    <Dialogues>
      <Helmet>
        <title>Reflection</title>
      </Helmet>
      <h1>Reflection</h1>
    </Dialogues>
  );
};
