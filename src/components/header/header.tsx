import React from 'react';

import { HeaderLogo } from './header-logo/header-logo';
import { HeaderUserProfile } from './header-user-profile/header-user-profile';

import { HeaderSection, HeaderContainer } from './header.styled';

interface Props {
  pageType: string;
  children: React.ReactNode;
}

export const Header: React.FC<Props> = (props: Props) => {
  const { pageType, children } = props;
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
