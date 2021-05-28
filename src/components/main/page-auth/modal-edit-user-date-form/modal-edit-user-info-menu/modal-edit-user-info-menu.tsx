import React from 'react';

interface Props {
  onClickActiveMenu: (info: string) => void;
}

export const ModalEditUserInfoMenu: React.FC<Props> = ({
  onClickActiveMenu,
}: Props) => {
  return (
    <div className="edit-user-data-menu">
      <button
        className="general-edit-btn"
        onClick={() => onClickActiveMenu('general')}
      >
        General
      </button>
      <button
        className="side-edit-btn"
        onClick={() => onClickActiveMenu('side')}
      >
        Side
      </button>
      <button
        className="side-edit-btn"
        onClick={() => onClickActiveMenu('status')}
      >
        Status
      </button>
    </div>
  );
};
