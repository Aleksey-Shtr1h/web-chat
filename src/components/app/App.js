import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Header } from '../header/header.jsx';
import { MainPage } from '../main/main-page.jsx';
import { RegistrationMain } from '../main/registartion/registration-main/registartion-main.jsx';

import { Test } from './Test.jsx';

import { PageType } from '../../constant.js';

import { AppRoute } from '../../constant.js';

export const App = () => {
  const { isOnline } = useSelector((state) => state.USER);

  if (isOnline === null) {
    return (
      <div>LOADING...</div>
    )
  }

  return (
    <Router>
      <Switch>
        <>

          <Route exact path={AppRoute.MAIN}>
            <Header
              pageType={PageType.MAIN}
            >
              <MainPage
                isOnline={isOnline}
              />
            </Header>
          </Route>

          <Route exact path={[AppRoute.MAIN_ID.USER_DESKTOP, AppRoute.MAIN_ID.USER_DESKTOP_ID.FRIENDS, AppRoute.MAIN_ID.USER_DESKTOP_ID.ROOM]}>
            <Header
              pageType={PageType.MAIN}
            >
              <MainPage
                isOnline={isOnline}
              />

              <Test />
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

          {isOnline
            ?
            <Redirect exact from="/" to={AppRoute.MAIN} />
            :
            <Redirect exact from="/" to={AppRoute.MAIN_ID.WELLCOME} />
          }

        </>

      </Switch>
    </Router>
  );
};