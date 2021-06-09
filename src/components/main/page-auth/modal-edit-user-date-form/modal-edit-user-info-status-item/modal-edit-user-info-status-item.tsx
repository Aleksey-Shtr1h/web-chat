import React from 'react';

import {
  FormMainItem,
  FormMainLabel,
  FormMainTextArea,
} from '../../../../../globalStyled/form.styled';

interface Props {
  statusDiscription: string;
  setStatusDiscription: (value: string | ((prevVar: string) => string)) => void;
}

export const ModalEditUserInfoStatusItem: React.FC<Props> = ({
  statusDiscription,
  setStatusDiscription,
}: Props) => {
  return (
    <>
      <FormMainItem>
        <FormMainLabel
          htmlFor="messages-text"
          area-label="messages-text"
        ></FormMainLabel>
        <FormMainTextArea
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
