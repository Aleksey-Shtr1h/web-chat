import React from 'react';
import {Link} from 'react-router-dom';

import {AppRoute} from '../../../constant.js';

export const HeaderLogo = () => {
  return (
    <section className="logo">
      <Link className="logo-link" to={AppRoute.HOME}>
        <h1 className="logo__title">Messenger</h1>
      </Link>
    </section>
  )
};
