import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import './App.css';

import {Header} from '../header/header.jsx';
import {MainPage} from '../main-page/main-page.jsx';

import {OperationData} from '../../redux/data/dataReducer.js';

const useComments = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(OperationData.loadComments());
  }, []);
};

export const App = ()  => {
  useComments();

  return (
    <div className="App">
      <Header> 
        <MainPage />
      </Header>

    </div>
  );
};