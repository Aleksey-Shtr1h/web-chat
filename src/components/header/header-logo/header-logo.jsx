import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../../../assets/image/logo.svg";

import { getStateUserOnline } from "../../../redux/user/usersSelector";
import { AppRoute } from "../../../constant.js";

export const HeaderLogo = () => {
  const isOnline = useSelector((state) => getStateUserOnline(state));
  const AppRouteValue = isOnline ? AppRoute.MAIN : AppRoute.MAIN_ID.WELLCOME;

  return (
    <section className="logo">
      <Link className="logo-link" to={AppRouteValue}>
        <p className="logo-link__text">
          <img
            className="logo-link__icon"
            src={logo}
            width="50"
            height="50"
            alt="logo"
          />
        </p>
        <h1 className="logo__title">Messenger</h1>
      </Link>
    </section>
  );
};
