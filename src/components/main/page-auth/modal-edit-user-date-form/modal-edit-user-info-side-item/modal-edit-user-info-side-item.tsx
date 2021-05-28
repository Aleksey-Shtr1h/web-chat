import React from 'react';

import {
  FormMainItem,
  FormMainLabel,
  FormMainInput,
} from '../../../../../globalStyled/form.styled';

interface Props {
  linkFacebook: string;
  setLinkFacebook: any;
  linkInstagram: string;
  setLinkInstagram: any;
  linkTwitter: string;
  setLinkTwitter: any;
  linkLinkendin: string;
  setLinkLinkendin: any;
}

export const ModalEditUserInfoSideItem: React.FC<Props> = ({
  linkFacebook,
  setLinkFacebook,
  linkInstagram,
  setLinkInstagram,
  linkTwitter,
  setLinkTwitter,
  linkLinkendin,
  setLinkLinkendin,
}: Props) => {
  return (
    <>
      <FormMainItem>
        <FormMainLabel htmlFor="facebook-text">Facebook link</FormMainLabel>
        <FormMainInput
          type="text"
          id="facebook-text"
          placeholder="Facebook"
          value={linkFacebook}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            setLinkFacebook(evt.target.value)
          }
        />
      </FormMainItem>
      <FormMainItem>
        <FormMainLabel htmlFor="instagram-text">Istagram link</FormMainLabel>
        <FormMainInput
          type="text"
          id="instagram-text"
          placeholder="Istagram"
          value={linkInstagram}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            setLinkInstagram(evt.target.value)
          }
        />
      </FormMainItem>
      <FormMainItem>
        <FormMainLabel htmlFor="linkendin-text">Linkendin link</FormMainLabel>
        <FormMainInput
          type="text"
          id="linkendin-text"
          placeholder="Linkendin"
          value={linkTwitter}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            setLinkTwitter(evt.target.value)
          }
        />
      </FormMainItem>
      <FormMainItem>
        <FormMainLabel htmlFor="twitter-text">Twitter link</FormMainLabel>
        <FormMainInput
          type="text"
          id="twitter-text"
          placeholder="Twitter"
          value={linkLinkendin}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            setLinkLinkendin(evt.target.value)
          }
        />
      </FormMainItem>
    </>
  );
};
