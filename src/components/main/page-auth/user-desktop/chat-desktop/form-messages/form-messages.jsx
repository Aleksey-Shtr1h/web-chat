import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { OperationData } from "../../../../../../redux/data/dataReducer";
import { getSelectRoom } from "../../../../../../redux/data/dataSelector";
import { getUserProfile } from "./../../../../../../redux/user/usersSelector";

export const FormMessages = () => {
  const dispatch = useDispatch();
  const selectRoom = useSelector((state) => getSelectRoom(state));
  const userProfile = useSelector((state) => getUserProfile(state));
  const [inputValue, setInputValue] = React.useState("");

  // const { idRoom } = selectRoom;
  const {
    info: { name },
    userId,
  } = userProfile;

  return (
    <form
      className="form-messages-submit"
      action=""
      name="messages"
      method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
        dispatch(
          OperationData.createComment(
            selectRoom.idRoom,
            inputValue,
            name,
            userId
          )
        );
        setInputValue("");
      }}
    >
      <label
        className="form-messages__text"
        htmlFor="messages-text"
        area-label="messages-text"
      ></label>
      <textarea
        className="form-main-list__input form-messages__input"
        minLength="1"
        maxLength="1000"
        name="messages-text"
        id="messages-text"
        placeholder="Your message"
        value={inputValue}
        onChange={(evt) => {
          setInputValue(evt.target.value);
        }}
      />
      <button className="form-main-btn-submit form-messages__btn" type="submit">
        Send
      </button>
    </form>
  );
};
