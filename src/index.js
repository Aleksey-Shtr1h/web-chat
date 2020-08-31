import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';

import {WrapperApp} from './App';

import {rootReducer} from './redux/rootRaducer.js';
import {OperationData} from './redux/data/dataReducer.js';

const firebaseConfig = {
    apiKey: "AIzaSyB-Qj5y11gismV4eZbaubJL9B1CDTFI9-s",
    authDomain: "web-chat-1b38f.firebaseapp.com",
    databaseURL: "https://web-chat-1b38f.firebaseio.com",
    projectId: "web-chat-1b38f",
    storageBucket: "web-chat-1b38f.appspot.com",
    messagingSenderId: "340398160492",
    appId: "1:340398160492:web:62abd80b5f0a424c787649"
  };

firebase.initializeApp(firebaseConfig);

const init = () => {

  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
    );

  store.dispatch(OperationData.loadComments());

  ReactDOM.render(
    <Provider store={store}>
      <WrapperApp />
    </Provider>,
    document.querySelector(`#root`)
  );
};

init();
