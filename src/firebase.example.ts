import firebase from 'firebase/app';

const firebaseConfig = {
  // your config here...
} as const;

firebase.initializeApp(firebaseConfig);

export default firebase;
