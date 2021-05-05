import React from "react";

import {
  FormMainItem,
  FormMainLabel,
  FormMainInput,
} from "../../../../../globalStyled/form.styled";

export const ModalEditUserInfoGeneralItem = ({
  newName,
  onChangeNameUser,
  onChangeFile,
}) => {
  return (
    <>
      <FormMainItem>
        <FormMainLabel htmlFor="nameUser-text">Change name</FormMainLabel>
        <FormMainInput
          type="text"
          id="nameUser-text"
          placeholder="name"
          value={newName}
          onChange={onChangeNameUser}
        />
      </FormMainItem>
      <FormMainItem>
        <FormMainLabel htmlFor="photo-text">Photo change</FormMainLabel>
        <FormMainInput
          type="file"
          id="photo-text"
          placeholder="Photo change"
          accept="image/*"
          onChange={onChangeFile}
        />
      </FormMainItem>
    </>
  );
};
