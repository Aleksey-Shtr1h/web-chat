import React from 'react';
import {useSelector} from 'react-redux';

import {PageNotAuth} from '../page-not-auth/page-not-auth.jsx';
import {PageAuth} from '../page-auth/page-auth.jsx';

export const MainPage = () => {
  const {isOnline} = useSelector((state) => state.USER);

  return (
    <main className="main">
      {isOnline ?
        <PageAuth /> :
        <PageNotAuth />
      }
    </main>
  )
};