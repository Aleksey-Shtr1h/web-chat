import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

import { ActionCreatorApp } from '../../../redux/app/appAction';
import { GlobalState } from '../../../redux/typeState';
import { OperationUser } from '../../../redux/user/userReducer';
import { getUserAuthId } from '../../../redux/user/usersSelector';
import { HeaderMenuLink } from './header-user-link.styled';

interface Props {
  isOnline: boolean | null;
  signMenu: any;
}

export const HeaderUserLink: React.FC<Props> = ({
  isOnline,
  signMenu,
}: Props) => {
  const dispatch = useDispatch();
  const userAuthId = useSelector((state: GlobalState) => getUserAuthId(state));
  const match = useRouteMatch();

  const active: number = match.url === signMenu.link ? 1 : 0;

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
