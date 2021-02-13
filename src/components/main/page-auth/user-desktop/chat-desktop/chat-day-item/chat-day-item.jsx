import React from "react";

import { ChatMessangesList } from "../chat-messages-list/chat-messages-list";

export const ChatDayItem = ({ day }) => {
  return (
    <li className="chat-day__item">
      {day[0] !== "Loading" && (
        <div className="chat-day__info">
          <time className="chat-day__time" dateTime="">
            {day[0]}
          </time>
        </div>
      )}

      <ChatMessangesList comments={day[1]} />
    </li>
  );
};
