import * as fns from 'firebase-functions';
import * as admin from 'firebase-admin';

const isEqual = require('lodash/isEqual');

admin.initializeApp();

const db = admin.firestore();

exports.onDocumentCreated = fns.firestore.document('{collection}/{docId}').onCreate((snapshot) => {
  const timeCurrent = admin.firestore.Timestamp.now();

  return snapshot.ref.update({
    _created: timeCurrent,
    _updated: timeCurrent,
    _deleted: null,
  })
})

exports.onDocumentUpdated = fns.firestore.document('{collection}/{docId}').onUpdate((change) => {
  const {_updated: updatedBefore, ...dataBefore} = change.before.data();
  const {_updated: updatedAfter, ...dataAfter} = change.after.data();

  return isEqual(dataBefore, dataAfter) ?
    Promise.resolve(undefined) :
    change.after.ref.update({
      _updated: admin.firestore.Timestamp.now(),
    })
})

exports.onNewUserLogin = fns.auth.user().onCreate((user) => {
  const ref = db.collection('users');
  return ref.doc(user.uid).create({
    name: user.displayName,
    email: user.email,
    img: user.photoURL,
    address: '',
    phoneNumber: user.phoneNumber || '',
    birthDate: null,
  });
})
