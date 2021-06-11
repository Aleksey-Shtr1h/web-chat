import React from 'react';
import { ReactComponent as IconArrowShow } from '../../../../../assets/image/caret-right-info-btn.svg';

interface Props {
  onClickStateBtn: () => void;
  directionArrow: string;
  classBlock: string;
}

export const DropDownArrowBtn: React.FC<Props> = ({
  onClickStateBtn,
  directionArrow,
  classBlock,
}: Props) => {
  return (
    <div className={`${classBlock}`}>
      <button className="host-info__arrow-btn" onClick={onClickStateBtn}>
        <IconArrowShow className={directionArrow} />
      </button>
    </div>
  );
};
