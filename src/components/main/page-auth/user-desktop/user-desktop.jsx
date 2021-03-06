import React from "react";
import { PulseLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";

import { SubscribeButton } from "./subscribe-button/subscribe-button";
import { Preload } from "../../../preload/preload";

import { OperationApp } from "../../../../redux/app/appReducer";
import {
  getStateSideBarArrowBtn,
  getStateUserInfoArrowBtn,
  getSubscribedUser,
  getTogglePreloadMessanges,
} from "../../../../redux/app/appSelector";
import { getUserProfile } from "./../../../../redux/user/usersSelector";
import { getSelectRoom } from "../../../../redux/data/dataSelector";

import { PreloadSettings } from "../../../../constant";
import { DropDownArrowBtn } from "../user-section-info/info-arrow-btn/info-arrow-btn";
import { ActionCreatorApp } from "../../../../redux/app/appAction";

export const UserDesktop = ({ children }) => {
  const dispatch = useDispatch();
  const isSideBarArrowBtn = useSelector((state) =>
    getStateSideBarArrowBtn(state)
  );
  const isPreloadMessanges = useSelector((state) =>
    getTogglePreloadMessanges(state)
  );
  const selectRoom = useSelector((state) => getSelectRoom(state));
  const userProfile = useSelector((state) => getUserProfile(state));
  const isSubscribedUser = useSelector((state) => getSubscribedUser(state));
  const isUserInfoArrowBtn = useSelector((state) =>
    getStateUserInfoArrowBtn(state)
  );

  const initCheckUser = React.useCallback(() => {
    dispatch(
      OperationApp.checkSubscribedUser(selectRoom.usersRoom, userProfile.userId)
    );
  }, [dispatch, selectRoom, userProfile]);

  React.useEffect(() => {
    if (!isPreloadMessanges) {
      initCheckUser();
    }
  }, [isPreloadMessanges, initCheckUser]);

  const preload = (
    <PulseLoader
      height={40}
      width={8}
      radius={20}
      margin={20}
      color={"#000"}
      loading
    />
  );

  const onClickUserInfoBtn = () => {
    dispatch(ActionCreatorApp.toglleUserInfoArrowBtn(true));
  };

  const onClickSideBarBtn = () => {
    dispatch(ActionCreatorApp.toglleSideBarArrowBtn(!isSideBarArrowBtn));
  };

  const classPhone = isSideBarArrowBtn
    ? "user-desktop-phone-hide"
    : "user-desktop-phone-show";

  return (
    <section className={`user-desktop ${classPhone}`}>
      {isPreloadMessanges ? (
        <Preload preloadSettings={PreloadSettings.MAIN} preload={preload} />
      ) : (
        <>
          {isSubscribedUser ? (
            <>
              {!isUserInfoArrowBtn && (
                <DropDownArrowBtn
                  onClickStateBtn={onClickUserInfoBtn}
                  directionArrow={`arrow-icon-left`}
                  classBlock={`desktop-user-info__arrow-block`}
                />
              )}

              {!isSideBarArrowBtn && (
                <DropDownArrowBtn
                  onClickStateBtn={onClickSideBarBtn}
                  directionArrow={`arrow-icon-rigth`}
                  classBlock={`desktop-side-bar__arrow-block`}
                />
              )}
              {children}
            </>
          ) : (
            <SubscribeButton
              selectRoom={selectRoom}
              userProfile={userProfile}
            />
          )}
        </>
      )}
    </section>
  );
};
