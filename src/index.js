import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//import axios from 'axios';

    ReactDOM.render(
      <App initialContests={window.initialData.contests} />,
      document.getElementById('root')
    );

