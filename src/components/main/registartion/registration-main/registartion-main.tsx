import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { SignIn } from '../sign-in/sign-in';
import { SignUp } from '../sign-up/sign-up';

import { AppRoute } from '../../../../constant';

interface Props {
  isOnline: boolean | null;
}

export const RegistrationMain: React.FC<Props> = ({ isOnline }: Props) => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  if (isOnline) {
    history.push(AppRoute.MAIN);
  }

  return <>{id === `sign-in` ? <SignIn /> : <SignUp />}</>;
};
