import React from 'react';
import ReactDOM from 'react-dom';

const Component = () => (
  <h2>from component</h2>
);

ReactDOM.render(
  <div>
    <h1>react stuff</h1>
    <Component />
  </div>,
  document.getElementById('App')
);
