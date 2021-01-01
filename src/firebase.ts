import firebase from 'firebase/app';
import config from 'app/firebase.config.json';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp(config);

interface FailedPersistanceError {
  code: 'failed-precondition' | 'unimplemented'
}

const db = firebase.firestore();
const auth = firebase.auth();

db.enablePersistence()
  .catch((err: FailedPersistanceError) => {
    if (err.code === 'failed-precondition') {
      //
    } else if (err.code === 'unimplemented') {
      //
    }
  });

export default firebase;
export {
  db, auth,
};
