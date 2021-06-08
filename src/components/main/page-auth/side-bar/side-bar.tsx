import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DropDownArrowBtn } from '../user-section-info/info-arrow-btn/info-arrow-btn';

import { ActionCreatorApp } from '../../../../redux/app/appAction';
import { getStateSideBarArrowBtn } from '../../../../redux/app/appSelector';

import { GlobalState } from '../../../../redux/typeState';
import { SideBarSection } from './side-bar.styled';

interface Props {
  children: React.ReactNode;
}

export const SideBar: React.FC<Props> = ({ children }: Props) => {
  const isSideBarArrowBtn = useSelector((state: GlobalState) =>
    getStateSideBarArrowBtn(state)
  );
  const dispatch = useDispatch();

  const onClickSideBarBtn = () => {
    dispatch(ActionCreatorApp.toglleSideBarArrowBtn(!isSideBarArrowBtn));
  };

  const classArrow = isSideBarArrowBtn ? 'arrow-icon-left' : 'arrow-icon-right';

  return (
    <SideBarSection isSideBar={isSideBarArrowBtn}>
      {children}
      <DropDownArrowBtn
        onClickStateBtn={onClickSideBarBtn}
        directionArrow={classArrow}
        classBlock={`side-bar-desktop__arrow-block`}
        colorArrow={{ fill: '#ffffff' }}
      />
    </SideBarSection>
  );
};
