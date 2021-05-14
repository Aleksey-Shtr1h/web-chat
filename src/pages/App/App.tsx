import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { Preload } from '../../components/preload/preload';
import { Header } from '../../components/header/header';
import { MainPage } from '../../components/main/main-page';
import { RegistrationMain } from '../../components/main/registartion/registration-main/registartion-main';

import { getStateUserOnline } from '../../redux/user/usersSelector';

import { PageType, PreloadSettings } from '../../constant';

import { AppRoute } from '../../constant';
import { PulseLoader } from 'react-spinners';
import { GlobalState } from '../../redux/typeState';

interface PreloadType {
  margin: number;
  color: string;
}

export const App: React.FC = () => {
  const isOnline = useSelector((state: GlobalState) =>
    getStateUserOnline(state)
  );

  const PreloadType: PreloadType = {
    margin: 20,
    color: '#000',
  };

  const preload = (
    <PulseLoader
      // height={PreloadType.height}
      // width={PreloadType.width}
      // radius={PreloadType.radius}
      margin={PreloadType.margin}
      color={PreloadType.color}
      loading
    />
  );

  if (isOnline === null) {
    return <Preload preloadSettings={PreloadSettings.MAIN} preload={preload} />;
  }

  return (
    <Router>
      <Switch>
        <>
          <Route exact path={AppRoute.MAIN}>
            <Header pageType={PageType.MAIN}>
              <MainPage isOnline={isOnline} />
            </Header>
          </Route>

          <Route
            exact
            path={[
              AppRoute.MAIN_ID.USER_DESKTOP,
              AppRoute.MAIN_ID.USER_DESKTOP_ID.FRIENDS,
              AppRoute.MAIN_ID.USER_DESKTOP_ID.ROOM,
            ]}
          >
            <Header pageType={PageType.MAIN}>
              <MainPage isOnline={isOnline} />
            </Header>
          </Route>

          <Route exact path={AppRoute.LOGIN}>
            <Header pageType={PageType.LOGIN}>
              <RegistrationMain isOnline={isOnline} />
            </Header>
          </Route>

          {isOnline ? (
            <Redirect exact from="/" to={AppRoute.MAIN} />
          ) : (
            <Redirect exact from="/" to={AppRoute.MAIN_ID.WELLCOME} />
          )}
        </>
      </Switch>
    </Router>
  );
};
