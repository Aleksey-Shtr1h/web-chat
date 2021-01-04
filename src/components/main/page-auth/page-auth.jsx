import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { SideBar } from "./side-bar/side-bar";
import { SideBarBlock } from "./side-bar/side-bar-block/side-bar-block";
import { SideBarSearchBlock } from "./side-bar/side-bar-block/side-bar-search-block/side-bar-search-block";
import { SideBarChannelBlock } from "./side-bar/side-bar-block/side-bar-channel-block/side-bar-channel-block";
import { SideBarFriendsBlock } from "./side-bar/side-bar-block/side-bar-friends-block/side-bar-friends-block";
import { NewChannelForm } from "./new-channel-form/new-channel-form";
import { UserDesktop } from "./user-desktop/user-desktop";
import { HeaderDesktop } from "./user-desktop/header-desktop/header-desktop";
import { ChatDesktop } from "./user-desktop/chat-desktop/chat-desktop";

import { AppRoute } from "../../../constant.js";

// import { BeatLoader, FadeLoader, PulseLoader } from "react-spinners";

export const PageAuth = () => {
  return (
    <main className="main-content">
      <div className="container-content">
        <Switch>
          <>
            <Redirect exact to={AppRoute.MAIN_ID.USER_DESKTOP_ID.START_TABLE} />
            <Route exact path={[AppRoute.MAIN_ID.USER_DESKTOP_ID.START_TABLE]}>
              <SideBar>
                <SideBarBlock>
                  <SideBarSearchBlock />
                </SideBarBlock>

                <SideBarBlock>
                  <SideBarChannelBlock />
                </SideBarBlock>
              </SideBar>

              {/* <UserDesktop>
                <HeaderDesktop />
              </UserDesktop> */}

              {/* <section className="user-desktop">
                <BeatLoader loading />
                <FadeLoader loading />
                <PulseLoader loading /> 
              </section>*/}

              <section className="user-info"></section>
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

              {/* <section className="user-info"></section> */}
            </Route>
          </>
        </Switch>

        <NewChannelForm />
      </div>
    </main>
  );
};
