import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../../../assets/image/logo.svg';

import {AppRoute} from '../../../constant.js';

export const HeaderLogo = () => {
  return (
    <section className="logo">
      <Link className="logo-link" to={AppRoute.HOME}>
        <p className="logo-link__text">
          <img className="logo-link__icon" src={logo} width="50" height="50" alt="logo" />
        </p>
        <h1 className="logo__title">Messenger</h1>
      </Link>
    </section>
  )
};
