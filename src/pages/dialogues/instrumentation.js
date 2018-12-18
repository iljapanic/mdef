import React from 'react';
import { Helmet } from 'react-helmet';

import Dialogues from '../../components/Dialogues';

export default ({ children }) => {
  return (
    <Dialogues>
      <Helmet>
        <title>Instrumentation</title>
      </Helmet>
      <h1>Instrumentation</h1>
    </Dialogues>
  );
};
