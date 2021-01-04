export const addRoomFirebaseUsers = (firebase, usersRoom, idRoom, nameRoom) => {
  const dataBase = firebase.database().ref(`users`);
  let usersAuthId = [];

  dataBase.on(`value`, async (snapshot) => {
    const usersBase = Object.entries(snapshot.val());

    usersAuthId = usersRoom.map((userId) => {
      return usersBase.find((userBase) => {
        return userId === userBase[1].userId
      })[0];
    })
  });

  if (usersAuthId.length > 0) {
    usersAuthId.forEach((userAuthId) => {
      const dataBaseInfo = firebase.database().ref(`users/${userAuthId}/channelsUser`).push();

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