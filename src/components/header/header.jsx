import React from "react";

import { HeaderLogo } from "./header-logo/header-logo.jsx";
import { HeaderUserProfile } from "./header-user-profile/header-user-profile.jsx";

export const Header = ({ pageType, children }) => {
  return (
    <div className={`page-main ${pageType}`}>
      <header className="header">
        <div className="container-header">
          <HeaderLogo />
          <HeaderUserProfile />
        </div>
      </header>
      {children}
    </div>
  );
};
