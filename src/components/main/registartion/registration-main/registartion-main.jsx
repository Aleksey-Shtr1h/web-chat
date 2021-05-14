import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { SignIn } from '../sign-in/sign-in';
import { SignUp } from '../sign-up/sign-up';

import { AppRoute } from '../../../../constant';

export const RegistrationMain = ({ isOnline }) => {
  const history = useHistory();
  let { id } = useParams();

  if (isOnline) {
    history.push(AppRoute.MAIN);
  }

  return <>{id === `sign-in` ? <SignIn /> : <SignUp />}</>;
};
