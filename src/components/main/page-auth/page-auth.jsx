import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import {SideBarFriendsList} from './side-bar-friends-list/side-bar-friends-list.jsx';

import {AppRoute} from '../../../constant.js';

export const PageAuth = () => {

  return (

    <Switch>
      <React.Fragment>
        <Redirect exact to={AppRoute.MAIN_ID.USER_DESKTOP_ID.START_TABLE} />
        <Route 
          exact 
          path={[
            AppRoute.MAIN_ID.USER_DESKTOP_ID.START_TABLE, 
            AppRoute.MAIN_ID.USER_DESKTOP_ID.FRIENDS
          ]}
        >

          <main className="main-content">
            <div className="container-content">

              <section className="side-bar">
                <div className="side-bar-block">

                  <div className="channels-header">
                    <p className="channels-header__text">channels</p>
                    <span className="channels-header__count">5</span>
                  </div>

                  <ul className="channels__list">
                    <li className="channels__item">
                      <a className="channels__link">
                      </a>
                    </li>
                    <li className="channels__item">
                      <a className="channels__link">
                        #channels1
                      </a>
                    </li>
                    <li className="channels__item">
                      <a className="channels__link">
                        #channels2
                      </a>
                    </li>
                  </ul>

                </div>

                <div className="side-bar-block">

                  <SideBarFriendsList/>

                </div>

              </section>

              <section className="user-desktop">
              </section>

              <section className="user-info">
              </section>

            </div>
          </main>

        </Route>

      </React.Fragment>

    </Switch>

  )
};