import React from "react";

export const ModalEditUserInfoStatusItem = ({
  statusDiscription,
  setStatusDiscription,
}) => {
  return (
    <>
      <li className="form-main-list__item">
        <label
          className="form-messages__text"
          htmlFor="messages-text"
          area-label="messages-text"
        ></label>
        <textarea
          className="form-main-list__input form-messages__input"
          minLength="1"
          maxLength="1000"
          name="messages-text"
          id="messages-text"
          placeholder="Your message"
          value={statusDiscription}
          onChange={(evt) => setStatusDiscription(evt.target.value)}
        />
      </li>
    </>
  );
};
