import React from "react";

export const ModalEditUserInfoMenu = ({ onClickActiveMenu }) => {
  return (
    <div className="edit-user-data-menu">
      <button
        className="general-edit-btn"
        onClick={() => onClickActiveMenu("general")}
      >
        General
      </button>
      <button
        className="side-edit-btn"
        onClick={() => onClickActiveMenu("side")}
      >
        Side
      </button>
      <button
        className="side-edit-btn"
        onClick={() => onClickActiveMenu("status")}
      >
        Status
      </button>
    </div>
  );
};
