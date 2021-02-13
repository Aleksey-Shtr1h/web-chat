import React from "react";

import { ChatMessangesItem } from "../chat-messages-item/chat-messages-item";

export const ChatMessangesList = ({ comments }) => {
  return (
    <ul className="chat-messages-list">
      {comments.map((comment, idx) => {
        return (
          <ChatMessangesItem comment={comment} key={idx + comment.message} />
        );
      })}
    </ul>
  );
};
