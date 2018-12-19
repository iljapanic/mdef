import React from 'react';
import { Helmet } from 'react-helmet';

// components
import Dialogues from '../../components/Dialogues';
import Charts from '../../components/Charts';

// index.js
export default ({ children }) => {
  return (
    <Dialogues>
      <Charts />
      <Helmet>
        <title>Plant Monitor</title>
      </Helmet>
    </Dialogues>
  );
};
