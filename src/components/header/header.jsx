import React from "react";

import { HeaderLogo } from "./header-logo/header-logo.jsx";
import { HeaderUserProfile } from "./header-user-profile/header-user-profile.jsx";

import { HeaderSection, HeaderContainer } from "./header.styled.js";

export const Header = ({ pageType, children }) => {
  return (
    <div className={`page-main ${pageType}`}>
      <HeaderSection>
        <HeaderContainer>
          <HeaderLogo />
          <HeaderUserProfile />
        </HeaderContainer>
      </HeaderSection>
      {children}
    </div>
  );
};
