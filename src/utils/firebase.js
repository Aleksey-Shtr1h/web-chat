import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: "AIzaSyB-Qj5y11gismV4eZbaubJL9B1CDTFI9-s",
  authDomain: "web-chat-1b38f.firebaseapp.com",
  databaseURL: "https://web-chat-1b38f.firebaseio.com",
  projectId: "web-chat-1b38f",
  storageBucket: "web-chat-1b38f.appspot.com",
  messagingSenderId: "340398160492",
  appId: "1:340398160492:web:62abd80b5f0a424c787649"
});

// const auth = firebase.auth();

export {firebase};