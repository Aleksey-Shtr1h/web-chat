import React from 'react';
import ReactDOM from 'react-dom';
import {initialFirebase} from './utils/firebase.js';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import './index.scss';

import {App} from './components/app/App.js';

import {rootReducer} from './redux/rootRaducer.js';
import {OperationUser} from './redux/user/userReducer.js';

const init = () => {
  initialFirebase();

  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

  store.dispatch(OperationUser.userAuthCheck());

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
  );
};

init();
