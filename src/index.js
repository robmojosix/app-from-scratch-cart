import React from 'react';
import ReactDom from 'react-dom';

const Component = () => (
  <h2>from component</h2>
);

ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <Component />
  </div>,
  document.getElementById('root')
);
