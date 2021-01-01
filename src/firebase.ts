import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/functions';
import config from 'app/firebase.config.json';
import { emulators } from 'app/firebase.json';

const DEV_HOST = 'localhost';

firebase.initializeApp(config);

const db = firebase.firestore();
const auth = firebase.auth();
const fns = firebase.functions();

/* eslint-disable no-restricted-globals */
if (process.env.DEV || location.hostname === DEV_HOST) {
  const authUrlEmulator = new URL(location.origin);
  authUrlEmulator.hostname = DEV_HOST;
  authUrlEmulator.port = emulators.auth.port.toString();

  db.useEmulator(DEV_HOST, emulators.firestore.port);
  fns.useEmulator(DEV_HOST, emulators.functions.port);
  auth.useEmulator(authUrlEmulator.toString());
}
/* eslint-enable no-restricted-globals */

interface FailedPersistanceError {
  code: 'failed-precondition' | 'unimplemented'
}

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
  db, auth, fns,
};
