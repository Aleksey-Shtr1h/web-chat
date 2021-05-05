import React from "react";

import {
  FormMainItem,
  FormMainLabel,
  FormMainTextArea,
} from "../../../../../globalStyled/form.styled";

export const ModalEditUserInfoStatusItem = ({
  statusDiscription,
  setStatusDiscription,
}) => {
  return (
    <>
      <FormMainItem>
        <FormMainLabel
          htmlFor="messages-text"
          area-label="messages-text"
        ></FormMainLabel>
        <FormMainTextArea
          // className="form-main-list__input form-messages__input"
          minLength="1"
          maxLength="1000"
          name="messages-text"
          id="messages-text"
          placeholder="Your message"
          value={statusDiscription}
          onChange={(evt) => setStatusDiscription(evt.target.value)}
        />
      </FormMainItem>
    </>
  );
};
