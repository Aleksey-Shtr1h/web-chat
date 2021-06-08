import React from 'react';

interface Props {
  typeChannels: {
    nameText: string;
    blockClass: string;
    textClass: string;
    spanClass: string;
  };
  styleColor: { color: string };
  nameSpan: string;
}

export const SideBarNameBlock: React.FC<Props> = ({
  typeChannels,
  styleColor,
  nameSpan,
}: Props) => {
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
