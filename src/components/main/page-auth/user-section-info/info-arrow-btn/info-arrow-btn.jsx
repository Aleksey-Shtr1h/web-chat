import React from "react";
import { ReactComponent as IconArrowShow } from "../../../../../assets/image/caret-right-info-btn.svg";

export const DropDownArrowBtn = ({
  onClickStateBtn,
  directionArrow,
  classBlock,
  colorArrow = { fill: "#000000" },
}) => {
  return (
    <div className={`${classBlock}`}>
      <button className="host-info__arrow-btn" onClick={onClickStateBtn}>
        <IconArrowShow className={directionArrow} />
      </button>
    </div>
  );
};
