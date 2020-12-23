export const getSortUsers = (state) => {
  const usersOnline = [];
  const usersOffline = [];

  const users = state.DATA.usersRoom;

  if (users.length === 0) {
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