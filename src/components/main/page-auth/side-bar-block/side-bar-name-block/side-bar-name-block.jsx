import React from "react";

export const SideBarNameBlock = ({
  typeChannels,
  styleColor = {},
  nameSpan,
}) => {
  const { nameText, blockClass, textClass, spanClass } = typeChannels;

  return (
    <div className={blockClass}>
      <p className={textClass}>{nameText}</p>
      <span className={spanClass} style={styleColor}>
        {nameSpan}
      </span>
    </div>
  );
};
