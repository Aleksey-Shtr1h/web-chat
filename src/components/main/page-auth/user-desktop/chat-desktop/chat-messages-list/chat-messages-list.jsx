import React from "react";

import { ChatMessangesItem } from "../chat-messages-item/chat-messages-item";

export const ChatMessangesList = ({ day }) => {
  return (
    <ul className="chat-messages-list">
      {day[1].map((comment, idx) => {
        return (
          <ChatMessangesItem comment={comment} key={idx + comment.message} />
        );
      })}
    </ul>
  );
};
