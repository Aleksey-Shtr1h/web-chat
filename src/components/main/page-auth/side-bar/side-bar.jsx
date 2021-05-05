import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { DropDownArrowBtn } from "./../user-section-info/info-arrow-btn/info-arrow-btn";

import { ActionCreatorApp } from "../../../../redux/app/appAction";
import { getStateSideBarArrowBtn } from "../../../../redux/app/appSelector";
import { SideBarSection } from "./../../../../assets/css/blocks/main/auth-page/side-bar/side-bar.styled";

export const SideBar = ({ children }) => {
  const isSideBarArrowBtn = useSelector((state) =>
    getStateSideBarArrowBtn(state)
  );
  const dispatch = useDispatch();

  const onClickSideBarBtn = () => {
    dispatch(ActionCreatorApp.toglleSideBarArrowBtn(!isSideBarArrowBtn));
  };

  const classArrow = isSideBarArrowBtn ? "arrow-icon-left" : "arrow-icon-right";

  return (
    <SideBarSection showSideBar={isSideBarArrowBtn}>
      {children}
      <DropDownArrowBtn
        onClickStateBtn={onClickSideBarBtn}
        directionArrow={classArrow}
        classBlock={`side-bar-desktop__arrow-block`}
        colorArrow={{ fill: "#ffffff" }}
      />
    </SideBarSection>
  );
};
