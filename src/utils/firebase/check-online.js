import firebase from 'firebase';

const onlineStatus = {
  isOfflineForDatabase: {
    state: 'offline',
    last_changed: firebase.database.ServerValue.TIMESTAMP,
  },

  isOnlineForDatabase: {
    state: 'online',
    last_changed: firebase.database.ServerValue.TIMESTAMP,
  },

  isOfflineForFirestore: {
    state: 'offline',
    last_changed: firebase.firestore.FieldValue.serverTimestamp(),
  },

  isOnlineForFirestore: {
    state: 'online',
    last_changed: firebase.firestore.FieldValue.serverTimestamp(),
  }
};

export const checkOnlineFirebase = () => {

  if (firebase.auth().currentUser === null) {
    return;
  }

  const userId = firebase.auth().currentUser.uid;
  
  const userStatusDatabaseRef = firebase.database().ref('/users/' + userId + '/status');
  const userStatusFirestoreRef = firebase.firestore().collection(`users`).doc(`${userId}`);

  firebase.database().ref('.info/connected').on('value', function(snapshot) {
    if (snapshot.val() === false) {
      // userStatusFirestoreRef.set(onlineStatus.isOfflineForFirestore);
      return;
    };

    userStatusDatabaseRef.onDisconnect().set(onlineStatus.isOfflineForDatabase)
    .then(() => {
      userStatusDatabaseRef.set(onlineStatus.isOnlineForDatabase);

      // userStatusFirestoreRef.set(onlineStatus.isOnlineForFirestore);
    });
  });
};

export const exitOnlineFirebase = (userId) => {
  const userStatusDatabaseRef = firebase.database().ref('/users/' + userId + '/status');
  // const userStatusFirestoreRef = firebase.firestore().collection(`users`).doc(`${userId}`);

  userStatusDatabaseRef.set(onlineStatus.isOfflineForDatabase);
  // userStatusFirestoreRef.set(onlineStatus.isOfflineForFirestore);
};