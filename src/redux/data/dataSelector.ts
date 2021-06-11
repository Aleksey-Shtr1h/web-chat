import { GlobalState } from "../typeState";

export const getSortUsers = (state: GlobalState): any[] | null => {
  const usersOnline: any[] = [];
  const usersOffline: any[] = [];

  const users: any[] | null = state.DATA.usersRoom;

  if (!users) {
    return users;
  };

  users.sort((a, b) => {
    if (a.info.name > b.info.name) {
      return 1
    }
    else {
      return -1
    };
  })
    .forEach((user) => {
      if (user.status.state === 'online') {
        usersOnline.push(user);
      } else {
        usersOffline.push(user);
      }
    });

  return [...usersOnline, ...usersOffline];

};

export const getSelectRoom = (state: GlobalState) => {
  return state.DATA.selectRoom;
};

export const getMessangesList = (state: GlobalState) => {
  return state.DATA.messagesList;
};

export const chooseUserCoomment = (state: GlobalState, userId: string): any | null => {
  const users: any[] | null = state.DATA.usersRoom;

  if (users !== null) return users.find((user: any) => user.userId === userId);

  return null;
};

