import React from "react";

import {
  FormMainItem,
  FormMainLabel,
  FormMainInput,
} from "../../../../../globalStyled/form.styled";

export const ModalEditUserInfoSideItem = ({
  linkFacebook,
  setLinkFacebook,
  linkInstagram,
  setLinkInstagram,
  linkTwitter,
  setLinkTwitter,
  linkLinkendin,
  setLinkLinkendin,
}) => {
  return (
    <>
      <FormMainItem>
        <FormMainLabel htmlFor="facebook-text">Facebook link</FormMainLabel>
        <FormMainInput
          type="text"
          id="facebook-text"
          placeholder="Facebook"
          value={linkFacebook}
          onChange={(evt) => setLinkFacebook(evt.target.value)}
        />
      </FormMainItem>
      <FormMainItem>
        <FormMainLabel htmlFor="instagram-text">Istagram link</FormMainLabel>
        <FormMainInput
          type="text"
          id="instagram-text"
          placeholder="Istagram"
          value={linkInstagram}
          onChange={(evt) => setLinkInstagram(evt.target.value)}
        />
      </FormMainItem>
      <FormMainItem>
        <FormMainLabel htmlFor="linkendin-text">Linkendin link</FormMainLabel>
        <FormMainInput
          type="text"
          id="linkendin-text"
          placeholder="Linkendin"
          value={linkTwitter}
          onChange={(evt) => setLinkTwitter(evt.target.value)}
        />
      </FormMainItem>
      <FormMainItem>
        <FormMainLabel htmlFor="twitter-text">Twitter link</FormMainLabel>
        <FormMainInput
          type="text"
          id="twitter-text"
          placeholder="Twitter"
          value={linkLinkendin}
          onChange={(evt) => setLinkLinkendin(evt.target.value)}
        />
      </FormMainItem>
    </>
  );
};
