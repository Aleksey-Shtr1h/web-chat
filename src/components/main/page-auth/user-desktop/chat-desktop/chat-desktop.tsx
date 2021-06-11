import React from 'react';

import { ChatDayList } from './chat-day-list/chat-day-list';
import { FormMessages } from './form-messages/form-messages';

export const ChatDesktop: React.FC = () => {
  return (
    <div className="user-desktop-chat">
      <ChatDayList />
      <FormMessages />
    </div>
  );
};
