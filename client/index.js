import React from 'react';
import ReactDOM from 'react-dom';

const title = 'React + Express rocks!';
const App=()=>(<div>{title}</div>);

ReactDOM.render(<App />,document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}