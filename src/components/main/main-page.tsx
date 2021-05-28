import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { PageNotAuth } from './page-not-auth/page-not-auth';
import { PageAuth } from './page-auth/page-auth';

import { AppRoute } from '../../constant';

interface Props {
  isOnline: boolean | null;
}

export const MainPage: React.FC<Props> = ({ isOnline }: Props) => {
  return (
    <Switch>
      {isOnline ? (
        <>
          <Redirect exact to={AppRoute.MAIN_ID.USER_DESKTOP} />
          <PageAuth />
        </>
      ) : (
        <>
          <Route exact path={AppRoute.MAIN_ID.WELLCOME}>
            <PageNotAuth />
          </Route>

          <Redirect exact to={AppRoute.MAIN_ID.WELLCOME} />
        </>
      )}
    </Switch>
  );
};