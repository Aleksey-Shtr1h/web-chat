import React from 'react';

import { ChatMessangesItem } from '../chat-messages-item/chat-messages-item';

interface Message {
  idMessage: string;
  message: string;
  nameUser: string;
  timestamp: {
    seconds: number;
    nanoseconds: number;
    toDate: () => string;
  };
  userId: string;
}

interface Props {
  comments: Message[];
}

export const ChatMessangesList: React.FC<Props> = ({ comments }: Props) => {
  return (
    <ul className="chat-messages-list">
      {comments.map((comment: Message, idx: number) => {
        return (
          <ChatMessangesItem comment={comment} key={idx + comment.message} />
        );
      })}
    </ul>
  );
};
