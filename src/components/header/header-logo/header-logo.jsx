import React from "react";
import { useSelector } from "react-redux";

import logo from "../../../assets/image/logo.svg";

import { getStateUserOnline } from "../../../redux/user/usersSelector";
import { AppRoute } from "../../../constant.js";
import { LogoSection, LogoLink, LogoText, LogoH1 } from "./header-logo.styled";

export const HeaderLogo = () => {
  const isOnline = useSelector((state) => getStateUserOnline(state));
  const AppRouteValue = isOnline ? AppRoute.MAIN : AppRoute.MAIN_ID.WELLCOME;

  return (
    <LogoSection>
      <LogoLink to={AppRouteValue}>
        <LogoText>
          <img src={logo} width="50" height="50" alt="logo" />
        </LogoText>
        <LogoH1>Messenger</LogoH1>
      </LogoLink>
    </LogoSection>
  );
};
