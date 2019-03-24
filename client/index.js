import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import App from './container/App';
import rootReducer from './reduces/rootReducer';


const store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__()));
const root = <Provider store={store}><App /></Provider>;
ReactDOM.render(root, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}