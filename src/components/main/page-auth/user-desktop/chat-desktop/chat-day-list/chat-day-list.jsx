import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollToChatList } from '../../../../../../constant';
import { OperationData } from '../../../../../../redux/data/dataReducer';
import {
  getMessangesList,
  getSelectRoom,
} from '../../../../../../redux/data/dataSelector';
import { getDays } from '../../../../../../utils/utils';

import { ChatDayItem } from '../chat-day-item/chat-day-item';

export const ChatDayList = () => {
  const dispatch = useDispatch();
  const messanges = useSelector((state) => getMessangesList(state));
  const selectRoom = useSelector((state) => getSelectRoom(state));
  const chatDayListRef = React.useRef(null);

  const daysMessanges = React.useMemo(() => {
    return getDays(messanges);
  }, [messanges]);

  const days = Object.entries(daysMessanges);

  const initGetUsers = React.useCallback(() => {
    dispatch(OperationData.loadComment(selectRoom.idRoom, false));
  }, [dispatch, selectRoom]);

  React.useEffect(() => {
    initGetUsers();
  }, [initGetUsers]);

  React.useEffect(() => {
    const height = chatDayListRef.current.scrollHeight;
    chatDayListRef.current.scrollTo(ScrollToChatList.MIN, height);
  }, [messanges]);

  return (
    <ul className="chat-day-list" ref={chatDayListRef}>
      {days.map((day, idx) => {
        return <ChatDayItem day={day} key={idx + day} />;
      })}
    </ul>
  );
};
