import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreatorApp } from "../../../../redux/app/appAction";

import { OperationData } from "../../../../redux/data/dataReducer";
import { getUserProfile } from "./../../../../redux/user/usersSelector";
import { getStateModalAddChannel } from "./../../../../redux/app/appSelector";

export const NewChannelForm = () => {
  const dispatch = useDispatch();

  const userProfile = useSelector((state) => getUserProfile(state));
  const isModalAddChannel = useSelector((state) =>
    getStateModalAddChannel(state)
  );

  const [nameRoom, setNameRoom] = React.useState(``);
  const [toggleButtonSubmit, setToggleButtonSubmit] = React.useState(false);

  const escFunction = React.useCallback(
    (event) => {
      if (event.keyCode === 27) {
        dispatch(ActionCreatorApp.toglleModalAddChannel(false));
      }
    },
    [dispatch]
  );

  React.useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  React.useEffect(() => {
    if (userProfile !== null) {
      setToggleButtonSubmit(true);
    }
  }, [userProfile, toggleButtonSubmit]);

  const testMemo = useMemo(() => {
    if (!isModalAddChannel) {
      setNameRoom(``);
    }
    return isModalAddChannel ? "modal-show" : "modal-hide";
  }, [isModalAddChannel]);

  return (
    <section className={`add-channel ${testMemo}`}>
      <div className="add-channel-cantainer">
        <form
          className="form-main"
          action="#"
          method="post"
          onSubmit={(evt) => {
            evt.preventDefault();
            if (nameRoom !== ``) {
              dispatch(
                OperationData.createChannel(
                  nameRoom,
                  [userProfile.userId],
                  [userProfile.userId]
                )
              );
            }
            setNameRoom(``);
          }}
        >
          <div className="wrap-form-main">
            <ul className="form-main-list">
              <li className="form-main-list__item">
                <label className="form-main-list__text" htmlFor="room-text">
                  Enter name room
                </label>
                <input
                  className="form-main-list__input"
                  type="text"
                  id="room-text"
                  placeholder="name room"
                  value={nameRoom}
                  onChange={(evt) => setNameRoom(evt.target.value)}
                />
              </li>
            </ul>

            <div className="container-flex-row container-channel-btn">
              <button
                className="form-main-btn-submit form-channel-btn"
                type="submit"
                disabled={toggleButtonSubmit ? "" : "disabled"}
              >
                Add room
              </button>

              <button
                className="form-main-btn-submit form-channel-btn"
                type="button"
                onClick={() => {
                  dispatch(ActionCreatorApp.toglleModalAddChannel(false));
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
