import React from "react";
// import { useDispatch } from "react-redux";
import { ReactComponent as IconArrowShow } from "../../../../../assets/image/caret-right-info-btn.svg";
// import { ActionCreatorApp } from "../../../../../redux/app/appAction";

export const DropDownArrowBtn = ({
  onClickStateBtn,
  directionArrow,
  positionLeft,
}) => {
  return (
    <div className="host-info__arrow-block" style={positionLeft}>
      <button className="host-info__arrow-btn" onClick={onClickStateBtn}>
        <IconArrowShow className={directionArrow} />
      </button>
    </div>
  );
};
