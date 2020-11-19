import firebase from 'firebase';

export const initialFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyB-Qj5y11gismV4eZbaubJL9B1CDTFI9-s",
    authDomain: "web-chat-1b38f.firebaseapp.com",
    databaseURL: "https://web-chat-1b38f.firebaseio.com",
    projectId: "web-chat-1b38f",
    storageBucket: "web-chat-1b38f.appspot.com",
    messagingSenderId: "340398160492",
    appId: "1:340398160492:web:62abd80b5f0a424c787649"
  };

  firebase.initializeApp(firebaseConfig);
}