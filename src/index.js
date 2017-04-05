import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
//import data from './testData';
import App from './components/App';

//console.log(data);

ReactDOM.render(
  <App initialContests={[]} />,
  document.getElementById('root')
);

// to test the componentWillUnmount lifecycle method
//setTimeout(() => {
  //ReactDOM.render(
    //<h2 className='text-center'>New Component!</h2>,
    //document.getElementById('root')
  //);
//}, 3000);

