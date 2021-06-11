import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollToChatList } from '../../../../../../constant';
import { OperationData } from '../../../../../../redux/data/dataReducer';
import {
  getMessangesList,
  getSelectRoom,
} from '../../../../../../redux/data/dataSelector';
import { GlobalState } from '../../../../../../redux/typeState';
import { getDays } from '../../../../../../utils/utils';

import { ChatDayItem } from '../chat-day-item/chat-day-item';

export const ChatDayList: React.FC = () => {
  const dispatch = useDispatch();
  const messanges = useSelector((state: GlobalState) =>
    getMessangesList(state)
  );
  const selectRoom = useSelector((state: GlobalState) => getSelectRoom(state));
  const chatDayListRef = React.useRef() as React.MutableRefObject<HTMLUListElement>;

  const daysMessanges = React.useMemo(() => {
    return getDays(messanges);
  }, [messanges]);

  const days = Object.entries(daysMessanges);

  const initGetUsers = React.useCallback(() => {
    if (selectRoom) {
      dispatch(OperationData.loadComment(selectRoom.idRoom, false));
    }
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
      {days.map((day, idx: number) => {
        return <ChatDayItem day={day} key={idx} />;
      })}
    </ul>
  );
};
