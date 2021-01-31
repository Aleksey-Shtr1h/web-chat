import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { SideBar } from "./side-bar/side-bar";
import { SideBarBlock } from "./side-bar/side-bar-block/side-bar-block";
import { SideBarSearchBlock } from "./side-bar/side-bar-block/side-bar-search-block/side-bar-search-block";
import { SideBarChannelBlock } from "./side-bar/side-bar-block/side-bar-channel-block/side-bar-channel-block";
import { SideBarFriendsBlock } from "./side-bar/side-bar-block/side-bar-friends-block/side-bar-friends-block";
import { ModalNewChannelForm } from "./modal-new-channel-form/new-channel-form";
import { UserDesktop } from "./user-desktop/user-desktop";
import { HeaderDesktop } from "./user-desktop/header-desktop/header-desktop";
import { ChatDesktop } from "./user-desktop/chat-desktop/chat-desktop";
import { UserSectionInfo } from "./user-section-info/user-section-info";

import { AppRoute } from "../../../constant.js";

import { ModalEditUserDateForm } from "./modal-edit-user-date-form/modal-edit-user-date-form";
import { WaitingUserProfile } from "./../../waiting-from-sever/waiting-user-profile/waiting-user-profile";
// import { useWindowSize } from "./../../../utils/use-hooks/hooks";
import { DropDownArrowBtn } from "./user-section-info/info-arrow-btn/info-arrow-btn";
import { ActionCreatorApp } from "../../../redux/app/appAction";
import { useDispatch, useSelector } from "react-redux";
import {
  getStateSideBarArrowBtn,
  getStateUserInfoArrowBtn,
} from "../../../redux/app/appSelector";

export const PageAuth = () => {
  const dispatch = useDispatch();
  const isSideBarArrowBtn = useSelector((state) =>
    getStateSideBarArrowBtn(state)
  );
  const isUserInfoArrowBtn = useSelector((state) =>
    getStateUserInfoArrowBtn(state)
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
    <>
      <main className="main-content">
        <div className="container-content">
          <Switch>
            <>
              <Redirect
                exact
                to={AppRoute.MAIN_ID.USER_DESKTOP_ID.START_TABLE}
              />
              <Route
                exact
                path={[AppRoute.MAIN_ID.USER_DESKTOP_ID.START_TABLE]}
              >
                <SideBar>
                  <SideBarBlock>
                    <SideBarSearchBlock />
                  </SideBarBlock>
                  <SideBarBlock>
                    <SideBarChannelBlock />
                  </SideBarBlock>
                </SideBar>

                <section className={`user-desktop ${classPhone}`}>
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
                </section>
              </Route>

              <Route
                exact
                path={[
                  AppRoute.MAIN_ID.USER_DESKTOP_ID.ROOM,
                  AppRoute.MAIN_ID.USER_DESKTOP_ID.FRIENDS,
                ]}
              >
                <SideBar>
                  <SideBarBlock>
                    <SideBarSearchBlock />
                  </SideBarBlock>

                  <SideBarBlock>
                    <SideBarChannelBlock />
                  </SideBarBlock>

                  <SideBarBlock>
                    <SideBarFriendsBlock />
                  </SideBarBlock>
                </SideBar>

                <UserDesktop>
                  <HeaderDesktop />
                  <ChatDesktop />
                </UserDesktop>
              </Route>
            </>
          </Switch>

          <UserSectionInfo />
        </div>
      </main>

      <>
        <ModalNewChannelForm />
        <WaitingUserProfile>
          <ModalEditUserDateForm />
        </WaitingUserProfile>
      </>
    </>
  );
};
