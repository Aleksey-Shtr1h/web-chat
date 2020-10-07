import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Header} from '../header/header-main/header.jsx';
import {MainPage} from '../main/main-page/main-page.jsx';
import {RegistrationMain} from '../main/registartion/registration-main/registartion-main.jsx';

import {PageType} from '../../constant.js';
import {OperationData} from '../../redux/data/dataReducer.js';

import {AppRoute} from '../../constant.js';

const useComments = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(OperationData.loadComments());
  }, []);
};

export const App = ()  => {
  useComments();
  const {isOnline} = useSelector((state) => state.USER);

  if (isOnline === null) {
    return (
      <div>LOADING...</div>
    )
  }

  return (
      <Router>
        <Switch>
          <Route exact path={AppRoute.HOME}>
            <Header
              pageType={PageType.HOME}
            >
              <MainPage />
            </Header>
          </Route>

          <Route exact path={AppRoute.LOGIN}>
            <Header
              pageType={PageType.LOGIN}
            >
              <RegistrationMain 
                isOnline={isOnline}
              />
            </Header>
          </Route> 
   
        </Switch>
      </Router>
  );
};