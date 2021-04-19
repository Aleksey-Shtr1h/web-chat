import React from "react";

export const MenuRoom = () => {
  const [toglleBtnMenuRoom, setToglleBtnMenu] = React.useState(true);
  const buttonRef = React.useRef(null);

  const isShowBtnMenuRoom = toglleBtnMenuRoom ? "menu-hide" : "";

  return (
    <div className="desktop-menu-room">
      <ul className={`menu-room-list ${isShowBtnMenuRoom}`}>
        <li className="menu-room-item">Команда1</li>
        <li className="menu-room-item">Команда2</li>
        <li className="menu-room-item">Команда3</li>
        <li className="menu-room-item">Команда4</li>
        <li className="menu-room-item">Команда4</li>
        <li className="menu-room-item">Команда4</li>
        <li className="menu-room-item">Команда4</li>
        <li className="menu-room-item">Команда4</li>
        <li className="menu-room-item">Команда4</li>
        <li className="menu-room-item">Команда4</li>
      </ul>

      <button
        ref={buttonRef}
        className="menu-room-btn"
        onClick={() => {
          setToglleBtnMenu((prev) => !prev);
        }}
      >
        <svg
          className="menu-room-icon"
          width="6"
          height="17"
          viewBox="0 0 6 17"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="1">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.25001 7C4.21649 7 4.99997 7.78349 4.99997 8.75C4.99997 9.7165 4.21649 10.5 3.25001 10.5C2.28353 10.5 1.49997 9.7165 1.49997 8.75C1.49997 7.78349 2.28353 7 3.25001 7Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.25 1.00001C4.21648 1.00001 4.99996 1.7835 4.99996 2.75C4.99996 3.7165 4.21648 4.5 3.25 4.5C2.28353 4.5 1.49997 3.7165 1.49997 2.75C1.49997 1.7835 2.28353 1.00001 3.25 1.00001Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.25 13C4.21648 13 4.99996 13.7835 4.99996 14.75C4.99996 15.7165 4.21648 16.5 3.25 16.5C2.28353 16.5 1.49997 15.7165 1.49997 14.75C1.49997 13.7835 2.28353 13 3.25 13Z"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};
