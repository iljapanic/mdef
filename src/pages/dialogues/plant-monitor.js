import React from 'react';
import { Helmet } from 'react-helmet';

// components
import Dialogues from '../../components/Dialogues';

// index.js
export default ({ children }) => {
  return (
    <Dialogues>
      <Helmet>
        <title>Plant Monitor</title>
      </Helmet>
    </Dialogues>
  );
};
