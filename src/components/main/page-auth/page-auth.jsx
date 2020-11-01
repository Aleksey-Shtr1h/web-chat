import React from 'react';

import {SideBarFriendsList} from './side-bar-friends-list/side-bar-friends-list.jsx';

export const PageAuth = () => {

  return (
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
                <a href="" className="channels__link">
                </a>
              </li>
              <li className="channels__item">
                <a href="" className="channels__link">
                  #channels1
                </a>
              </li>
              <li className="channels__item">
                <a href="" className="channels__link">
                  #channels2
                </a>
              </li>
              <li className="channels__item">
                <a href="" className="channels__link">
                  #channels3
                </a>
              </li>
              <li className="channels__item">
                <a href="" className="channels__link">
                  #channels4
                </a>
              </li>
              <li className="channels__item">
                <a href="" className="channels__link">
                  #channels6
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
  )
};