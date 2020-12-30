import firebase from 'firebase/app';
import config from 'app/firebase.config.json';

firebase.initializeApp(config);

export default firebase;
