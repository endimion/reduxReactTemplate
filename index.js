import React from 'react';
import ReactDOM from 'react-dom';
import Container from './src/components/container.jsx';
import {Provider} from 'react-redux'
  import Store from './store'



ReactDOM.render(
//linking with redux
  <Provider store={Store}><Container /></Provider>,
  document.getElementById('root')
);

//PS: You need to create and export this "container component" in src to work ok?
