import React from 'react';
import ReactDOM from 'react-dom';
import {initialFirebase} from './utils/firebase.js';
// import firebase from 'firebase';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';

import {App} from './components/app/App.js';

import {rootReducer} from './redux/rootRaducer.js';

const init = () => {
  initialFirebase();

  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
  );
};

init();
