import React from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

import { ActionCreatorApp } from '../../../redux/app/appAction';
import { OperationUser } from '../../../redux/user/userReducer';
import { getUserAuthId } from '../../../redux/user/usersSelector';
import { HeaderMenuLink } from './header-user-link.styled';

export const HeaderUserLink = ({ dispatch, isOnline, signMenu }) => {
  const userAuthId = useSelector((state) => getUserAuthId(state));
  let match = useRouteMatch();

  const active = match.url === signMenu.link ? 1 : 0;

  return (
    <>
      <HeaderMenuLink
        active={active}
        to={{ pathname: `${signMenu.link}` }}
        onClick={() => {
          if (isOnline) {
            dispatch(OperationUser.userExit(userAuthId));
          }
          dispatch(ActionCreatorApp.changeBurgerBtn(false));
        }}
      >
        {signMenu.name}
      </HeaderMenuLink>
    </>
  );
};
