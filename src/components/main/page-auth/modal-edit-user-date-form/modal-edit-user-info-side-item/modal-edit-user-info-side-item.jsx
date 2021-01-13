import React from "react";

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
      <li className="form-main-list__item">
        <label className="form-main-list__text" htmlFor="facebook-text">
          Facebook link
        </label>
        <input
          className="form-main-list__input"
          type="text"
          id="facebook-text"
          placeholder="Facebook"
          value={linkFacebook}
          onChange={(evt) => setLinkFacebook(evt.target.value)}
        />
      </li>
      <li className="form-main-list__item">
        <label className="form-main-list__text" htmlFor="instagram-text">
          Istagram link
        </label>
        <input
          className="form-main-list__input"
          type="text"
          id="instagram-text"
          placeholder="Istagram"
          value={linkInstagram}
          onChange={(evt) => setLinkInstagram(evt.target.value)}
        />
      </li>
      <li className="form-main-list__item">
        <label className="form-main-list__text" htmlFor="linkendin-text">
          Linkendin link
        </label>
        <input
          className="form-main-list__input"
          type="text"
          id="linkendin-text"
          placeholder="Linkendin"
          value={linkTwitter}
          onChange={(evt) => setLinkTwitter(evt.target.value)}
        />
      </li>
      <li className="form-main-list__item">
        <label className="form-main-list__text" htmlFor="twitter-text">
          Twitter link
        </label>
        <input
          className="form-main-list__input"
          type="text"
          id="twitter-text"
          placeholder="Twitter"
          value={linkLinkendin}
          onChange={(evt) => setLinkLinkendin(evt.target.value)}
        />
      </li>
    </>
  );
};
