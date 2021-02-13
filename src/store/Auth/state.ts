import { SessionStorage } from 'quasar';
import { auth } from 'src/firebase';
import type fb from 'firebase';

export interface IUser {
  uid: string;
  displayName: string;
  email: string;
  emailVerified: boolean;
  createdAt: number;
  phoneNumber: string | null;
  photoURL: string | null;
}

const state = {
  user: auth.currentUser?.toJSON() as IUser,

  isWaitingAuthentication: true,

  isWaitingRedirectResult: Boolean(SessionStorage.getItem('state.isWaitingRedirectResult')),

  firebaseAuthStateListener: undefined as (undefined | fb.Unsubscribe),
};

export default state;

export type AuthStateInterface = typeof state;
