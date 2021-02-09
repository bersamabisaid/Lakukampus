import { SessionStorage } from 'quasar';
import { auth } from 'src/firebase';
import type fb from 'firebase';

const state = {
  user: auth.currentUser?.toJSON(),

  isWaitingAuthentication: true,

  isWaitingRedirectResult: Boolean(SessionStorage.getItem('state.isWaitingRedirectResult')),

  firebaseAuthStateListener: undefined as (undefined | fb.Unsubscribe),
};

export default state;

export type AuthStateInterface = typeof state;
