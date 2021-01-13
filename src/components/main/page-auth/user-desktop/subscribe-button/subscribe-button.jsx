import React from "react";
import { useDispatch } from "react-redux";

import { OperationData } from "../../../../../redux/data/dataReducer";

export const SubscribeButton = ({ selectRoom, userProfile }) => {
  const dispatch = useDispatch();
  const { userId } = userProfile;
  const {
    idRoom,
    usersRoom,
    info: { nameRoom },
  } = selectRoom;

  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            OperationData.addUserToChannel(userId, idRoom, usersRoom, nameRoom)
          );
        }}
      >
        Subribe Channel
      </button>
    </div>
  );
};
