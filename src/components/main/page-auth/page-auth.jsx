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

// import { BeatLoader, FadeLoader, PulseLoader } from "react-spinners";
import { ModalEditUserDateForm } from "./modal-edit-user-date-form/modal-edit-user-date-form";
import { WaitingUserProfile } from "./../../waiting-from-sever/waiting-user-profile/waiting-user-profile";

export const PageAuth = () => {
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

                <section className="user-desktop"></section>
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
