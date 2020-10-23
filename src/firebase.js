import * as firebase from 'firebase/app';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: 'AIzaSyAgDk-stNuxiPvzU2C9Kk4rqIrqqPq0RaI',
    authDomain: 'lakukampus-e-commerce.firebaseapp.com',
    databaseURL: 'https://lakukampus-e-commerce.firebaseio.com',
    projectId: 'lakukampus-e-commerce',
    storageBucket: 'lakukampus-e-commerce.appspot.com',
    messagingSenderId: '233584393898',
    appId: '1:233584393898:web:0d0bf49af56506bba91ad3',
    measurementId: 'G-NNTVHN8D04',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
