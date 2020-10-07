import React from 'react';
import {useHistory, useParams} from 'react-router-dom';

import {SignIn} from '../sign-in/sign-in.jsx';
import {SignUp} from '../sign-up/sign-up.jsx';

export const RegistrationMain = ({isOnline}) => {
  const history = useHistory();
  let {id} = useParams();

  if (isOnline) {
    history.push(`/`);
  }
  
  return (
    <React.Fragment>
      {id === `sign-in` ? 
        <SignIn /> :
        <SignUp />
      }
    </React.Fragment>
  )
};