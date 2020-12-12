import firebase from 'src/firebase';
import 'firebase/firestore';
import 'firebase/auth';

export const db = firebase.firestore();
export const auth = firebase.auth();
