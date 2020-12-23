import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { SideBar } from "./side-bar/side-bar.jsx";
import { SideBarBlock } from "./side-bar-block/side-bar-block.jsx";
import { SideBarFriendsBlock } from "./side-bar-block/side-bar-friends-block/side-bar-friends-block.jsx";
import { SideBarChannelBlock } from "./side-bar-block/side-bar-channel-block/side-bar-channel-block.jsx";
import { NewChannelForm } from "./new-channel-form/new-channel-form.jsx";

import { AppRoute } from "../../../constant.js";

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
                  <SideBarChannelBlock />
                </SideBarBlock>
              </SideBar>

              <section className="user-desktop">BLOCK DESKTOP</section>

              <section className="user-info">BLOCK USER INFO</section>
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
                  <SideBarChannelBlock />
                </SideBarBlock>

                <SideBarBlock>
                  <SideBarFriendsBlock />
                </SideBarBlock>
              </SideBar>

              <section className="user-desktop">BLOCK DESKTOP</section>

              <section className="user-info">BLOCK USER INFO</section>
            </Route>
          </>
        </Switch>

        <NewChannelForm />

      </div>
    </main>
  );
};
