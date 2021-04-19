import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Preload } from "./../../components/preload/preload";
import { Header } from "../../components/header/header.jsx";
import { MainPage } from "../../components/main/main-page.jsx";
import { RegistrationMain } from "../../components/main/registartion/registration-main/registartion-main.jsx";

import { getStateUserOnline } from "../../redux/user/usersSelector";

import { PageType, PreloadSettings } from "../../constant.js";

import { AppRoute } from "../../constant.js";

import { PulseLoader } from "react-spinners";

export const App = () => {
  const isOnline = useSelector((state) => getStateUserOnline(state));

  const preload = (
    <PulseLoader
      height={40}
      width={8}
      radius={20}
      margin={20}
      color={"#000"}
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

              {/* <Testing /> */}
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
