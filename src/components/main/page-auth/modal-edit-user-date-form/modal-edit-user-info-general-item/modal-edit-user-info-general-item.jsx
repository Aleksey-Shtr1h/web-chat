import React from "react";

export const ModalEditUserInfoGeneralItem = ({
  newName,
  onChangeNameUser,
  onChangeFile,
  selectFile,
}) => {
  return (
    <>
      <li className="form-main-list__item">
        <label className="form-main-list__text" htmlFor="nameUser-text">
          Change name
        </label>
        <input
          className="form-main-list__input"
          type="text"
          id="nameUser-text"
          placeholder="name"
          value={newName}
          onChange={onChangeNameUser}
        />
      </li>
      <li className="form-main-list__item">
        <label className="form-main-list__text" htmlFor="photo-text">
          Photo change
        </label>
        <input
          className="form-main-list__input"
          type="file"
          id="photo-text"
          placeholder="Photo change"
          accept="image/*"
          onChange={onChangeFile}
        />
      </li>
    </>
  );
};
