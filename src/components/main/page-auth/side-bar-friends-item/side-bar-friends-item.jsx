import React from 'react';

export const SideBarFriendsItem = ({user, index}) => {

    if (user.status === undefined || user.info === undefined) {

      return (
        <li className="friends__item">
          <a 
            href="" 
            className="friends__link"
          >
            Loading...
          </a>
        </li>
      )

    }

    const {info, status} = user;

    return (
      <li className="friends__item">

        <a 
          href="" 
          className={`friends__link friends__link--${status.state}`}
        >
          {info.name}
        </a>

      </li>
    )

};