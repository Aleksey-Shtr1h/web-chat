import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SideBarFriendsItem } from "../side-bar-friends-item/side-bar-friends-item.jsx";
import { SideBarNameBlock } from "../side-bar-name-block/side-bar-name-block.jsx";

import { OperationData } from "../../../../../redux/data/dataReducer.js";
import { getSortUsers } from "../../../../../redux/data/dataSelector.js";
import { getTogglePreloadUsers } from "../../../../../redux/app/appSelector.js";
import { TypeSideBarNameBlock } from "../../../../../constant.js";

export const SideBarFriendsBlock = () => {
  const usersRoom = useSelector((state) => getSortUsers(state));
  const isPreloadUsers = useSelector((state) => getTogglePreloadUsers(state));
  const dispatch = useDispatch();

  const initGetUsers = useCallback(() => {
    dispatch(OperationData.loadUsers());
  }, [dispatch]);

  useEffect(() => {
    initGetUsers();
  }, [initGetUsers]);

  if (isPreloadUsers) {
    return (
      <SideBarNameBlock
        typeChannels={TypeSideBarNameBlock.FRIENDS}
        styleColor={{ color: "#ffffff" }}
        nameSpan={`Loading...`}
      />
    );
  }

  return (
    <>
      {usersRoom.length !== 0 ? (
        <>
          <SideBarNameBlock
            typeChannels={TypeSideBarNameBlock.FRIENDS}
            nameSpan={usersRoom.length}
          />

          <ul className="friends__list">
            {usersRoom.map((user, index) => {
              return (
                <SideBarFriendsItem key={index} user={user} index={index} />
              );
            })}
          </ul>
        </>
      ) : (
        <>
          <div className="friends-header">
            <p className="friends-header__text">not users</p>
          </div>
        </>
      )}
    </>
  );
};
