import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {SideBarFriendsItem} from '../side-bar-friends-item/side-bar-friends-item.jsx';

import {OperationData} from '../../../../redux/data/dataReducer.js';

export const SideBarFriendsList = () => {
  const users = useSelector((state) => state.DATA.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(OperationData.loadUsers());
  }, []);


  if(!users) {
    return (
      <div className="friends-header">
        <p className="friends-header__text">friends</p>
        <span className="friends-header__count" style={{color: "#ffffff"}}>Loading...</span>
      </div>
    )
  };

  return (
    <React.Fragment>

      <div className="friends-header">
        <p className="friends-header__text">friends</p>
        <span className="friends-header__count">{users.length}</span>
      </div>

      
      <ul className="friends__list">


        {users.map((user, index) => {
          return (
            <SideBarFriendsItem
              key={index} 
              user={user}
              index={index}
            />
          )
        })}
        
      </ul>

    </React.Fragment>
  )
};
