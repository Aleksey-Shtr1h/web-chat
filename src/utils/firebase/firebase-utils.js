export const addRoomFirebaseUsers = (firebase, usersRoom, idRoom, nameRoom) => {
  const dataBase = firebase.database().ref(`users`);
  let usersAuthId = [];

  dataBase.on(`value`, async (snapshot) => {
    const usersBase = Object.entries(snapshot.val());

    usersRoom.forEach((userId) => {
      const userInfo = usersBase.find((userBase) => {
        if (userBase[1].channelsUser) {
          const channelsUser = Object.values(userBase[1].channelsUser)
          const doubleUsers = channelsUser.find((channelUser) => channelUser.idRoom === idRoom);
          if (doubleUsers) {
            return userId === userBase[1].userId && doubleUsers.idRoom !== idRoom;
          }
        }

        return userId === userBase[1].userId;
      });

      if (userInfo) {
        usersAuthId.push(userInfo[0]);
      }

    })

  });

  if (usersAuthId.length > 0) {
    usersAuthId.forEach((userAuth) => {
      const dataBaseInfo = firebase.database().ref(`users/${userAuth}/channelsUser`).push();

      dataBaseInfo.set({ idRoom, nameRoom });
    })
  }
};

export const deleteUserRoom = (firebase, idRoom, idUser) => {
  firebase.firestore().collection(`rooms`)
    .doc(idRoom)
    .update({
      usersRoom: firebase.firestore.FieldValue.arrayRemove(idUser),
    });
}

export const checkDoubleDate = (firebase, idRoom, usersRoom) => {

  const merge = [...new Set(usersRoom)];

  if (merge.length !== usersRoom.length) {
    firebase.firestore().collection(`rooms`)
      .doc(idRoom)
      .update({
        usersRoom: [...new Set(usersRoom)],
      });
  }
}