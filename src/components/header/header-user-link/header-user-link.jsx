import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {useRouteMatch} from 'react-router-dom';

import {ActionCreatorApp} from '../../../redux/app/appAction.js';
import {OperationUser} from '../../../redux/user/userReducer.js';

export const HeaderUserLink = ({dispatch, isOnline, signMenu}) => {
  const {userId} = useSelector((state) => state.USER);
  let match = useRouteMatch();

  return (
    <React.Fragment>
      <Link 
        className={`sign-link ${match.url === signMenu.link ? `sign-link--active` : ``}`}
        to={{pathname: `${signMenu.link}`}}
        onClick={() => {
          if(isOnline) {
            dispatch(OperationUser.userExit(userId));
          }
        }}
      >
        {signMenu.name}
      </Link>
    </React.Fragment>
  )
};