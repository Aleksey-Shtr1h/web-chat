import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { USER_UNKNOWN_PHOTO_URL } from "../../../../../constant";
import { ActionCreatorApp } from "../../../../../redux/app/appAction";
import { getStateEditUserDate } from "../../../../../redux/app/appSelector";

import { ReactComponent as IconFacebook } from "../../../../../assets/image/fb-social-network.svg";
import { ReactComponent as IconLinkendin } from "../../../../../assets/image/in-social-network.svg";
import { ReactComponent as IconTwitter } from "../../../../../assets/image/tw-social-network.svg";
import { ReactComponent as IconInstagram } from "../../../../../assets/image/inst-social-network.svg";
import { ReactComponent as IconArrowShow } from "../../../../../assets/image/caret-right-info-btn.svg";

const IconSosialNerwork = {
  facebook: <IconFacebook />,
  instagram: <IconLinkendin />,
  twitter: <IconTwitter />,
  linkendin: <IconInstagram />,
};

export const UserBlockInfo = ({ userProfile }) => {
  const dispatch = useDispatch();
  const isEditUserData = useSelector((state) => getStateEditUserDate(state));

  const {
    photoUrl,
    info: { name, email },
    sosialNetworks = {},
    statusDiscription = "",
  } = userProfile;
  const userPhoto = photoUrl ? photoUrl : USER_UNKNOWN_PHOTO_URL;

  const userSosialNetworks = Object.entries(sosialNetworks);

  return (
    <div className="host-info-container">
      <div className="host-info__img-block">
        <img
          className="host-info__img"
          src={userPhoto}
          alt="host-avatar"
          width="34"
          height="34"
        />
      </div>
      <div className="host-info__data-block">
        <p className="host-info__name-text">{name}</p>
        <p className="host-info__status-text">{statusDiscription}</p>
        <ul className="host-info__social-network-list">
          {userSosialNetworks.map((sosialNetwork, idx) => {
            return (
              <li
                className="host-info__social-network-item"
                key={sosialNetwork[0] + idx}
              >
                <a
                  href={sosialNetwork[1]}
                  className="host-info__social-network-link"
                >
                  {IconSosialNerwork[sosialNetwork[0]]}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="host-info__contacts">
          <div className="host-info__contacts-block">
            <p className="host-info__email-text">email:</p>
            <a
              href={`mailto:${email}?subject=Привет!`}
              className="host-info__email-link"
            >
              {email}
            </a>
          </div>
        </div>

        <div className="host-info__edit-block">
          <button
            className="host-info__edit-btn"
            onClick={() => {
              dispatch(
                ActionCreatorApp.toglleModalEditUserForm(!isEditUserData)
              );
            }}
          >
            edit
          </button>
        </div>
      </div>
      <div className="host-info__arrow-block">
        <button className="host-info__arrow-btn">
          <IconArrowShow />
        </button>
      </div>
    </div>
  );
};
