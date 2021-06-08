import React from 'react';
import { SideBarBoxWrapper } from '../side-bar.styled';

interface Props {
  children: React.ReactNode;
}

export const SideBarBlock: React.FC<Props> = ({ children }: Props) => {
  return <SideBarBoxWrapper>{children}</SideBarBoxWrapper>;
};
