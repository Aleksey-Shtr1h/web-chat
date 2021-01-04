import React from "react";
import { useSelector } from "react-redux";
import { getSelectRoom } from "../../../../../../redux/data/dataSelector";

export const InfoRoom = () => {
  const selectRoom = useSelector((state) => getSelectRoom(state));
  const { usersRoom, info } = selectRoom;
  return (
    <div className="info-room">
      <h2 className="info-room__title">{info.nameRoom}</h2>
      <p className="info-room__count-users">{usersRoom.length}</p>
      <form
        className="menu-room-form-search"
        action=""
        name="search"
        method="post"
      >
        <label
          className="menu-room-search__text"
          htmlFor="search"
          area-label="search"
        ></label>
        <input
          className="menu-room-search__input"
          type="search"
          name="search"
          id="search"
          placeholder="search..."
        />
        <button className="menu-room-search__btn" type="submit">
          <svg
            className="menu-room-search__icon"
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.3638 13.866C14.1868 14.04 13.9001 14.04 13.7231 13.866L10.0951 10.2957C9.08286 11.1041 7.79404 11.5901 6.38879 11.5901C3.13655 11.5901 0.500061 8.99556 0.500061 5.79508C0.500061 2.59454 3.13655 2.99811e-05 6.38879 2.99811e-05C9.64103 2.99811e-05 12.2776 2.59454 12.2776 5.79508C12.2776 7.29154 11.6962 8.65109 10.7499 9.67925L14.3638 13.2354C14.5407 13.4097 14.5407 13.6919 14.3638 13.866ZM6.38879 0.891621C3.63681 0.891621 1.40594 3.08689 1.40594 5.79508C1.40594 8.50324 3.63681 10.6986 6.38879 10.6986C9.14069 10.6986 11.3715 8.50324 11.3715 5.79508C11.3715 3.08689 9.14069 0.891621 6.38879 0.891621Z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};
