import * as firebase from 'firebase/app';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: 'AIzaSyCh4TVIDno6AkM0NDO9XOi02PaKKx5xtxc',
    authDomain: 'lakukampus-dev.firebaseapp.com',
    databaseURL: 'https://lakukampus-dev.firebaseio.com',
    projectId: 'lakukampus-dev',
    storageBucket: 'lakukampus-dev.appspot.com',
    messagingSenderId: '452090096078',
    appId: '1:452090096078:web:da34efa8d4802cb344e39f',
    measurementId: 'G-V1QXB3MRD8',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
